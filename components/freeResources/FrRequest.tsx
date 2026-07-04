"use client";
import { useState } from "react";

export default function ResourcesRequest() {
  const [form, setForm] = useState({
    name: "", email: "", role: "", phone: "", company: "", wechat: "", remarks: "",
  });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          email:    form.email,
          role:     form.role,
          phone:    form.phone,
          company:  form.company,
          wechat:   form.wechat,
          remarks:  form.remarks,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", role: "", phone: "", company: "", wechat: "", remarks: "" });
        setTimeout(() => setSent(false), 6000);
      } else {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldCls =
    "w-full bg-transparent border-0 border-b border-gold/30 text-navy font-display text-sm px-0 py-3 outline-none focus:border-navy transition-colors placeholder:text-muted/40 rounded-none";
  const labelCls =
    "block font-display text-[9px] font-semibold tracking-[0.28em] uppercase text-muted mb-1";

  return (
    <section id="request" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-gold/15">

          {/* Image + info — left */}
          <div className="relative overflow-hidden min-h-[560px]">
            <img
              src="/images/here-to-serve_.jpg"
              alt="Sophian International resources"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/70" />
            <div className="relative z-10 p-12 flex flex-col h-full justify-between">
              <div>
                <p className="font-display md:text-[14px] text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
                  Free Access
                </p>
                <h2 className="font-display text-4xl font-light text-white leading-[1.12] mb-6">
                  Unlock Your Free<br />Resource Pack
                </h2>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="font-display text-sm text-white/60 leading-relaxed mb-8">
                  Fill in your details and we'll get your selected resources to you
                  within one business day. No spam, no pressure — just practical tools
                  built for hospitality professionals.
                </p>
                {[
                  "Free — no credit card required",
                  "Unsubscribe anytime",
                  "Not legal advice",
                ].map((note) => (
                  <div key={note} className="flex items-center gap-3 mb-3">
                    <span className="text-gold">✦</span>
                    <p className="font-display text-sm text-white/60">{note}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-base text-white/30 leading-relaxed">
                "Practical tools built from 20+ years of real hospitality experience."
              </p>
            </div>
          </div>

          {/* Form — right */}
          <div className="bg-cream p-10 md:p-14">
            <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-3">
              Your Details
            </p>
            <div className="w-8 h-px bg-gold mb-8" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div>
                <label className={labelCls}>Full Name *</label>
                <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className={fieldCls} />
              </div>
              <div>
                <label className={labelCls}>Work Email *</label>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" className={fieldCls} />
              </div>
              <div>
                <label className={labelCls}>Your Role *</label>
                <select value={form.role} onChange={(e) => update("role", e.target.value)} className={fieldCls}>
                  <option value="" disabled>Select your role</option>
                  <option value="owner">Owner</option>
                  <option value="gm">General Manager</option>
                  <option value="hr">HR Director</option>
                  <option value="ld">L&D Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Mobile Phone (with country code)</label>
                <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+86 138 0000 0000" className={fieldCls} />
              </div>
              <div>
                <label className={labelCls}>Company / Hotel</label>
                <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Optional" className={fieldCls} />
              </div>
              <div>
                <label className={labelCls}>WeChat / WhatsApp</label>
                <input value={form.wechat} onChange={(e) => update("wechat", e.target.value)} placeholder="Optional" className={fieldCls} />
              </div>
              <div>
                <label className={labelCls}>Remarks or Resource Requests</label>
                <textarea
                  value={form.remarks}
                  onChange={(e) => update("remarks", e.target.value)}
                  rows={3}
                  placeholder="Any specific tools or questions?"
                  className={`${fieldCls} resize-none`}
                />
              </div>

              {error && (
                <p className="font-display text-sm text-red-500 text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full bg-navy text-white font-display text-[9px] font-semibold tracking-[0.3em] uppercase py-4 transition-all duration-300 cursor-pointer border-none mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                    <path d="M12 2 a10 10 0 0 1 10 10" />
                  </svg>
                ) : sent ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#908E66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="7,12 11,16 17,8" />
                  </svg>
                ) : (
                  "Unlock Free Resources →"
                )}
              </button>

              {sent && (
                <div className="border border-gold/25 bg-white p-6 text-center">
                  <p className="font-body text-lg italic text-navy mb-1">Thank you!</p>
                  <p className="font-display text-sm text-muted">
                    Your resources will be sent within one business day.
                  </p>
                </div>
              )}

              <p className="font-display text-xs text-muted text-center leading-relaxed">
                Resources are for general guidance only and do not constitute legal advice.
                Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
