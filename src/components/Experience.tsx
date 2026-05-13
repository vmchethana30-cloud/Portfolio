"use client";
import { useEffect, useRef, useState } from "react";

const roles = [
  {
    title: "Advancement Services Officer",
    org: "James Cook University",
    period: "Mar 2024 — Dec 2025",
    location: "Townsville, AU",
    type: "Full-time",
    color: "#7c3aed",
    bullets: [
      "Built and maintained an interactive Power BI reporting suite tracking 15+ KPIs across the Advancement division, adopted as primary leadership decision-making tool",
      "Developed predictive donor retention and prospect scoring models in Python, achieving >82% recall on churn signals",
      "Automated LinkedIn URL prospecting pipeline using UiPath, cutting manual research time by ~60% for the Prospect Development team",
      "Designed complex SQL and Raiser's Edge queries for multi-dataset extraction, transformation, and merge operations across millions of constituent records",
      "Identified and automated 6 recurring BAU reporting tasks using Power Automate, freeing ~8 hours/week across the team",
      "Supervised and mentored casual staff; established data governance documentation covering sources, KPIs, and data lineage",
    ],
  },
  {
    title: "Senior Associate Consultant",
    org: "Infosys",
    period: "May 2022 — Aug 2023",
    location: "Bangalore, IN",
    type: "Full-time",
    color: "#10b981",
    bullets: [
      "Led delivery of client-facing Power BI dashboards integrating live REST/SOAP API data streams via Appian, improving measured client engagement by 17%",
      "Architected ETL pipelines using advanced SQL, transforming complex multi-source datasets into governed, analytics-ready models",
      "Implemented row-level security and automated data refresh schedules across Power BI Service, ensuring regulatory compliance for financial clients",
      "Awarded top performer of the quarter for delivering the highest-impact data visualisation project",
      "Recruited, interviewed, and trained new analysts; designed onboarding programmes adopted across the analytics practice",
    ],
  },
  {
    title: "Software Developer Analyst",
    org: "Accenture",
    period: "Dec 2019 — May 2022",
    location: "Bangalore, IN",
    type: "Full-time",
    color: "#f59e0b",
    bullets: [
      "Built Power BI reports with cross-filtering, custom hierarchies, and DAX-optimised calculated columns for enterprise clients across BFSI and retail verticals",
      "Constructed complex SQL queries including correlated subqueries and multi-table joins for large-scale data extraction tasks",
      "Implemented Pandas/NumPy-based Python pipelines for client-specific data transformation and delivery workflows",
      "Established automated dataset refresh schedules ensuring dashboards consistently reflected real-time source data",
      "Recognised as Team Member of the Month for consistent on-time delivery across multiple concurrent workstreams",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="relative py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary">
            Six years, four companies,<br />
            <span className="gradient-text">one common thread</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {roles.map((role, i) => (
            <div
              key={role.title + role.org}
              className={`border rounded-xl overflow-hidden transition-all duration-500 card-lift ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                borderColor: expanded === i ? `${role.color}40` : "#1e2330",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Header row */}
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-1 w-3 h-3 rounded-full shrink-0 ring-4"
                    style={{ backgroundColor: role.color }}
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-display text-xl text-text-primary">{role.title}</h3>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{ color: role.color, backgroundColor: `${role.color}15` }}
                      >
                        {role.type}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm">
                      {role.org}{" "}
                      <span className="text-text-muted mx-2">·</span>
                      <span className="text-text-muted">{role.location}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="hidden sm:block font-mono text-xs text-text-muted">{role.period}</span>
                  <svg
                    className={`w-4 h-4 text-text-muted transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Expandable content */}
              {expanded === i && (
                <div className="px-6 pb-6 pt-0 border-t border-border">
                  <ul className="mt-4 space-y-3">
                    {role.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: role.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
