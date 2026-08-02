"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Customer Feedback Analytics",
    description: "Trained a 3-class sentiment classifier on 75,000 Yelp reviews achieving 73.6% accuracy. Processes thousands of reviews in seconds using TF-IDF + Logistic Regression. Extracts complaints and generates business insights.",
    metrics: ["75K Records", "73.6% Accuracy", "3-Class Classification", "Real-time Processing"],
    stack: ["Python", "FastAPI", "NLP", "Machine Learning", "Scikit-learn"],
    github: "https://github.com/Prince-Dubeyy/Customer-Feedback-Analytics-AI",
    live: "https://customer-feedback-analytics-ai.vercel.app/",
  },
  {
    title: "AI-Powered Grocery Recommendation Platform",
    description: "Built recommendation engine analyzing 200,000+ users and 50,000+ products from Instacart. Implemented Association Rule Mining (Apriori), Collaborative Filtering, and Groq AI for personalized suggestions.",
    metrics: ["200K+ Users", "50K+ Products", "Millions of Records", "Multi-Algorithm"],
    stack: ["Python", "FastAPI", "React", "Recommendation Systems", "Groq AI"],
    github: "https://github.com/Prince-Dubeyy/AI-Powered-Grocery-Recommendation-Platform",
    live: "https://ai-powered-grocery-recommendation-p-snowy.vercel.app/",
  },
  {
    title: "End-to-End Last Mile Delivery Analytics",
    description: "Created 4 interactive Power BI dashboards analyzing delivery operations, risk exposure, and efficiency. Built SQL queries to extract KPIs including delivery time and risk scores.",
    metrics: ["4 Dashboards", "Multi-Time Analysis", "Peak vs Non-Peak", "Risk Scoring"],
    stack: ["SQL", "Python", "Power BI", "Pandas", "Excel"],
    github: "https://github.com/Prince-Dubeyy/End-to-End-Last-Mile-Delivery-Analytics",
    live: "",
  },
];

const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);

export function Projects() {
  return (
    <Section id="projects" className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A portfolio of AI, analytics, and recommendation systems with concrete metrics and real-world impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, idx) => (
          <Card key={idx} gradientHover className="flex flex-col h-full p-6">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>

              <div className="space-y-4 mb-8">
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
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row items-stretch gap-3 mt-auto pt-4 border-t border-white/10">
              <Button variant="outline" size="sm" href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2">
                <GithubIcon size={16} /> Code
              </Button>
              <Button
                variant="primary"
                size="sm"
                href={project.live || undefined}
                target="_blank"
                rel="noopener noreferrer"
                disabled={!project.live}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} /> {project.live ? "Live" : "No Live"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
