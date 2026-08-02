"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  { name: "Data Science with Python", issuer: "FutureSkills Prime", url: "https://futureskillsprime.in/" },
  { name: "Python for Data Science", issuer: "IIT Kanpur", url: "https://www.iitk.ac.in/" },
  { name: "Microsoft Power BI", issuer: "Coursera", url: "https://www.coursera.org/" },
  { name: "SQL", issuer: "Coursera", url: "https://www.coursera.org/" },
];

export function Certifications() {
  return (
    <Section id="certifications" className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Verified learning in Python, analytics, business intelligence, and data-driven development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {certifications.map((cert, idx) => (
          <a key={idx} href={cert.url} target="_blank" rel="noopener noreferrer" className="block h-full">
            <Card gradientHover className="p-6 text-center group cursor-pointer h-full">
              <Award className="w-10 h-10 mx-auto text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{cert.issuer}</p>
              <div className="flex items-center justify-center gap-2 text-xs font-medium text-green-400 bg-green-500/10 py-1.5 px-3 rounded-full border border-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="w-3 h-3" /> Verified
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}
