"use client";
import { useEffect, useRef, useState } from "react";

const tools = [
  "Power BI", "SQL", "Python", "DAX", "Power Automate",
  "UiPath", "Raiser's Edge", "Salesforce", "Appian",
  "Azure", "Excel", "VBA", "Oracle DB", "SSMS", "Technology One",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-28 border-t border-border overflow-hidden">
      {/* background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-tight mb-6">
              Bridging the gap between{" "}
              <em className="text-accent not-italic">raw data</em> and{" "}
              <em className="text-accent-3 not-italic">real decisions</em>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                With six years of hands-on experience across consulting,
                higher education, and enterprise environments, I specialise in
                building analytics infrastructure that organisations depend on
                — not just dashboards that look good in presentations.
              </p>
              <p>
                My work spans the full analytics lifecycle: extracting and
                modelling data from complex CRM and ERP systems, authoring
                predictive models for donor retention, and automating
                workflows that once consumed hours of manual effort each week.
              </p>
              <p>
                Based in Brisbane as a Permanent Resident, I bring global
                exposure from enterprise consulting in India combined with the
                specific demands of the Australian higher education sector.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Power BI Certified", "Microsoft Fabric", "Permanent Resident", "Brisbane-based"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-accent-3 border border-accent-3/30 bg-accent-3/5 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — tool cloud + visual */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Visual card */}
            <div className="relative bg-surface border border-border rounded-2xl p-8 glow-cyan">
              {/* Top bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-accent-3/60" />
                <span className="ml-2 font-mono text-xs text-text-muted">toolkit.sql</span>
              </div>

              {/* Mock code snippet */}
              <pre className="font-mono text-xs leading-relaxed text-text-secondary mb-6 overflow-x-auto">
                <span className="text-accent">SELECT</span>
                {"\n  "}tool, proficiency_level
                {"\n"}<span className="text-accent">FROM</span> skills
                {"\n"}<span className="text-accent">WHERE</span> years_exp{" "}
                <span className="text-accent-3">&gt;= 3</span>
                {"\n"}<span className="text-accent">ORDER BY</span> impact{" "}
                <span className="text-accent">DESC</span>;
              </pre>

              <div className="h-px bg-border mb-6" />

              {/* Tool tags */}
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-bg border border-border text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
