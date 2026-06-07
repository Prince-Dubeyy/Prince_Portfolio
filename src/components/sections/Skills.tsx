"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "SQL", proficiency: 85 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", proficiency: 80 },
      { name: "Predictive Modeling", proficiency: 85 },
      { name: "Regression", proficiency: 85 },
      { name: "Classification", proficiency: 80 },
    ],
  },
  {
    category: "Data Analysis",
    skills: [
      { name: "Pandas", proficiency: 95 },
      { name: "NumPy", proficiency: 90 },
      { name: "EDA", proficiency: 90 },
      { name: "Trend Analysis", proficiency: 85 },
    ],
  },
  {
    category: "Visualization",
    skills: [
      { name: "Power BI", proficiency: 90 },
      { name: "Excel", proficiency: 85 },
      { name: "Dashboard Development", proficiency: 85 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", proficiency: 80 },
      { name: "VS Code", proficiency: 95 },
      { name: "Jupyter Notebook", proficiency: 95 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-surface/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit tailored for extracting insights and building robust data solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {skillsData.map((category, idx) => (
          <Card key={idx} gradientHover className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
              {category.category}
            </h3>
            <div className="space-y-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
