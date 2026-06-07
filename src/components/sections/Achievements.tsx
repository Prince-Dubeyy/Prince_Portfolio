"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "ET AI Hackathon 2026",
    status: "Semi-Finalist",
    description: "Semi-Finalist in ET AI Hackathon 2026 conducted by The Economic Times among national-level AI innovation participants.",
  },
  {
    title: "ArtPark CodeForge Hackathon",
    status: "Participant",
    description: "Participated in ArtPark CodeForge Hackathon organized by IISc Bangalore under the Build & Submit Prototype Development Program.",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" className="bg-surface/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Recognitions and milestones from competitive problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        {achievements.map((item, idx) => (
          <Card key={idx} gradientHover className="text-center p-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-500 text-sm font-semibold rounded-full mb-4">
              {item.status}
            </span>
            <p className="text-gray-400 text-sm">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
