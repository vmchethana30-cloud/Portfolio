"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Donor Retention Intelligence Platform",
    org: "James Cook University",
    description:
      "Architected an end-to-end analytics platform to predict donor churn and identify high-value prospects. Combined SQL data pipelines, Python ML models, and Power BI dashboards to give the Advancement team actionable, real-time intelligence.",
    impact: [
      "Reduced manual prospect research time by ~60% through automated LinkedIn data capture via UiPath",
      "Forecasting models achieved >82% accuracy on donor retention signals",
      "Power BI reports adopted as primary decision tool by 3 senior stakeholders",
    ],
    tags: ["Power BI", "Python", "SQL", "UiPath", "Raiser's Edge"],
    accent: "#00d4ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Real-Time Client Engagement Dashboard",
    org: "Infosys",
    description:
      "Led design and delivery of a multi-client Power BI reporting suite integrating live REST/SOAP API feeds with Appian workflows. Delivered dynamic visualisations with row-level security, automated refresh, and drill-through capability for C-suite consumers.",
    impact: [
      "17% improvement in measured client engagement metrics post-launch",
      "Recognised as top performer of the quarter for dashboard impact",
      "Reduced report delivery time from 2 days to real-time automated refresh",
    ],
    tags: ["Power BI", "DAX", "REST APIs", "Appian", "SQL Server"],
    accent: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "CRM Data Integrity & Automation Engine",
    org: "University of Queensland",
    description:
      "Designed and implemented a suite of SQL-based anomaly detection queries and VBA automation scripts to overhaul data quality across the university's constituent CRM database. Consolidated thousands of duplicate records and automated campaign-list generation.",
    impact: [
      "Eliminated a class of recurring email bounce issues affecting donor communications",
      "Automated donor segmentation workflows previously requiring 4+ hours of manual processing per campaign",
      "Established a reusable SQL anomaly-detection library for ongoing data governance",
    ],
    tags: ["SQL", "VBA", "Salesforce", "CRM", "Data Governance"],
    accent: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const p = projects[active];

  return (
    <section id="work" ref={ref} className="relative py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary">
            Three projects that moved the needle
          </h2>
        </div>

        {/* Project selector tabs */}
        <div className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0"}`}>
          {projects.map((proj, i) => (
            <button
              key={proj.id}
              onClick={() => setActive(i)}
              className={`font-mono text-xs px-4 py-2 rounded border transition-all duration-200 ${
                active === i
                  ? "border-transparent text-bg"
                  : "border-border text-text-secondary hover:border-accent/30 hover:text-text-primary"
              }`}
              style={active === i ? { backgroundColor: proj.accent } : {}}
            >
              {proj.id} — {proj.title.split(" ").slice(0, 3).join(" ")}…
            </button>
          ))}
        </div>

        {/* Active project card */}
        <div
          key={active}
          className={`grid md:grid-cols-5 gap-0 bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ borderColor: `${p.accent}33` }}
        >
          {/* Left panel */}
          <div
            className="md:col-span-2 p-8 flex flex-col justify-between"
            style={{ background: `linear-gradient(135deg, ${p.accent}10 0%, transparent 100%)` }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${p.accent}20`, color: p.accent, border: `1px solid ${p.accent}40` }}
              >
                {p.icon}
              </div>
              <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: p.accent }}>
                {p.id}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-text-primary leading-tight mb-3">
                {p.title}
              </h3>
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider">{p.org}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-bg border border-border text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="md:col-span-3 p-8 border-t md:border-t-0 md:border-l border-border">
            <p className="text-text-secondary leading-relaxed mb-8">{p.description}</p>

            <div>
              <p className="font-mono text-xs text-text-muted tracking-wider uppercase mb-4">Key Impact</p>
              <ul className="space-y-3">
                {p.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all duration-200"
              style={{ backgroundColor: active === i ? projects[i].accent : "#1e2330" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
