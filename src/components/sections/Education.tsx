"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Garden City University",
    degree: "B.Sc. Data Science & Cybersecurity",
    score: "CGPA: 8.96",
    year: "Expected Graduation: 2027",
  },
  {
    institution: "Class XII",
    degree: "Senior Secondary Education",
    score: "77%",
    year: "Completed",
  },
  {
    institution: "Class X",
    degree: "Secondary Education",
    score: "81.6%",
    year: "Completed",
  },
];

export function Education() {
  return (
    <Section id="education" className="bg-surface/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic Background</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A strong foundation in data science, mathematics, and analytical thinking.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full space-y-6">
        {education.map((edu, idx) => (
          <Card key={idx} gradientHover className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex-shrink-0 flex items-center justify-center border border-blue-500/20">
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-center md:text-left flex-grow">
              <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
              <p className="text-gray-300 font-medium mb-2">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-semibold shadow-inner">
                {edu.score}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
