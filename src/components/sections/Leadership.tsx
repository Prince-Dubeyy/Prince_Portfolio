"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Rocket } from "lucide-react";

export function Leadership() {
  const highlights = [
    "Co-Founder and Leadership Role",
    "Strategic Planning & Execution",
    "Technology Innovation",
    "Team Collaboration",
    "Project Management",
    "Community Building",
  ];

  return (
    <Section id="leadership" className="bg-surface/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership & Entrepreneurship</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Building technology-driven initiatives beyond academics and projects.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <Card gradientHover className="p-8 md:p-10 relative overflow-hidden group">
          {/* Subtle glow effect behind the card content */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-blue-500/20 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-purple-500/20 transition-colors duration-500" />

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex-shrink-0 flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-500">
              <Rocket className="w-8 h-8 text-blue-400" />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">VisionX Nexus</h3>
                  <p className="text-gray-300 font-medium">Co-Founder</p>
                </div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold whitespace-nowrap">
                  Co-Founder
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8">
                Co-founded VisionX Nexus, a technology-focused initiative dedicated to transforming ideas into impactful digital solutions. Contributed to strategic planning, project execution, community growth, and technology-driven innovation while collaborating on real-world development and problem-solving initiatives.
              </p>

              <div className="mb-8">
                <span className="text-xs text-gray-500 uppercase tracking-wider block mb-4">Core Focus Areas</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-start">
                <Button 
                  variant="primary" 
                  href="https://www.linkedin.com/company/visionx-nexus/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={18} /> View LinkedIn Page
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
