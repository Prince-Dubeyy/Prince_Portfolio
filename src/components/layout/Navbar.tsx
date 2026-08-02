"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-center py-4 transition-all duration-300",
        scrolled ? "bg-surface/80 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-6 md:px-12">
        <a href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="text-blue-500">&gt;</span> Prince Dubey
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-blue-600/20 border border-blue-500/50 rounded-full hover:bg-blue-600/40 transition-colors">
            Hire Me
          </a>
        </nav>

        <div className="md:hidden">
          <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-blue-600/20 border border-blue-500/50 rounded-full hover:bg-blue-600/40 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
