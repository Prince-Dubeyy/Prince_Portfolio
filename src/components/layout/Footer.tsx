"use client";

import * as React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-surface/50 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-4">
        <p className="text-gray-400 text-sm">
          Prince Dubey &copy; {new Date().getFullYear()}
        </p>
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          Built with Data, Design & Curiosity.
        </p>
      </div>
    </footer>
  );
}
