"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Brain, Sparkles, BarChart3, DatabaseZap } from "lucide-react";

const focuses = [
  {
    icon: <Brain className="w-6 h-6 text-blue-400" />,
    title: "Machine Learning",
    description: "Building predictive models and intelligent systems for real-world decision support.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    title: "Generative AI",
    description: "Creating AI-powered applications using LLMs, prompt engineering, and RAG workflows.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
    title: "Analytics Dashboards",
    description: "Designing interactive Power BI and SQL-driven dashboards for business insights.",
  },
  {
    icon: <DatabaseZap className="w-6 h-6 text-orange-400" />,
    title: "Recommendation Systems",
    description: "Developing data-driven recommendation engines for personalized user experiences.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Data Science with a <br />
            <span className="text-gray-400">real-world impact.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Data Science undergraduate passionate about Machine Learning, NLP, SQL, Power BI, and Generative AI. I build end-to-end AI applications, analytics dashboards, recommendation systems, and business intelligence solutions that transform data into actionable insights.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Based in Bengaluru, I enjoy turning complex datasets into practical products that support smarter decisions, faster operations, and more meaningful user experiences.
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
