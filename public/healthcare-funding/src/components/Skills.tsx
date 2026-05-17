"use client";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    label: "Business Intelligence",
    color: "#00d4ff",
    skills: [
      { name: "Microsoft Power BI", level: 95, note: "Certified Associate" },
      { name: "DAX & Power Query", level: 92, note: "" },
      { name: "SQL (SSMS / Oracle)", level: 90, note: "" },
      { name: "Microsoft Excel", level: 88, note: "" },
    ],
  },
  {
    label: "Programming & Automation",
    color: "#7c3aed",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 85, note: "" },
      { name: "VBA Scripting", level: 80, note: "" },
      { name: "UiPath RPA", level: 78, note: "" },
      { name: "Power Automate", level: 82, note: "" },
    ],
  },
  {
    label: "Platforms & Systems",
    color: "#10b981",
    skills: [
      { name: "Raiser's Edge NXT", level: 90, note: "" },
      { name: "Salesforce CRM", level: 75, note: "" },
      { name: "Appian", level: 78, note: "" },
      { name: "Microsoft Fabric", level: 72, note: "Certified Engineer" },
    ],
  },
];

const certs = [
  { name: "Microsoft Fabric Data Engineer Associate", issuer: "Microsoft", color: "#00d4ff" },
  { name: "Power BI Data Analyst Associate", issuer: "Microsoft", color: "#7c3aed" },
  { name: "Alteryx Foundational Micro-Credential", issuer: "Alteryx", color: "#10b981" },
  { name: "Project Management Fundamentals", issuer: "PMI", color: "#f59e0b" },
  { name: "Human Resources Concepts", issuer: "General", color: "#ec4899" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="relative py-28 border-t border-border">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Skills & Certifications</p>
          <h2 className="font-display text-4xl md:text-5xl text-text-primary">
            The full stack of a<br />
            <span className="gradient-text">modern data analyst</span>
          </h2>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`bg-surface border border-border rounded-xl p-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${ci * 150}ms` }}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase mb-6"
                style={{ color: cat.color }}
              >
                {cat.label}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-secondary">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        {skill.note && (
                          <span
                            className="text-xs font-mono px-1.5 py-0.5 rounded"
                            style={{ color: cat.color, backgroundColor: `${cat.color}15` }}
                          >
                            {skill.note}
                          </span>
                        )}
                        <span className="font-mono text-xs text-text-muted">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          backgroundColor: cat.color,
                          transitionDelay: `${ci * 150 + 300}ms`,
                          boxShadow: `0 0 8px ${cat.color}60`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase mb-6">Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {certs.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-3 hover:border-accent/30 transition-all duration-200 group"
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: cert.color }}
                />
                <div>
                  <p className="text-sm text-text-primary group-hover:text-text-primary transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-xs font-mono text-text-muted">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
