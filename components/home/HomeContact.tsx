"use client";
import { useState } from "react";

export default function HomeContact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    organisation: "", service: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.service || !form.message) return;
    setSent(true);
    setForm({ firstName: "", lastName: "", email: "", organisation: "", service: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass =
    "w-full bg-white/[0.06] border border-gold/20 text-white font-body text-sm px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-white/25";

  return (
    <section id="contact" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* Info */}
          <div className="md:col-span-2">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Connect with<br />Sophian International
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-display italic text-lg text-navy mb-6">
              Transforming Your People & Culture Starts Here
            </p>
            <p className="font-body text-sm leading-relaxed text-muted mb-12">
              Whether you're preparing for a pre-opening, refining leadership structure,
              or strengthening organizational capability — we're ready to advise and
              support your next phase of growth.
            </p>

            {[
              { icon: "✉", label: "Email",       val: "YourGuide@sophianinternational.com", href: "mailto:YourGuide@sophianinternational.com" },
              { icon: "📍", label: "Head Office", val: "Beijing, China" },
              { icon: "💬", label: "WeChat",      val: "Available on request" },
            ].map((d) => (
              <div key={d.label} className="flex gap-4 items-start mb-7">
                <div className="w-9 h-9 border border-gold/25 flex items-center justify-center text-gold text-sm flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted mb-1">{d.label}</p>
                  {d.href
                    ? <a href={d.href} className="font-body text-sm text-[#1a1a1a] hover:text-gold transition-colors no-underline">{d.val}</a>
                    : <p className="font-body text-sm text-[#1a1a1a]">{d.val}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-navy p-10 lg:p-14 flex flex-col gap-5">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold2 mb-2">Send an Enquiry</p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-body text-[9px] tracking-[0.25em] uppercase text-white/45">First Name *</label>
                <input value={form.firstName} onChange={e => update("firstName", e.target.value)} placeholder="First name" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-[9px] tracking-[0.25em] uppercase text-white/45">Last Name</label>
                <input value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="Last name" className={inputClass} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-[0.25em] uppercase text-white/45">Email Address *</label>
              <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="your@email.com" className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-[0.25em] uppercase text-white/45">Organisation</label>
              <input value={form.organisation} onChange={e => update("organisation", e.target.value)} placeholder="Hotel or company name" className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-[0.25em] uppercase text-white/45">I'm enquiring about *</label>
              <select value={form.service} onChange={e => update("service", e.target.value)} className={inputClass}>
                <option value="" disabled className="bg-navy2">Select a service</option>
                <option value="executive"  className="bg-navy2">Executive Search</option>
                <option value="training"   className="bg-navy2">Corporate Training</option>
                <option value="consulting" className="bg-navy2">HR Consulting</option>
                <option value="multiple"   className="bg-navy2">Multiple Services</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-[9px] tracking-[0.25em] uppercase text-white/45">Brief Overview *</label>
              <textarea
                value={form.message}
                onChange={e => update("message", e.target.value)}
                rows={5}
                maxLength={1000}
                placeholder="Briefly describe your situation or need..."
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-navy font-body text-[9px] tracking-[0.3em] uppercase py-4 hover:bg-gold2 transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer border-none mt-2"
            >
              Submit Enquiry →
            </button>

            {sent && (
              <p className="font-body text-sm text-gold text-center border-t border-gold/20 pt-4">
                Enquiry received. We'll be in touch within 48 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
