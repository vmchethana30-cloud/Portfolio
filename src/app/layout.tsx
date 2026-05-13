import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chethana Manjunath — Data Analyst & BI Engineer",
  description:
    "Senior Data Analyst specialising in Power BI, SQL, Python and advanced analytics. Turning complex data into decisions that matter.",
  keywords: [
    "Data Analyst",
    "Power BI",
    "SQL",
    "Python",
    "Business Intelligence",
    "Brisbane",
    "Australia",
  ],
  authors: [{ name: "Chethana Manjunath" }],
  openGraph: {
    title: "Chethana Manjunath — Data Analyst & BI Engineer",
    description:
      "Six years of turning raw data into revenue, retention, and results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
