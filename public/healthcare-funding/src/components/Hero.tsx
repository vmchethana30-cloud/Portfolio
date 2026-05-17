"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Dashboards Built" },
  { value: "3", label: "Countries Impacted" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated data-point particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.a * 0.5})`;
        ctx.fill();

        pts.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,212,255,${(1 - dist / 120) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Canvas particle field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ pointerEvents: "none" }}
      />

      {/* Glowing orbs */}
      <div className="orb w-96 h-96 bg-accent/10 top-1/4 -left-32" style={{ animationDuration: "14s" }} />
      <div className="orb w-80 h-80 bg-accent-2/10 bottom-1/4 right-0" style={{ animationDuration: "18s", animationDelay: "-5s" }} />
      <div className="orb w-64 h-64 bg-accent-3/8 top-1/2 left-1/2" style={{ animationDuration: "22s", animationDelay: "-9s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-3 animate-pulse-slow" />
          <span className="text-xs font-mono text-text-secondary tracking-wider">
            Available for opportunities · Brisbane, AU
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 animate-slide-up stagger-1"
          style={{ opacity: 0 }}
        >
          <span className="block text-text-primary">Data that</span>
          <span className="block gradient-text">drives</span>
          <span className="block text-text-primary">decisions.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-xl text-lg md:text-xl text-text-secondary leading-relaxed mb-10 font-body animate-slide-up stagger-2"
          style={{ opacity: 0 }}
        >
          Senior Data Analyst with over 5 years of experience in transforming messy enterprise data
          into dashboards, pipelines, and insights that leadership actually acts
          on. Specialising in Power BI, PostgreSQL, SQL and Python across higher education
          and consulting.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 mb-16 animate-slide-up stagger-3"
          style={{ opacity: 0 }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-sm px-6 py-3 rounded hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 group"
          >
            View my work
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-text-secondary font-mono text-sm px-6 py-3 rounded hover:border-accent/40 hover:text-text-primary transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden animate-slide-up stagger-4"
          style={{ opacity: 0 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-6 py-5 hover:bg-bg transition-colors duration-300"
            >
              <div className="font-display text-3xl md:text-4xl text-accent mb-1 text-glow">
                {s.value}
              </div>
              <div className="text-xs font-mono text-text-muted tracking-wider uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-mono text-text-muted tracking-widest uppercase">scroll</span>
        <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
