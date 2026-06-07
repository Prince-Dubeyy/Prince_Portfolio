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
  title: "Prince Dubey | Aspiring Data Scientist",
  description: "Aspiring Data Scientist specializing in Machine Learning, Analytics, Forecasting, SQL, Power BI, and Business Intelligence.",
  keywords: ["Data Scientist Portfolio", "Machine Learning Portfolio", "Python Developer", "Power BI Developer", "Data Analyst", "Data Science Student", "Prince Dubey"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
