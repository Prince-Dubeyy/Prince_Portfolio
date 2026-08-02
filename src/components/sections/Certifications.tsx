"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const certifications = [
  { name: "Data Science with Python", issuer: "FutureSkills Prime (Capgemini & NASSCOM)", url: "https://fsp-assessment-certificates.s3.ap-southeast-1.amazonaws.com/%27/s3/buckets/fsp-assessment-certificates%27/Prince%2BDubey_53493.pdf" },
  { name: "Python for Data Science", issuer: "IIT Kanpur", url: "https://verify.eicta.digitalcredentials.in/262257fa-8a4d-4bc2-a70b-d01197d80a79" },
  { name: "Microsoft Power BI", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/6T5EFL6TD6D9" },
  { name: "SQL", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/J9NGKP1CTP12" },
];

export function Certifications() {
  return (
    <Section id="certifications" className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Verified learning in Python, analytics, business intelligence, and data-driven development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {certifications.map((cert, idx) => (
          <Card key={idx} gradientHover className="p-6 text-center group flex flex-col justify-between h-full">
            <div>
              <Award className="w-10 h-10 mx-auto text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-400 mb-6">{cert.issuer}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            >
              Verify Certificate <ExternalLink size={16} />
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
