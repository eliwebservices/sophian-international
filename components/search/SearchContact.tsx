import { Mail, MapPin, Phone } from "lucide-react";
import ScheduleCallButton from "../ScheduleCallButton";

export default function SearchContact() {
    return (
      <section id="contact" className="bg-navy py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-6">
              Begin a Confidential Conversation
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-3xl mx-auto">
              Every exceptional appointment begins with a conversation. Whether you are seeking
              exceptional senior leadership for your property, or exploring how we might support
              your team's growth — we welcome the dialogue. All enquiries are treated with complete
              confidentiality.
            </p>
          </div>
  
          {/* Contact details */}
          <div className="grid grid-cols-2 gap-2">
          <div className="grid md:grid-cols-1 gap-px bg-gold/10 mb-16">
            {[
              { icon: <Mail />, label: "Email",    val: "yourguide@sophianinternational.com" },
              { icon: <Phone />, label: "Phone",    val: "+853 6350 9608" },
              { icon: <MapPin/>, label: "Location", val: "Beijing, China" },
            ].map((d) => (
              <div key={d.label} className="flex flex-col bg-white/[0.04] p-10 text-center hover:bg-white/[0.08] transition-colors duration-300">
                <span className="block text-2xl text-gold mb-4 mx-auto">{d.icon}</span>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-white/45 mb-3">{d.label}</p>
                <p className="font-body text-sm text-white break-all">{d.val}</p>
              </div>
            ))}
          </div>
  
          {/* Client / Candidate split */}
          <div className="grid md:grid-cols-1 gap-px bg-gold/10 mb-16">
            <div className="bg-white/[0.04] p-12">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-4">Clients</p>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                We work on a retained, assignment basis for our client hotels and hospitality companies.
                When you have an open position, you brief us on the role and the profile you need. We
                then identify, approach, and present qualified candidates for your review.
              </p>
            </div>
            <div className="bg-white/[0.04] p-12">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-4">Candidates</p>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                There is no fee for candidates to be introduced to an employer through Sophian
                International. Many professionals share their resume with us so we can alert them when
                a suitable opportunity becomes available. Please email your resume to be considered for
                future roles.
              </p>
            </div>
          </div>
          </div>
  
          <div className="text-center">
            {/* <a
              href="mailto:yourguide@sophianinternational.com"
              className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
            >
              Request a Confidential Consultation
            </a> */}
            <ScheduleCallButton label="Request a Confidential Consultation"/>
          </div>
        </div>
      </section>
    );
  }
  