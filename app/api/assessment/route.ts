import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { resend } from "@/lib/resend";

// Fix 1: z.record() in Zod v4 requires both key and value types
const schema = z.object({
  totalScore: z.number().min(0).max(75),
  scoreBand:  z.string(),
  priority:   z.string().optional(),
  answers:    z.record(z.string(), z.number()),
});

const serviceMap: Record<string, string> = {
  executive:  "Executive Search",
  training:   "Corporate Training & Leadership Capability",
  consulting: "People & Culture Solutions",
  unsure:     "Not Sure Yet",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      // Fix 2: Zod v4 uses result.error.issues instead of result.error.errors
      return NextResponse.json(
        { error: result.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 }
      );
    }

    const data = result.data;

    const recommendedService = data.priority
      ? serviceMap[data.priority] ?? data.priority
      : "Not specified";

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from("assessment_leads")
      .insert({
        total_score:          data.totalScore,
        score_band:           data.scoreBand,
        priority:             data.priority,
        recommended_service:  recommendedService,
        answers:              data.answers,
      });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Fix 3: answers is now Record<string, number> so string keys work fine
    const sectionScores = [
      ["Executive Search",              "p1", 5],
      ["Corporate Training & Leadership", "p2", 5],
      ["People & Culture",              "p3", 5],
    ] as const;

    const sectionRows = sectionScores
      .map(([label, prefix, count]) => {
        const score = Array.from(
          { length: count },
          (_, i) => data.answers[`${prefix}q${i}`] ?? 0
        ).reduce((a, b) => a + b, 0);

        return `
          <tr style="border-bottom:1px solid #eee;">
            <td style="padding:8px 12px;">${label}</td>
            <td style="padding:8px 12px;text-align:center;color:#022741;font-weight:bold;">${score}</td>
            <td style="padding:8px 12px;text-align:center;color:#6b6b6b;">${count * 5}</td>
          </tr>
        `;
      })
      .join("");

    // Notify Nick
    await resend.emails.send({
      from:    "Sophian Website <onboarding@resend.dev>",
      to:      process.env.NOTIFICATION_EMAIL!,
      subject: `New Assessment Lead — Score: ${data.totalScore}/75 — ${data.scoreBand}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#022741;padding:32px;margin-bottom:24px;">
            <h1 style="color:#908E66;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;">
              Sophian International
            </h1>
            <h2 style="color:#fff;font-size:24px;font-weight:300;margin:12px 0 0;">
              New Assessment Completed
            </h2>
          </div>

          <div style="padding:0 8px;">
            <div style="background:#F7F4EF;padding:20px;margin-bottom:24px;text-align:center;">
              <p style="font-size:48px;color:#022741;margin:0;font-weight:300;">
                ${data.totalScore}<span style="font-size:24px;color:#6b6b6b;">/75</span>
              </p>
              <p style="font-size:14px;letter-spacing:0.2em;text-transform:uppercase;color:#908E66;margin:8px 0 0;">
                ${data.scoreBand}
              </p>
            </div>

            <p><strong>Priority Area:</strong> ${recommendedService}</p>

            <h3 style="color:#022741;margin:24px 0 12px;">Section Scores</h3>
            <table style="width:100%;border-collapse:collapse;font-size:13px;">
              <tr style="background:#022741;color:#fff;">
                <th style="padding:8px 12px;text-align:left;">Section</th>
                <th style="padding:8px 12px;text-align:center;">Score</th>
                <th style="padding:8px 12px;text-align:center;">Max</th>
              </tr>
              ${sectionRows}
            </table>

            <div style="border-top:1px solid #908E66;margin-top:32px;padding-top:16px;">
              <p style="font-size:11px;color:#6b6b6b;letter-spacing:0.15em;text-transform:uppercase;">
                Sophian International · Assessment Lead
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Assessment API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
