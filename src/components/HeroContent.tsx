import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Check, AlertCircle } from "lucide-react";
import { VIDEOS } from "../data";

interface HeroContentProps {
  activeVideo: number;
  onVideoSelect: (id: number) => void;
  isTransitioning: boolean;
}

export default function HeroContent({
  activeVideo,
  onVideoSelect,
  isTransitioning,
}: HeroContentProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isDarkTheme = activeVideo === 2;

  // Theme color variables with smooth 700ms transitions
  const textColor = isDarkTheme ? "text-[#182C41]" : "text-white";
  const mutedTextColor = isDarkTheme ? "text-[#182C41]/85" : "text-white/80";
  const borderTheme = isDarkTheme ? "border-[#182C41]/20" : "border-white/10";
  const ringTheme = isDarkTheme ? "focus-within:ring-[#182C41]/30" : "focus-within:ring-white/20";
  const buttonTextClass = isDarkTheme ? "text-[#182C41]" : "text-slate-900";

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    // Simulate high-fidelity network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1200);
  };

  const handleVideoClick = (id: number) => {
    if (activeVideo === id || isTransitioning) return;
    onVideoSelect(id);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative z-20 pt-14 sm:pt-16 md:pt-20">
      
      {/* Badge / Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className={`liquid-glass rounded-full px-4 sm:px-5 py-1.5 sm:py-2 flex items-center gap-2 select-none border ${borderTheme} transition-all duration-700`}
      >
        <Sparkles className={`w-3.5 h-3.5 ${isDarkTheme ? "text-[#182C41]" : "text-white/95"} animate-pulse`} />
        <span className={`text-[9px] sm:text-[10px] md:text-xs tracking-widest font-sans font-semibold uppercase ${textColor} transition-colors duration-700`}>
          Over 10,000 minds already finding their clarity
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col gap-3 sm:gap-4"
      >
        <h1 className={`font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] max-w-[850px] font-medium tracking-[-0.01em] ${textColor} transition-colors duration-700`}>
          Clarity in an Endlessly
          <br className="hidden sm:inline" /> Noisy Universe
        </h1>

        {/* Subtext */}
        <p className={`font-sans text-xs sm:text-sm md:text-base max-w-[500px] mx-auto leading-[1.6] opacity-90 ${mutedTextColor} transition-colors duration-700 px-2`}>
          Rise above the chaos of pings, infinite scrolling, and relentless demands.
          Discover how to protect your presence and create with intention.
        </p>
      </motion.div>

      {/* Email Input / Action Panel */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="w-full flex flex-col items-center gap-2"
      >
        <form
          onSubmit={handleEmailSubmit}
          className={`liquid-glass w-full max-w-[340px] sm:max-w-[400px] rounded-full p-1.5 flex items-center gap-1 border ${borderTheme} ${ringTheme} focus-within:ring-2 transition-all duration-700`}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <div className="flex items-center w-full justify-between">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Your Best Email"
                  disabled={isSubmitting}
                  className={`bg-transparent border-none outline-none flex-grow px-5 py-2 font-sans text-sm transition-colors duration-700 w-full ${textColor} ${
                    isDarkTheme ? "placeholder-[#182C41]/60" : "placeholder-white/60"
                  }`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-white hover:bg-white/95 active:scale-[0.98] ${buttonTextClass} transition-all font-sans font-bold rounded-full px-5 sm:px-6 py-2.5 text-xs tracking-wider uppercase shrink-0 flex items-center gap-1 shadow-lg shadow-black/10 cursor-pointer`}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-[#182C41] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center justify-center w-full py-2 px-5 gap-2 ${textColor} transition-colors duration-700`}
              >
                <Check className="w-4 h-4 shrink-0" />
                <span className="text-xs font-sans font-bold tracking-wide uppercase">
                  Welcome to Lumora. Invitation Sent!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        {/* Validation Error Hint */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className={`text-xs font-sans font-medium flex items-center gap-1.5 ${
                isDarkTheme ? "text-[#182C41]/90" : "text-white/80"
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Video Switcher */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
        className="w-full max-w-lg pt-4 sm:pt-6"
      >
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap select-none">
          {VIDEOS.map((video) => {
            const isActive = activeVideo === video.id;
            
            // Generate standard classes based on active state and theme
            let btnClass = "text-xs tracking-widest uppercase font-sans font-medium transition-all duration-500 pb-2 cursor-pointer border-b-2 ";
            
            if (isActive) {
              btnClass += isDarkTheme 
                ? "text-[#182C41] border-[#182C41] opacity-100 font-semibold" 
                : "text-white border-white opacity-100 font-semibold";
            } else {
              btnClass += isDarkTheme
                ? "text-[#182C41] border-transparent opacity-50 hover:opacity-85"
                : "text-white border-transparent opacity-50 hover:opacity-85";
            }

            return (
              <button
                key={video.id}
                onClick={() => handleVideoClick(video.id)}
                className={btnClass}
                disabled={isTransitioning}
                title={`Switch atmosphere to ${video.label}`}
              >
                {video.label}
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
