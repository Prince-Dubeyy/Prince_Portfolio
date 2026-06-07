"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  gradientHover?: boolean;
}

export function Card({ className, children, gradientHover = false, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={gradientHover ? { y: -5 } : {}}
      className={cn(
        "relative rounded-2xl glass p-6 md:p-8 overflow-hidden",
        gradientHover && "group hover:border-blue-500/50 transition-colors duration-500",
        className
      )}
      {...props}
    >
      {gradientHover && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      )}
      {children}
    </motion.div>
  );
}
