"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

import { Mail, Phone } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export function Contact() {
  return (
    <Section id="contact" className="bg-background relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Let&apos;s Build Something <br />
          <span className="gradient-text">Data-Driven Together.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Open to collaborations, internships, and impactful AI or analytics work.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Card className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:princeekjmar@gmail.com" className="text-white hover:text-blue-400 font-medium transition-colors text-lg">
                princeekjmar@gmail.com
              </a>
            </div>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
              <p className="text-white font-medium text-lg">Bengaluru, Karnataka</p>
            </div>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/prince-dubey-365056323/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full glass flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20" aria-label="LinkedIn profile">
            <LinkedinIcon size={24} />
          </a>
          <a href="https://github.com/Prince-Dubeyy" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-white/20" aria-label="GitHub profile">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.hackerrank.com/profile/princeekjmar" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full glass flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300 font-bold font-mono text-2xl shadow-lg hover:shadow-green-500/20" aria-label="HackerRank profile">
            H
          </a>
        </div>
      </div>
    </Section>
  );
}
