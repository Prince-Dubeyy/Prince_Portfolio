"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);

const projects = [
  {
    title: "End-to-End Last Mile Delivery Analytics",
    description: "Built logistics analytics dashboards tracking delivery performance, operational KPIs, and risk exposure.",
    stack: ["Power BI", "SQL", "Python"],
    metrics: ["15% Efficiency Increase", "Real-time Tracking"],
    github: "https://github.com/Prince-Dubeyy/End-to-End-Last-Mile-Delivery-Analytics",
  },
  {
    title: "Customer Churn Prediction",
    description: "Built ML models using feature engineering, SMOTE balancing, and predictive modeling for churn prediction.",
    stack: ["Python", "Scikit-learn"],
    metrics: ["85% Accuracy", "Reduced Churn by 10%"],
    github: "https://github.com/Prince-Dubeyy/customer-churn-prediction",
  },
  {
    title: "Sales Forecasting Analysis",
    description: "Built forecasting models and dashboards for sales trend prediction and business reporting.",
    stack: ["Python", "Power BI", "Linear Regression"],
    metrics: ["Accurate Trend Prediction", "Interactive Reporting"],
    github: "https://github.com/Prince-Dubeyy/sales-forecasting-analysis",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcasing a combination of rigorous data analysis, machine learning models, and executive dashboards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, idx) => (
          <Card key={idx} gradientHover className="flex flex-col h-full p-6">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">Key Metrics</span>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="px-2 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-md border border-purple-500/20">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row items-stretch gap-3 mt-auto pt-4 border-t border-white/10">
              <Button variant="outline" size="sm" href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2">
                <GithubIcon size={16} /> Code
              </Button>
              <Button variant="primary" size="sm" disabled className="flex-1 flex items-center justify-center gap-2 cursor-not-allowed">
                <ExternalLink size={16} /> Coming Soon
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
