"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
    <section id="contact" ref={ref} className="relative py-28 border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-text-primary leading-tight mb-6">
            Let&apos;s build something{" "}
            <span className="gradient-text">data-driven</span>{" "}
            together
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Whether you need a Power BI expert, a Python automation architect,
            or someone to own your data strategy end-to-end — I&apos;d love to
            hear about the problem you&apos;re trying to solve.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:chethana.vm@outlook.in"
              className="group flex items-center gap-3 bg-accent text-bg font-mono text-sm px-8 py-4 rounded-xl hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 w-full sm:w-auto justify-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              chethana.vm@outlook.in
            </a>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-text-muted font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-3 animate-pulse-slow" />
              Available for roles
            </div>
            <span className="text-border">·</span>
            <span className="text-border">·</span>
            <span className="text-border">·</span>
          </div>
        </div>
      </div>
    </section>
  );
}
