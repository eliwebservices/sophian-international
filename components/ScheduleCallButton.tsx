"use client";
import { useCalModal } from "@/context/CalModalContext";

interface Props {
  label?: string;
  variant?: "gold" | "navy" | "outline-white" | "outline-navy";
  className?: string;
}

export default function ScheduleCallButton({
  label = "Schedule a Discovery Call",
  variant = "gold",
  className = "",
}: Props) {
  const { openModal } = useCalModal();

  const base =
    "font-display md:text-[10px] text-[9px] font-semibold tracking-[0.28em] uppercase inline-flex items-center gap-3 cursor-pointer border-none transition-all duration-300";

  const variants = {
    gold:          "bg-gold text-navy px-10 py-4 hover:bg-gold2",
    navy:          "bg-navy text-white px-10 py-4 hover:bg-navy2",
    "outline-white": "border border-solid text-white px-10 py-4 hover:bg-gold hover:text-white [border-color:rgba(255,255,255,0.4)]",
    "outline-navy":  "border border-solid border-navy text-navy px-10 py-4 hover:bg-navy hover:text-white",
  };

  return (
    <button
      onClick={openModal}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
}
