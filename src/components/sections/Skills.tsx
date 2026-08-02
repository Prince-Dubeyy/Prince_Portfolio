"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const skillsData = [
  {
    category: "Core Skills",
    skills: ["Python", "SQL", "Machine Learning", "NLP"],
  },
  {
    category: "Analytics & BI",
    skills: ["Predictive Analytics", "Recommendation Systems", "Power BI", "Excel"],
  },
  {
    category: "Data Science Stack",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    category: "Generative AI",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "RAG"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "FastAPI"],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-surface/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A modern toolkit for building AI applications, analytics experiences, and intelligent systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {skillsData.map((category, idx) => (
          <Card key={idx} gradientHover className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-2 text-sm font-medium rounded-full border border-white/10 bg-white/5 text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
