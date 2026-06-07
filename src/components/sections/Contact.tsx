"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export function Contact() {
  return (
    <Section id="contact" className="bg-background relative">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Let's Build Something <br />
          <span className="gradient-text">Data-Driven Together.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 w-full max-w-5xl mx-auto">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Email</p>
              <a href="mailto:princeekjmar@gmail.com" className="text-white hover:text-blue-400 font-medium transition-colors">
                princeekjmar@gmail.com
              </a>
            </div>
          </Card>
          
          <Card className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Phone</p>
              <a href="tel:+919035107432" className="text-white hover:text-purple-400 font-medium transition-colors">
                +91 9035107432
              </a>
            </div>
          </Card>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="https://www.linkedin.com/in/prince-dubey-365056323/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com/Prince-Dubeyy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.hackerrank.com/profile/princeekjmar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300 font-bold font-mono text-xl">
              H
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}
