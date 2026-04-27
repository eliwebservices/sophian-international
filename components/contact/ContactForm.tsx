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

const labelCls = "block font-body text-[9px] tracking-[0.3em] uppercase text-muted mb-2";
const inputCls =
  "w-full bg-white/[0.06] border border-gold/20 text-white font-body text-sm px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-white/25";
const selectCls =
  "w-full bg-white/[0.06] border border-gold/20 text-white font-body text-sm px-4 py-3 outline-none focus:border-gold transition-colors appearance-none";

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.fullName || !form.email || !form.role || !form.company || !form.service || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setSent(true);
    setForm(initial);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="inquiry" className="bg-navy py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-[9px] tracking-[0.4em] uppercase text-gold mb-6">
            Send an Inquiry
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-6">
            Begin a <span className="italic">private dialogue</span>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-xs text-white/40">
            Fields marked * are required. We respond within 24 business hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Full Name *</label>
              <input
                className={inputCls}
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className={labelCls}>Role / Title *</label>
              <select
                className={selectCls}
                value={form.role}
                onChange={(e) => update("role", e.target.value)}
              >
                <option value="" disabled className="bg-navy2">Select your role</option>
                <option value="owner" className="bg-navy2">Owner</option>
                <option value="gm" className="bg-navy2">General Manager</option>
                <option value="hr" className="bg-navy2">HR Director</option>
                <option value="other" className="bg-navy2">Other</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Company / Hotel / Group *</label>
              <input
                className={inputCls}
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Your organization"
              />
            </div>
            <div>
              <label className={labelCls}>Location</label>
              <input
                className={inputCls}
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="City + Country / Region"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Work Email *</label>
              <input
                type="email"
                className={inputCls}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className={labelCls}>Phone / WeChat</label>
              <input
                className={inputCls}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="Optional"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className={labelCls}>Service Needed *</label>
              <select
                className={selectCls}
                value={form.service}
                onChange={(e) => update("service", e.target.value as ServiceKey)}
              >
                <option value="" disabled className="bg-navy2">Select a service</option>
                <option value="search" className="bg-navy2">Executive Search</option>
                <option value="training" className="bg-navy2">Corporate Training</option>
                <option value="consulting" className="bg-navy2">HR Consulting</option>
                <option value="unsure" className="bg-navy2">Not Sure Yet</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Timeline</label>
              <select
                className={selectCls}
                value={form.timeline}
                onChange={(e) => update("timeline", e.target.value)}
              >
                <option value="" disabled className="bg-navy2">Select a timeline</option>
                <option value="urgent" className="bg-navy2">Urgent (0–30 days)</option>
                <option value="1-6" className="bg-navy2">1–6 months</option>
                <option value="6-12" className="bg-navy2">6–12 months</option>
                <option value="exploring" className="bg-navy2">Exploring</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={labelCls}>Your Message *</label>
            <textarea
              rows={5}
              className={`${inputCls} resize-y`}
              placeholder="Briefly describe your situation or need"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              maxLength={1500}
            />
          </div>

          {/* Conditional — Executive Search */}
          {form.service === "search" && (
            <div className="border-t border-gold/20 pt-6 flex flex-col gap-5">
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold">
                Executive Search — Additional Details
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Role Title(s)</label>
                  <input
                    className={inputCls}
                    value={form.searchRole}
                    onChange={(e) => update("searchRole", e.target.value)}
                    placeholder="e.g. General Manager"
                  />
                </div>
                <div>
                  <label className={labelCls}>Property Type / Brand Level</label>
                  <select
                    className={selectCls}
                    value={form.searchBrand}
                    onChange={(e) => update("searchBrand", e.target.value)}
                  >
                    <option value="" disabled className="bg-navy2">Select brand level</option>
                    <option value="luxury" className="bg-navy2">Luxury</option>
                    <option value="ultra" className="bg-navy2">Ultra-Luxury</option>
                    <option value="lifestyle" className="bg-navy2">Lifestyle</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelCls}>Property Location</label>
                <input
                  className={inputCls}
                  value={form.searchLocation}
                  onChange={(e) => update("searchLocation", e.target.value)}
                  placeholder="City, Country"
                />
              </div>
              <div>
                <label className={labelCls}>Must-Have Experience (3 bullets)</label>
                <textarea
                  rows={3}
                  className={`${inputCls} resize-y`}
                  value={form.searchExperience}
                  onChange={(e) => update("searchExperience", e.target.value)}
                  placeholder="Key experience requirements"
                />
              </div>
            </div>
          )}

          {/* Conditional — Corporate Training */}
          {form.service === "training" && (
            <div className="border-t border-gold/20 pt-6 flex flex-col gap-5">
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold">
                Corporate Training — Additional Details
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Audience Level</label>
                  <select
                    className={selectCls}
                    value={form.trainingAudience}
                    onChange={(e) => update("trainingAudience", e.target.value)}
                  >
                    <option value="" disabled className="bg-navy2">Select level</option>
                    <option value="supervisors" className="bg-navy2">Supervisors</option>
                    <option value="managers" className="bg-navy2">Managers</option>
                    <option value="leaders" className="bg-navy2">Leaders</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Topic Focus</label>
                  <select
                    className={selectCls}
                    value={form.trainingTopic}
                    onChange={(e) => update("trainingTopic", e.target.value)}
                  >
                    <option value="" disabled className="bg-navy2">Select topic</option>
                    <option value="service" className="bg-navy2">Service Culture</option>
                    <option value="leadership" className="bg-navy2">Leadership</option>
                    <option value="onboarding" className="bg-navy2">Onboarding</option>
                    <option value="trainer" className="bg-navy2">Trainer System</option>
                    <option value="other" className="bg-navy2">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Number of Participants</label>
                  <input
                    type="number"
                    className={inputCls}
                    value={form.trainingParticipants}
                    onChange={(e) => update("trainingParticipants", e.target.value)}
                    placeholder="e.g. 25"
                  />
                </div>
                <div>
                  <label className={labelCls}>Delivery Format</label>
                  <select
                    className={selectCls}
                    value={form.trainingFormat}
                    onChange={(e) => update("trainingFormat", e.target.value)}
                  >
                    <option value="" disabled className="bg-navy2">Select format</option>
                    <option value="onsite" className="bg-navy2">On-site</option>
                    <option value="virtual" className="bg-navy2">Virtual</option>
                    <option value="blended" className="bg-navy2">Blended</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Conditional — HR Consulting */}
          {form.service === "consulting" && (
            <div className="border-t border-gold/20 pt-6 flex flex-col gap-5">
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold">
                HR Consulting — Additional Details
              </p>
              <div>
                <label className={labelCls}>What's Driving This Now?</label>
                <select
                  className={selectCls}
                  value={form.consultingDriver}
                  onChange={(e) => update("consultingDriver", e.target.value)}
                >
                  <option value="" disabled className="bg-navy2">Select driver</option>
                  <option value="audit" className="bg-navy2">Audit</option>
                  <option value="compliance" className="bg-navy2">Compliance</option>
                  <option value="culture" className="bg-navy2">Culture</option>
                  <option value="hiring" className="bg-navy2">Hiring System</option>
                  <option value="strategy" className="bg-navy2">People Strategy</option>
                  <option value="systems" className="bg-navy2">HR Systems</option>
                  <option value="other" className="bg-navy2">Other</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Current Headcount</label>
                  <input
                    type="number"
                    className={inputCls}
                    value={form.consultingHeadcount}
                    onChange={(e) => update("consultingHeadcount", e.target.value)}
                    placeholder="e.g. 150"
                  />
                </div>
                <div>
                  <label className={labelCls}>Biggest Pain Point (one sentence)</label>
                  <input
                    className={inputCls}
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
            <p className="font-body text-sm text-red-400 text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gold text-navy font-body text-[9px] tracking-[0.3em] uppercase py-4 hover:bg-gold2 transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer border-none mt-2"
          >
            Send Inquiry →
          </button>

          <p className="font-body text-xs text-white/35 italic text-center">
            We treat your message as confidential. We will only use your details to respond.
          </p>

          {/* Success */}
          {sent && (
            <div className="border border-gold/30 bg-white/[0.04] p-6 text-center">
              <p className="font-display italic text-lg text-gold mb-1">Inquiry received.</p>
              <p className="font-body text-sm text-white/60">
                We'll respond within 24 business hours. All inquiries are treated as confidential.
              </p>
            </div>
          )}
        </form>

        <p className="font-body text-xs text-white/30 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
          Response time: We will respond within 24 business hours. All inquiries are treated as
          confidential. We do not share names, data, or business details without your permission.
        </p>
      </div>
    </section>
  );
}
