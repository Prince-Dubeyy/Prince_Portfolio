"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Brain, LineChart, Database, BarChart3 } from "lucide-react";

const focuses = [
  {
    icon: <Brain className="w-6 h-6 text-blue-400" />,
    title: "Machine Learning",
    description: "Building predictive models and algorithms to uncover hidden patterns.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-purple-400" />,
    title: "Analytics & Forecasting",
    description: "Transforming historical data into forward-looking business strategies.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
    title: "Business Intelligence",
    description: "Designing interactive dashboards that drive executive decision-making.",
  },
  {
    icon: <Database className="w-6 h-6 text-orange-400" />,
    title: "Data Engineering",
    description: "Designing ETL pipelines and optimizing databases for scale.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Data isn't just numbers. <br />
            <span className="text-gray-400">It's the story of the business.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am Prince Dubey, an aspiring Data Scientist based in Bengaluru. My focus lies at the intersection of advanced machine learning and practical business intelligence. I don't just build models; I build solutions that solve complex forecasting problems, optimize logistics, and explain user behavior.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Currently pursuing my B.Sc in Data Science & Cybersecurity at Garden City University, I am continuously exploring new paradigms in predictive analytics and data storytelling.
          </p>
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {focuses.map((focus, index) => (
            <Card key={index} gradientHover className="p-6">
              <div className="w-12 h-12 rounded-lg bg-surface/50 border border-white/5 flex items-center justify-center mb-4">
                {focus.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{focus.title}</h3>
              <p className="text-sm text-gray-400">{focus.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
