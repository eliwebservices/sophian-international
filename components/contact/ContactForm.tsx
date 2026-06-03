"use client";
import { useState } from "react";

type ServiceKey = "search" | "training" | "consulting" | "unsure" | "";

const initial = {
  fullName: "",
  role: "",
  company: "",
  location: "",
  email: "",
  phone: "",
  service: "" as ServiceKey,
  timeline: "",
  message: "",
  searchRole: "",
  searchBrand: "",
  searchLocation: "",
  searchExperience: "",
  trainingAudience: "",
  trainingTopic: "",
  trainingParticipants: "",
  trainingFormat: "",
  consultingDriver: "",
  consultingHeadcount: "",
  consultingPain: "",
};

const labelCls =
  "block font-display text-[9px] font-semibold tracking-[0.28em] uppercase text-muted mb-1";

const fieldCls =
  "w-full bg-transparent border-0 border-b border-gold/30 text-navy font-display text-sm px-0 py-3 outline-none focus:border-navy transition-colors placeholder:text-muted/40 rounded-none appearance-none";

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState("");

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");
  //   if (!form.fullName || !form.email || !form.role || !form.company || !form.service || !form.message) {
  //     setError("Please fill in all required fields.");
  //     return;
  //   }
  //   setSent(true);
  //   setForm(initial);
  //   setTimeout(() => setSent(false), 6000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.fullName || !form.email || !form.role ||
        !form.company || !form.service || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm(initial);
        setTimeout(() => setSent(false), 6000);
      } else {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="inquiry" className="bg-cream py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
            Send an Inquiry
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Begin a private dialogue
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="font-display text-xs text-muted">
            Fields marked * are required. We respond within 24 business hours.
          </p>
        </div>

        {/* Form card */}
        <div className="border border-gold/20 bg-white p-10 md:p-14">

          <div className="mb-8">
            <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-3">
              Your Details
            </p>
            <div className="w-8 h-px bg-gold" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelCls}>Full Name *</label>
                <input
                  className={fieldCls}
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className={labelCls}>Role / Title *</label>
                <select
                  className={fieldCls}
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                >
                  <option value="" disabled>Select your role</option>
                  <option value="owner">Owner</option>
                  <option value="gm">General Manager</option>
                  <option value="hr">HR Director</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelCls}>Company / Hotel / Group *</label>
                <input
                  className={fieldCls}
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label className={labelCls}>Location</label>
                <input
                  className={fieldCls}
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="City + Country / Region"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelCls}>Work Email *</label>
                <input
                  type="email"
                  className={fieldCls}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={labelCls}>Phone / WeChat</label>
                <input
                  className={fieldCls}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Optional"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelCls}>Service Needed *</label>
                <select
                  className={fieldCls}
                  value={form.service}
                  onChange={(e) => update("service", e.target.value as ServiceKey)}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="search">Executive Search</option>
                  <option value="training">Corporate Training</option>
                  <option value="consulting">HR Consulting</option>
                  <option value="unsure">Not Sure Yet</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Timeline</label>
                <select
                  className={fieldCls}
                  value={form.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                >
                  <option value="" disabled>Select a timeline</option>
                  <option value="urgent">Urgent (0–30 days)</option>
                  <option value="1-6">1–6 months</option>
                  <option value="6-12">6–12 months</option>
                  <option value="exploring">Exploring</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelCls}>Your Message *</label>
              <textarea
                rows={5}
                className={`${fieldCls} resize-none`}
                placeholder="Briefly describe your situation or need"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                maxLength={1500}
              />
            </div>

            {/* ── Conditional — Executive Search ── */}
            {form.service === "search" && (
              <div className="border-t border-gold/20 pt-8 flex flex-col gap-8">
                <div>
                  <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-3">
                    Executive Search — Additional Details
                  </p>
                  <div className="w-8 h-px bg-gold" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelCls}>Role Title(s)</label>
                    <input
                      className={fieldCls}
                      value={form.searchRole}
                      onChange={(e) => update("searchRole", e.target.value)}
                      placeholder="e.g. General Manager"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Property Type / Brand Level</label>
                    <select
                      className={fieldCls}
                      value={form.searchBrand}
                      onChange={(e) => update("searchBrand", e.target.value)}
                    >
                      <option value="" disabled>Select brand level</option>
                      <option value="luxury">Luxury</option>
                      <option value="ultra">Ultra-Luxury</option>
                      <option value="lifestyle">Lifestyle</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Property Location</label>
                  <input
                    className={fieldCls}
                    value={form.searchLocation}
                    onChange={(e) => update("searchLocation", e.target.value)}
                    placeholder="City, Country"
                  />
                </div>
                <div>
                  <label className={labelCls}>Must-Have Experience (3 bullets)</label>
                  <textarea
                    rows={3}
                    className={`${fieldCls} resize-none`}
                    value={form.searchExperience}
                    onChange={(e) => update("searchExperience", e.target.value)}
                    placeholder="Key experience requirements"
                  />
                </div>
              </div>
            )}

            {/* ── Conditional — Corporate Training ── */}
            {form.service === "training" && (
              <div className="border-t border-gold/20 pt-8 flex flex-col gap-8">
                <div>
                  <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-3">
                    Corporate Training — Additional Details
                  </p>
                  <div className="w-8 h-px bg-gold" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelCls}>Audience Level</label>
                    <select
                      className={fieldCls}
                      value={form.trainingAudience}
                      onChange={(e) => update("trainingAudience", e.target.value)}
                    >
                      <option value="" disabled>Select level</option>
                      <option value="supervisors">Supervisors</option>
                      <option value="managers">Managers</option>
                      <option value="leaders">Leaders</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Topic Focus</label>
                    <select
                      className={fieldCls}
                      value={form.trainingTopic}
                      onChange={(e) => update("trainingTopic", e.target.value)}
                    >
                      <option value="" disabled>Select topic</option>
                      <option value="service">Service Culture</option>
                      <option value="leadership">Leadership</option>
                      <option value="onboarding">Onboarding</option>
                      <option value="trainer">Trainer System</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelCls}>Number of Participants</label>
                    <input
                      type="number"
                      className={fieldCls}
                      value={form.trainingParticipants}
                      onChange={(e) => update("trainingParticipants", e.target.value)}
                      placeholder="e.g. 25"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Delivery Format</label>
                    <select
                      className={fieldCls}
                      value={form.trainingFormat}
                      onChange={(e) => update("trainingFormat", e.target.value)}
                    >
                      <option value="" disabled>Select format</option>
                      <option value="onsite">On-site</option>
                      <option value="virtual">Virtual</option>
                      <option value="blended">Blended</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* ── Conditional — HR Consulting ── */}
            {form.service === "consulting" && (
              <div className="border-t border-gold/20 pt-8 flex flex-col gap-8">
                <div>
                  <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-3">
                    HR Consulting — Additional Details
                  </p>
                  <div className="w-8 h-px bg-gold" />
                </div>
                <div>
                  <label className={labelCls}>What's Driving This Now?</label>
                  <select
                    className={fieldCls}
                    value={form.consultingDriver}
                    onChange={(e) => update("consultingDriver", e.target.value)}
                  >
                    <option value="" disabled>Select driver</option>
                    <option value="audit">Audit</option>
                    <option value="compliance">Compliance</option>
                    <option value="culture">Culture</option>
                    <option value="hiring">Hiring System</option>
                    <option value="strategy">People Strategy</option>
                    <option value="systems">HR Systems</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelCls}>Current Headcount</label>
                    <input
                      type="number"
                      className={fieldCls}
                      value={form.consultingHeadcount}
                      onChange={(e) => update("consultingHeadcount", e.target.value)}
                      placeholder="e.g. 150"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Biggest Pain Point (one sentence)</label>
                    <input
                      className={fieldCls}
                      value={form.consultingPain}
                      onChange={(e) => update("consultingPain", e.target.value)}
                      placeholder="Describe in one sentence"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="font-display text-sm text-red-500 text-center">{error}</p>
            )}

            {/* Divider before submit */}
            <div className="w-full h-px bg-gold/20" />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-navy text-white font-display text-[9px] font-semibold tracking-[0.3em] uppercase py-4 hover:bg-navy2 transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer border-none"
            >
              Send Inquiry →
            </button>

            <p className="font-display text-xs text-muted italic text-center">
              We treat your message as confidential. We will only use your details to respond.
            </p>

            {/* Success */}
            {sent && (
              <div className="border border-gold/25 bg-cream p-6 text-center">
                <p className="font-body text-lg italic text-navy mb-1">Inquiry received.</p>
                <p className="font-display text-sm text-muted">
                  We'll respond within 24 business hours. All inquiries are treated as confidential.
                </p>
              </div>
            )}
          </form>
        </div>

        <p className="font-display text-xs text-muted text-center mt-8 max-w-2xl mx-auto leading-relaxed">
          Response time: We will respond within 24 business hours. All inquiries are treated as
          confidential. We do not share names, data, or business details without your permission.
        </p>
      </div>
    </section>
  );
}
