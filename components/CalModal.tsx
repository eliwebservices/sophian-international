"use client";
import { useCalModal } from "@/context/CalModalContext";
import Cal from "@calcom/embed-react";

export default function CalModal() {
  const { open, closeModal } = useCalModal();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(2,39,65,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">

        {/* Header */}
        <div className="bg-navy px-8 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-1">
              Sophian International
            </p>
            <h2 className="font-display text-xl font-light text-white">
              Schedule a Discovery Call
            </h2>
          </div>
          <button
            onClick={closeModal}
            className="font-display text-[10px] font-semibold tracking-[0.25em] uppercase text-white/50 hover:text-gold transition-colors bg-transparent border-none cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Cal.com embed */}
        <div className="flex-1 overflow-y-auto">
          <Cal
            calLink="sophianinternational/free-discovery-call"
            style={{ width: "100%", height: "100%", minHeight: "600px" }}
            config={{
              layout: "month_view",
              theme: "light",
            }}
          />
        </div>
      </div>
    </div>
  );
}
