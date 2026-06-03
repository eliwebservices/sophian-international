import { ChartArea, ClipboardCheck, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ResourcesRequest() {
  return (
    <section id="request" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
            Contact Details
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Request your free<br />
            clarity session
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gold/15">

          {/* Email */}
          <div className="bg-cream p-12 flex flex-col">
            <span className="block text-2xl text-gold mb-6"><Mail /></span>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted mb-4">
              Email
            </p>
            <div className="w-8 h-px bg-gold mb-5" />
            <a
              href="mailto:hello@sophianinternational.com"
              className="font-body text-sm text-muted hover:text-gold transition-colors no-underline break-all mb-4"
            >
              hello@sophianinternational.com
            </a>
            <p className="font-display text-sm text-muted mt-auto">
              Best for resumes, documents, and formal requests.
            </p>
          </div>

          {/* WeChat */}
          <div className="bg-cream p-12 flex flex-col">
            <span className="block text-2xl text-gold mb-6"><MessageCircle /></span>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-4">
              WeChat
            </p>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="font-body text-sm text-muted mb-4">WeChat ID: XXXXXXXX</p>
            <p className="font-display text-sm text-muted mt-auto leading-relaxed">
              Please add a note:{" "}
              <span className="not-italic text-gold">Free Resources / Career Clarity</span>.
              Unnoted requests may not receive a response.
            </p>
          </div>

          {/* Online form */}
          <div className="bg-cream p-12 flex flex-col">
            <span className="block text-2xl text-gold mb-6"><ClipboardCheck /></span>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted mb-4">
              Online Form
            </p>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="font-body text-sm text-muted leading-relaxed mb-8">
              Submit your request through our private inquiry form.
            </p>
            <Link
              href="/contact#inquiry"
              className="mt-auto font-display font-semibold md:text-[10px] text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-8 py-4 hover:bg-navy2 transition-colors duration-300 no-underline inline-flex items-center gap-3 self-start"
            >
              Request Free Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
