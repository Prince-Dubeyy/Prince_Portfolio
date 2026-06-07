"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  { name: "Power BI", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/6T5EFL6TD6D9" },
  { name: "SQL", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/J9NGKP1CTP12" },
  { name: "Excel", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/QGTGDANGS7M5" },
  { name: "Python for Data Science", issuer: "IIT Kanpur", url: "https://verify.eicta.digitalcredentials.in/262257fa-8a4d-4bc2-a70b-d01197d80a79" },
];

export function Certifications() {
  return (
    <Section id="certifications" className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Continuous learning and verified expertise in the modern data stack.
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
