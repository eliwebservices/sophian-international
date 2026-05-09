import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase";
import { resend } from "@/lib/resend";

const schema = z.object({
  fullName:              z.string().trim().min(1).max(120),
  role:                  z.string().min(1),
  company:               z.string().trim().min(1).max(160),
  location:              z.string().trim().max(160).optional(),
  email:                 z.string().trim().email().max(255),
  phone:                 z.string().trim().max(80).optional(),
  service:               z.enum(["search", "training", "consulting", "unsure"]),
  timeline:              z.string().optional(),
  message:               z.string().trim().min(10).max(1500),
  // Executive Search
  searchRole:            z.string().optional(),
  searchBrand:           z.string().optional(),
  searchLocation:        z.string().optional(),
  searchExperience:      z.string().optional(),
  // Corporate Training
  trainingAudience:      z.string().optional(),
  trainingTopic:         z.string().optional(),
  trainingParticipants:  z.string().optional(),
  trainingFormat:        z.string().optional(),
  // HR Consulting
  consultingDriver:      z.string().optional(),
  consultingHeadcount:   z.string().optional(),
  consultingPain:        z.string().optional(),
});

const serviceLabels: Record<string, string> = {
  search:     "Executive Search",
  training:   "Corporate Training",
  consulting: "HR Consulting",
  unsure:     "Not Sure Yet",
};

function buildConditionalSection(data: z.infer<typeof schema>): string {
  if (data.service === "search") {
    return `
      <h3 style="color:#022741;margin:24px 0 8px;">Executive Search Details</h3>
      <p><strong>Role Title(s):</strong> ${data.searchRole || "—"}</p>
      <p><strong>Brand Level:</strong> ${data.searchBrand || "—"}</p>
      <p><strong>Location:</strong> ${data.searchLocation || "—"}</p>
      <p><strong>Must-Have Experience:</strong><br/>${data.searchExperience?.replace(/\n/g, "<br/>") || "—"}</p>
    `;
  }
  if (data.service === "training") {
    return `
      <h3 style="color:#022741;margin:24px 0 8px;">Corporate Training Details</h3>
      <p><strong>Audience Level:</strong> ${data.trainingAudience || "—"}</p>
      <p><strong>Topic Focus:</strong> ${data.trainingTopic || "—"}</p>
      <p><strong>Participants:</strong> ${data.trainingParticipants || "—"}</p>
      <p><strong>Delivery Format:</strong> ${data.trainingFormat || "—"}</p>
    `;
  }
  if (data.service === "consulting") {
    return `
      <h3 style="color:#022741;margin:24px 0 8px;">HR Consulting Details</h3>
      <p><strong>Driver:</strong> ${data.consultingDriver || "—"}</p>
      <p><strong>Headcount:</strong> ${data.consultingHeadcount || "—"}</p>
      <p><strong>Pain Point:</strong> ${data.consultingPain || "—"}</p>
    `;
  }
  return "";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
        // Fix: Zod v4 uses result.error.issues instead of result.error.errors
        return NextResponse.json(
          { error: result.error.issues[0]?.message ?? "Invalid data" },
          { status: 400 }
        );
      }
      

    const data = result.data;

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        full_name:              data.fullName,
        role:                   data.role,
        company:                data.company,
        location:               data.location,
        email:                  data.email,
        phone:                  data.phone,
        service:                data.service,
        timeline:               data.timeline,
        message:                data.message,
        search_role:            data.searchRole,
        search_brand:           data.searchBrand,
        search_location:        data.searchLocation,
        search_experience:      data.searchExperience,
        training_audience:      data.trainingAudience,
        training_topic:         data.trainingTopic,
        training_participants:  data.trainingParticipants,
        training_format:        data.trainingFormat,
        consulting_driver:      data.consultingDriver,
        consulting_headcount:   data.consultingHeadcount,
        consulting_pain:        data.consultingPain,
      });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Send notification email to Nick
    await resend.emails.send({
      from:    "Sophian Website <onboarding@resend.dev>",
      to:      process.env.NOTIFICATION_EMAIL!,
      subject: `New Inquiry — ${serviceLabels[data.service]} — ${data.fullName}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#022741;padding:32px;margin-bottom:24px;">
            <h1 style="color:#908E66;font-size:14px;letter-spacing:0.3em;text-transform:uppercase;margin:0;">
              Sophian International
            </h1>
            <h2 style="color:#fff;font-size:24px;font-weight:300;margin:12px 0 0;">
              New Inquiry Received
            </h2>
          </div>

          <div style="padding:0 8px;">
            <p style="background:#F7F4EF;padding:12px 16px;font-size:13px;">
              <strong>Service:</strong> ${serviceLabels[data.service]}
              ${data.timeline ? ` &nbsp;·&nbsp; <strong>Timeline:</strong> ${data.timeline}` : ""}
            </p>

            <h3 style="color:#022741;margin:24px 0 8px;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Role:</strong> ${data.role}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Location:</strong> ${data.location || "—"}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone/WeChat:</strong> ${data.phone || "—"}</p>

            <h3 style="color:#022741;margin:24px 0 8px;">Message</h3>
            <p style="background:#F7F4EF;padding:16px;line-height:1.7;">
              ${data.message.replace(/\n/g, "<br/>")}
            </p>

            ${buildConditionalSection(data)}

            <div style="border-top:1px solid #908E66;margin-top:32px;padding-top:16px;">
              <p style="font-size:11px;color:#6b6b6b;letter-spacing:0.15em;text-transform:uppercase;">
                Sophian International · Confidential Inquiry
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the enquirer
    await resend.emails.send({
      from:    "Nick Huang · Sophian International <onboarding@resend.dev>",
      to:      data.email,
      subject: "Your inquiry has been received — Sophian International",
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
              Your inquiry has been received. A real person reviews every message —
              you can expect a response within 24 business hours.
            </p>

            <div style="border-left:2px solid #908E66;padding-left:16px;margin:24px 0;">
              <p style="font-style:italic;color:#6b6b6b;font-size:14px;line-height:1.7;">
                "When people are developed with clarity, care, and purpose,
                performance follows naturally."
              </p>
              <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#908E66;margin-top:8px;">
                — Nick Huang
              </p>
            </div>

            <p style="font-size:13px;color:#6b6b6b;line-height:1.7;">
              All inquiries are treated with complete confidentiality. We do not share
              your details without permission.
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
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
