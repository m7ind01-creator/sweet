import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Shield, Award, Users, Clock } from "lucide-react";
import { ModalContent } from "../types";

interface ModalOverlayProps {
  content: ModalContent | null;
  onClose: () => void;
}

export default function ModalOverlay({ content, onClose }: ModalOverlayProps) {
  if (!content) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, y: 15, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 15, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          onClick={(e) => e.stopPropagation()}
          className="liquid-glass w-full max-w-2xl rounded-2xl p-6 sm:p-8 md:p-10 text-white max-h-[90vh] overflow-y-auto relative flex flex-col gap-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer group"
          >
            <X className="w-4 h-4 text-white/75 group-hover:text-white transition-colors" />
          </button>

          {/* Header */}
          <div className="flex flex-col gap-2 pr-6">
            <span className="text-xs uppercase tracking-widest font-sans font-medium text-white/50">
              Lumora Sanctuary
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
              {content.title}
            </h2>
            <p className="text-sm sm:text-base font-sans text-white/70 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="h-px bg-white/10 w-full" />

          {/* Main Description */}
          <p className="text-xs sm:text-sm font-sans text-white/60 leading-relaxed">
            {content.description}
          </p>

          {/* Staggered Sections based on properties */}
          {content.steps && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {content.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-white/10 text-white/90">
                      Step 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-semibold font-sans">
                      {step.title.split(". ")[1] || step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {content.features && !content.pricing && (
            <div className="flex flex-col gap-3 mt-2">
              {content.features.map((feature, idx) => {
                const [title, desc] = feature.split(": ");
                return (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white/90" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold font-sans text-white/90">
                        {title}
                      </span>
                      {desc && (
                        <span className="text-xs font-sans text-white/60 leading-relaxed">
                          {desc}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {content.pricing && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              {content.pricing.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl flex flex-col justify-between gap-4 border transition-colors ${
                    idx === 1
                      ? "bg-white/10 border-white/20 shadow-lg shadow-white/5"
                      : "bg-white/5 border-white/10 hover:bg-white/8"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest font-sans font-bold text-white/50">
                        {tier.plan}
                      </span>
                      {idx === 1 && (
                        <span className="text-[10px] uppercase tracking-wider font-sans font-bold px-2 py-0.5 rounded-full bg-white text-slate-900">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-serif font-bold">
                        {tier.price}
                      </span>
                      <span className="text-xs text-white/50 font-sans">
                        / {tier.period}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-white/10 w-full" />

                  <ul className="flex flex-col gap-2">
                    {tier.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex gap-2 items-start text-xs font-sans text-white/70 leading-relaxed">
                        <Check className="w-3 h-3 text-white/80 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onClose}
                    className={`w-full py-2 rounded-full font-sans text-xs font-bold transition-transform active:scale-[0.98] ${
                      idx === 1
                        ? "bg-white text-slate-900 hover:bg-white/90"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                    }`}
                  >
                    {idx === 1 ? "Reclaim Your Focus" : "Start Free Trial"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Footer Action */}
          <div className="flex items-center justify-between mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-sans">
            <span className="text-white/60">Ready to step into the light?</span>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 font-bold hover:gap-2.5 transition-all cursor-pointer text-white"
            >
              Enter Lumora Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
