"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ id, children, className, delay = 0, ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={cn("py-20 md:py-32 flex flex-col items-center justify-center min-h-[80vh]", className)}
      {...props as any}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </motion.section>
  );
}
