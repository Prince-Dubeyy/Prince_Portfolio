import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Dubey | Data Scientist | Machine Learning | AI",
  description: "Data Science undergraduate specializing in Machine Learning, NLP, SQL, Power BI, Generative AI, and recommendation systems.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "Artificial Intelligence",
    "Python",
    "SQL",
    "Power BI",
    "NLP",
    "Generative AI",
    "Portfolio",
    "Recommendation System",
    "Analytics",
    "FastAPI",
    "React",
    "Prince Dubey",
  ],
  openGraph: {
    title: "Prince Dubey | Data Scientist | Machine Learning | AI",
    description: "Portfolio of AI, analytics, and recommendation systems built by Prince Dubey.",
    type: "website",
    url: "https://prince-dubeyy.vercel.app/",
    siteName: "Prince Dubey Portfolio",
  },
  alternates: {
    canonical: "https://prince-dubeyy.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
