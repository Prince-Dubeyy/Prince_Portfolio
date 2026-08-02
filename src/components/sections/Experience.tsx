"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Codec Technologies Pvt. Ltd.",
    duration: "Jan 2026 – Feb 2026",
    highlights: [
      "Performed data cleaning and exploratory data analysis for business-ready datasets.",
      "Built machine learning solutions using TensorFlow and Scikit-learn.",
      "Supported analytics workflows with structured EDA and data preparation pipelines.",
    ],
  },
  {
    role: "AI for Sustainability Virtual Internship",
    company: "1M1B | IBM SkillsBuild | AICTE",
    duration: "May 2026 – June 2026",
    highlights: [
      "Explored Responsible AI, Agentic AI, Generative AI, and Retrieval-Augmented Generation (RAG).",
      "Developed a stronger foundation in ethical AI design and modern LLM-based workflows.",
      "Applied AI concepts to sustainability-focused problem solving and innovation.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Applying analytical thinking and AI expertise to solve practical business and product challenges.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-surface border-2 border-blue-500 transform -translate-x-1/2 mt-1 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Briefcase className="w-3 h-3 text-blue-400" />
              </div>

              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <Card gradientHover className="p-6">
                  <span className="text-blue-400 text-sm font-medium mb-2 block">{exp.duration}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                  <ul className={`space-y-2 text-sm text-gray-400 ${idx % 2 !== 0 ? "md:inline-block md:text-left" : ""}`}>
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
