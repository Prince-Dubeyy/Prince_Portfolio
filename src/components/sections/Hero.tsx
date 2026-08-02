"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Hi, I'm Prince Dubey 👋
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            AI, Analytics & <br />
            <span className="gradient-text">Data Science</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            I build end-to-end AI applications, analytics dashboards, recommendation systems, and business intelligence solutions that turn data into action.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button variant="primary" href="#projects" className="flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </Button>
            <Button variant="outline" href="https://drive.google.com/file/d/1b6O0WPJorAPQo5NhaZQX_UbU2DfDdlMD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download size={18} /> Download Resume
            </Button>
            <Button variant="ghost" href="#contact" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <Mail size={18} /> Contact Me
            </Button>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full max-w-md lg:max-w-none h-[400px] hidden md:block">
          <motion.div variants={floatingVariants} animate="animate" className="absolute top-10 right-20 glass p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">ML</div>
              <div>
                <p className="text-sm font-semibold text-white">Machine Learning</p>
                <p className="text-xs text-gray-400">Predictive Modeling</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: "1s" }} className="absolute top-40 left-10 glass p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold">AI</div>
              <div>
                <p className="text-sm font-semibold text-white">Generative AI</p>
                <p className="text-xs text-gray-400">LLMs & RAG</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={floatingVariants} animate="animate" style={{ animationDelay: "2s" }} className="absolute bottom-20 right-10 glass p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">BI</div>
              <div>
                <p className="text-sm font-semibold text-white">Power BI</p>
                <p className="text-xs text-gray-400">Dashboards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
