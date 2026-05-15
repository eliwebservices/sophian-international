"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomeContact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    organisation: "", service: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.service || !form.message) return;
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: `${form.firstName} ${form.lastName}`.trim(),
          role: "Other",
          company: form.organisation,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      });
  
      if (res.ok) {
        setSent(true);
        setForm({ firstName: "", lastName: "", email: "",
                  organisation: "", service: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Underline-only field style
  const fieldCls =
    "w-full bg-transparent border-0 border-b border-gold/30 text-navy font-display text-sm px-0 py-3 outline-none focus:border-navy transition-colors placeholder:text-muted/50 rounded-none";

  const labelCls =
    "block font-display text-[9px] font-semibold tracking-[0.28em] uppercase text-muted mb-1";

  return (
    <section id="contact" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* Info column */}
          <div className="md:col-span-2">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Connect with<br />Sophian International
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-body text-xl text-navy mb-6">
              Transforming Your People & Culture Starts Here
            </p>
            <p className="font-display text-sm leading-relaxed text-muted mb-12">
              Whether you're preparing for a pre-opening, refining leadership structure,
              or strengthening organizational capability — we're ready to advise and
              support your next phase of growth.
            </p>

            {[
              { icon: "✉", label: "Email",       val: "YourGuide@sophianinternational.com", href: "mailto:YourGuide@sophianinternational.com" },
              { icon: "💬", label: "WeChat/WhatsApp",      val: "+853 6350 9608" },
              { icon: "📍", label: "Head Office", val: "Beijing, China" },
            ].map((d) => (
              <div key={d.label} className="flex gap-4 items-start mb-7">
                {/* <div className="w-9 h-9 border border-gold/25 flex items-center justify-center text-gold text-sm flex-shrink-0">
                  {d.icon}
                </div> */}
                <div>
                  <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-muted mb-1">
                    {d.label}
                  </p>
                  {d.href
                    ? <a href={d.href} className="font-display text-sm text-navy hover:text-gold transition-colors no-underline">{d.val}</a>
                    : <p className="font-display text-sm text-navy">{d.val}</p>
                  }
                </div>
              </div>
            ))}
            {/* <Image src="/images/sophian-wechat-qr-code.png" width={120} height={120} alt="sophian-wechat-qr-code"/> */}
          </div>

          {/* Form — white background, underline inputs */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-white p-10 lg:p-14 flex flex-col gap-7 border border-gold/15"
          >
            <div>
              <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-1">
                Send an Enquiry
              </p>
              <div className="w-8 h-px bg-gold mt-3" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelCls}>First Name *</label>
                <input
                  value={form.firstName}
                  onChange={e => update("firstName", e.target.value)}
                  placeholder="First name"
                  className={fieldCls}
                />
              </div>
              <div>
                <label className={labelCls}>Last Name</label>
                <input
                  value={form.lastName}
                  onChange={e => update("lastName", e.target.value)}
                  placeholder="Last name"
                  className={fieldCls}
                />
              </div>
            </div>

            <div>
              <label className={labelCls}>Email Address *</label>
              <input
                type="email"
                value={form.email}
                onChange={e => update("email", e.target.value)}
                placeholder="your@email.com"
                className={fieldCls}
              />
            </div>

            <div>
              <label className={labelCls}>Organisation</label>
              <input
                value={form.organisation}
                onChange={e => update("organisation", e.target.value)}
                placeholder="Hotel or company name"
                className={fieldCls}
              />
            </div>

            <div>
              <label className={labelCls}>I'm enquiring about *</label>
              <select
                value={form.service}
                onChange={e => update("service", e.target.value)}
                className={fieldCls}
              >
                <option value="" disabled>Select a service</option>
                <option value="executive">Executive Search</option>
                <option value="training">Corporate Training</option>
                <option value="consulting">HR Consulting</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>

            <div>
              <label className={labelCls}>Brief Overview *</label>
              <textarea
                value={form.message}
                onChange={e => update("message", e.target.value)}
                rows={4}
                maxLength={1000}
                placeholder="Briefly describe your situation or need..."
                className={`${fieldCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-navy text-white font-display text-[9px] font-semibold tracking-[0.3em] uppercase py-4 hover:bg-navy2 transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer border-none mt-2"
            >
              Submit Enquiry →
            </button>

            {sent && (
              <p className="font-display text-sm text-gold text-center border-t border-gold/20 pt-4">
                Enquiry received. We'll be in touch within 48 hours.
              </p>
            )}

            <p className="font-display text-xs text-muted text-center italic">
              All enquiries are treated with complete confidentiality.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
