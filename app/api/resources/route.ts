import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { resend } from "@/lib/resend";

const schema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email:    z.string().trim().email().max(255),
  role:     z.string().min(1),
  phone:    z.string().trim().max(80).optional(),
  company:  z.string().trim().max(160).optional(),
  wechat:   z.string().trim().max(80).optional(),
  remarks:  z.string().trim().max(1000).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 }
      );
    }

    const data = result.data;

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from("resource_requests")
      .insert({
        full_name: data.fullName,
        email:     data.email,
        role:      data.role,
        phone:     data.phone,
        company:   data.company,
        wechat:    data.wechat,
        remarks:   data.remarks,
      });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Notify Nick
    await resend.emails.send({
      from:    "Sophian Website <onboarding@resend.dev>",
      to:      process.env.NOTIFICATION_EMAIL!,
      subject: `New Resource Request — ${data.fullName}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#022741;padding:32px;margin-bottom:24px;">
            <h1 style="color:#908E66;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;">
              Sophian International
            </h1>
            <h2 style="color:#fff;font-size:24px;font-weight:300;margin:12px 0 0;">
              New Free Resource Request
            </h2>
          </div>
          <div style="padding:0 8px;">
            <h3 style="color:#022741;margin:0 0 8px;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Role:</strong> ${data.role}</p>
            <p><strong>Phone:</strong> ${data.phone || "—"}</p>
            <p><strong>Company:</strong> ${data.company || "—"}</p>
            <p><strong>WeChat/WhatsApp:</strong> ${data.wechat || "—"}</p>
            ${data.remarks ? `
            <h3 style="color:#022741;margin:24px 0 8px;">Remarks / Resource Requests</h3>
            <p style="background:#F7F4EF;padding:16px;line-height:1.7;">
              ${data.remarks.replace(/\n/g, "<br/>")}
            </p>` : ""}
            <div style="border-top:1px solid #908E66;margin-top:32px;padding-top:16px;">
              <p style="font-size:11px;color:#6b6b6b;letter-spacing:0.15em;text-transform:uppercase;">
                Sophian International · Free Resources Request
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Confirmation to requester
    await resend.emails.send({
      from:    "Nick Huang · Sophian International <onboarding@resend.dev>",
      to:      data.email,
      subject: "Your free resources are on their way — Sophian International",
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#022741;padding:32px;margin-bottom:24px;">
            <h1 style="color:#908E66;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;">
              Sophian International
            </h1>
            <h2 style="color:#fff;font-size:24px;font-weight:300;margin:12px 0 0;">
              Thank you, ${data.fullName.split(" ")[0]}.
            </h2>
          </div>
          <div style="padding:0 8px;">
            <p style="font-size:15px;line-height:1.8;color:#1a1a1a;">
              Your request has been received. We'll review your details and send your
              selected resources within one business day.
            </p>
            <div style="border-left:2px solid #908E66;padding-left:16px;margin:24px 0;">
              <p style="font-style:italic;color:#6b6b6b;font-size:14px;line-height:1.7;">
                "Practical tools built from 20+ years of real hospitality experience."
              </p>
              <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#908E66;margin-top:8px;">
                — Sophian International
              </p>
            </div>
            <p style="font-size:13px;color:#6b6b6b;line-height:1.7;">
              Resources are provided for general guidance only and do not constitute
              legal advice. Unsubscribe anytime.
            </p>
            <div style="border-top:1px solid #908E66;margin-top:32px;padding-top:16px;">
              <p style="font-size:11px;color:#6b6b6b;letter-spacing:0.15em;text-transform:uppercase;">
                Sophian International · YourGuide@sophianinternational.com
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resources API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
