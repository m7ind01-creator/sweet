import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_LINKS } from "../data";
import { NavLink } from "../types";

interface NavigationProps {
  onNavLinkClick: (id: string) => void;
  onGetStartedClick: () => void;
}

export default function Navigation({ onNavLinkClick, onGetStartedClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (id: string) => {
    setIsMenuOpen(false);
    onNavLinkClick(id);
  };

  const handleMobileGetStarted = () => {
    setIsMenuOpen(false);
    onGetStartedClick();
  };

  return (
    <header className="w-full flex items-center justify-between py-4 px-6 md:px-12 absolute top-0 left-0 right-0 z-40 bg-transparent">
      {/* Brand Logo - White, Italic, Text-3xl, Instrument Serif */}
      <div 
        onClick={() => onNavLinkClick("how-it-works")} 
        className="font-serif italic text-white text-2xl sm:text-3xl cursor-pointer hover:opacity-80 transition-opacity tracking-tight select-none flex items-center gap-2.5"
      >
        <Sparkles className="w-5 h-5 text-white/80 animate-pulse" />
        <span>Lumora</span>
      </div>

      {/* Desktop Navigation - Glass Pill (md+) */}
      <nav className="hidden md:flex items-center gap-6 liquid-glass rounded-full pl-6 pr-2 py-1.5 shadow-lg shadow-black/10 border border-white/5 backdrop-blur-md">
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => onNavLinkClick(link.id)}
                className="text-white/85 hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onGetStartedClick}
          className="bg-white hover:bg-white/95 text-slate-950 font-sans font-semibold rounded-full px-5 py-2 text-sm tracking-wide transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          Get Started
        </button>
      </nav>

      {/* Mobile Menu Button - Hamburger (md hidden) */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
        className="md:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center relative cursor-pointer focus:outline-none shadow-lg z-50 border border-white/5"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          {/* Menu icon rotating out */}
          <Menu
            className={`w-5 h-5 text-white transition-all duration-300 absolute ${
              isMenuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          {/* X icon rotating in */}
          <X
            className={`w-5 h-5 text-white transition-all duration-300 absolute ${
              isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-40 flex flex-col items-center justify-center p-6 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 justify-center h-full w-full max-w-sm">
              <ul className="flex flex-col items-center gap-6 w-full">
                {NAV_LINKS.map((link, idx) => (
                  <motion.li
                    key={link.id}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 16, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.1 + idx * 0.05,
                    }}
                    className="w-full text-center"
                  >
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="text-white hover:text-white/80 font-serif text-3xl tracking-wide cursor-pointer py-2 block w-full transition-colors"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.1 + NAV_LINKS.length * 0.05,
                }}
                className="w-full mt-4 flex flex-col items-center"
              >
                <div className="h-px bg-white/10 w-2/3 mb-8" />
                <button
                  onClick={handleMobileGetStarted}
                  className="bg-white hover:bg-white/95 text-slate-950 font-sans font-bold rounded-full px-8 py-3.5 text-sm tracking-widest uppercase w-full shadow-xl shadow-white/5 transition-transform active:scale-[0.97] cursor-pointer"
                >
                  Get Started
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
