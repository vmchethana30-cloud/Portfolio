import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NQ Chemotherapy Service Analysis — Chethana Manjunath",
  description:
    "Data-driven needs assessment to identify the highest-priority location for a new chemotherapy service in North Queensland.",
};

const charts = [
  {
    src: "/health-charts/chart1_incidence_hhs.png",
    title: "Cancer Incidence by HHS",
    description:
      "Total cancer incidence across all Queensland HHS, with North Queensland highlighted. Provides state-wide context for understanding where NQ sits relative to the rest of Queensland.",
    insight:
      "North Queensland accounts for ~13% of Queensland's total cancer incidence despite covering a far larger geographic footprint — justifying targeted service investment.",
    color: "#f59e0b",
  },
  {
    src: "/health-charts/chart4_sa3_incidence.png",
    title: "Adult Cancer Incidence by SA3",
    description:
      "SA3-level adult cancer incidence across all five North Queensland HHS, colour-coded by parent HHS. Reveals which sub-regions are driving the most demand.",
    insight:
      "Townsville and Cairns SA3s dominate incidence but are already served by tertiary facilities. Mackay SA3s contribute significant burden with far less local service coverage.",
    color: "#00d4ff",
  },
  {
    src: "/health-charts/chart2_oos_trend.png",
    title: "Chemotherapy OOS Trends & Growth",
    description:
      "Year-on-year chemotherapy occasions of service (OOS) trends from 2020/21 to 2022/23 for all North Queensland HHS, alongside growth rate comparison.",
    insight:
      "Torres and Cape recorded 74% growth from a low base, while North West grew 24.6%. Cairns grew 11.8%, suggesting emerging capacity pressure. Mackay and Townsville remained stable.",
    color: "#10b981",
  },
  {
    src: "/health-charts/chart3_patient_flows.png",
    title: "Out-of-Area Treatment Rates",
    description:
      "Proportion of residents in each North Queensland HHS receiving chemotherapy outside their home HHS (left), alongside total OOS volume (right) for 2022/23.",
    insight:
      "Mackay's 23% out-of-area rate represents ~1,055 patients travelling to Townsville — a 700km round trip. Torres and Cape's 81% rate requires an outreach model, not a fixed unit.",
    color: "#ef4444",
  },
  {
    src: "/health-charts/chart5_risk_factors.png",
    title: "Population Health Risk Factors",
    description:
      "Prevalence of three key cancer risk factors — overweight/obesity, daily smoking, and insufficient physical activity — across North Queensland HHS.",
    insight:
      "Mackay records 65.4% overweight/obese, 12.6% daily smokers, and 49% insufficient physical activity — all elevated relative to Queensland averages, indicating continued demand growth.",
    color: "#7c3aed",
  },
  {
    src: "/health-charts/chart6_need_score.png",
    title: "Composite Need Score",
    description:
      "Weighted composite score combining cancer incidence (30%), OOS volume (25%), growth rate (25%), and out-of-area rate (20%) to rank each NQ HHS by service investment priority.",
    insight:
      "Mackay scored 73/100 — highest among large-volume NQ HHS. Torres and Cape scored 69 but requires a different service model given its extreme remoteness and low absolute volume.",
    color: "#00d4ff",
  },
];

const stats = [
  { value: "5", label: "HHS Analysed" },
  { value: "5,389", label: "NQ Cancer Cases/yr" },
  { value: "23%", label: "Mackay Out-of-Area Rate" },
  { value: "73/100", label: "Mackay Need Score" },
];

const tools = ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "NumPy", "Excel"];

const scoreTable = [
  { hhs: "Mackay", incidence: "1,281", oos: "4,582", growth: "−2.1%", ooa: "23.0%", score: "73", recommended: true },
  { hhs: "Torres & Cape", incidence: "116", oos: "508", growth: "+74.0%", ooa: "80.7%", score: "69", recommended: false },
  { hhs: "Cairns & Hinterland", incidence: "2,143", oos: "8,278", growth: "+11.8%", ooa: "5.5%", score: "65", recommended: false },
  { hhs: "North West", incidence: "131", oos: "840", growth: "+24.6%", ooa: "15.1%", score: "42", recommended: false },
  { hhs: "Townsville", incidence: "1,848", oos: "8,569", growth: "−2.0%", ooa: "1.4%", score: "38", recommended: false },
];

export default function HealthAnalyticsPage() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      {/* Back nav */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 border-b border-border overflow-hidden grid-bg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-2/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent-2 tracking-widest uppercase mb-4">
            Health Analytics · Python + Information Paper
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text-primary leading-tight mb-6 max-w-4xl">
            North Queensland Chemotherapy Service Need Analysis
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-10">
            A data-driven needs assessment across five North Queensland Hospital
            and Health Services — combining cancer incidence, chemotherapy
            utilisation, patient flow data, and population health risk factors
            to identify the highest-priority location for a new chemotherapy
            service.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-5">
                <div className="font-display text-3xl text-accent-2 mb-1">{s.value}</div>
                <div className="text-xs font-mono text-text-muted tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1.5 rounded bg-surface border border-border text-text-secondary">
                {t}
              </span>
            ))}
            <a
              href="https://github.com/vmchethana30-cloud/health-analytics-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded border border-accent-2/40 text-accent-2 hover:bg-accent-2 hover:text-bg transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View Code on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-xs text-accent-2 tracking-widest uppercase mb-3">Analysis</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary">
              Six charts. One clear answer.
            </h2>
          </div>

          <div className="space-y-16">
            {charts.map((chart, i) => (
              <div
                key={chart.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div
                  className={`rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:border-opacity-60 ${i % 2 === 1 ? "md:col-start-2" : ""}`}
                  style={{ borderColor: `${chart.color}33` }}
                >
                  <Image src={chart.src} alt={chart.title} width={800} height={450} className="w-full h-auto" />
                </div>
                <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: chart.color }}>
                    {String(i + 1).padStart(2, "0")} / {String(charts.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-4">{chart.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">{chart.description}</p>
                  <div
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ borderColor: `${chart.color}30`, backgroundColor: `${chart.color}08` }}
                  >
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: chart.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="font-mono text-xs uppercase tracking-wider mr-2" style={{ color: chart.color }}>Key Insight:</span>
                      {chart.insight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Score table */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent-2 tracking-widest uppercase mb-3">Final Results</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-10">Composite Need Score Rankings</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-surface border-b border-border">
                  {["HHS", "Cancer Cases/yr", "OOS 2022/23", "Growth", "Out-of-Area %", "Need Score"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-mono text-text-muted tracking-wider uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scoreTable.map((row, i) => (
                  <tr
                    key={row.hhs}
                    className={`border-b border-border transition-colors ${row.recommended ? "bg-accent-2/5" : i % 2 === 0 ? "bg-bg" : "bg-surface"}`}
                  >
                    <td className="px-5 py-4 text-sm font-mono">
                      <span className={row.recommended ? "text-accent-2 font-bold" : "text-text-secondary"}>
                        {row.recommended ? "★ " : ""}{row.hhs}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{row.incidence}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{row.oos}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{row.growth}</td>
                    <td className={`px-5 py-4 text-sm font-mono font-bold ${parseFloat(row.ooa) > 20 ? "text-red-400" : "text-text-secondary"}`}>{row.ooa}</td>
                    <td className="px-5 py-4">
                      <span
                        className="font-mono font-bold text-sm px-3 py-1 rounded"
                        style={{
                          backgroundColor: row.recommended ? "#7c3aed20" : "#1e2330",
                          color: row.recommended ? "#7c3aed" : "#8892a4",
                        }}
                      >
                        {row.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent-2 tracking-widest uppercase mb-3">Recommendations</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-10">What the data recommends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Establish service at Mackay Base Hospital", body: "Mackay's 23% out-of-area rate and 4,582 annual OOS represent the strongest case for a fixed chemotherapy unit. Expanding Mackay Base Hospital's existing capability would reduce ~1,055 patient journeys to Townsville each year.", color: "#7c3aed" },
              { title: "Satellite outreach to Bowen & Whitsunday", body: "Bowen Basin North and Whitsunday SA3s contribute significant out-of-area demand with no local option. Satellite outreach from Mackay Base Hospital would extend reach to these sub-regions without requiring a separate facility.", color: "#00d4ff" },
              { title: "Outreach model for Torres & Cape", body: "Torres and Cape's 81% out-of-area rate is critical but its 508 annual OOS and extreme remoteness call for expanded outreach visits to Thursday Island and Weipa rather than a fixed unit.", color: "#10b981" },
              { title: "Monitor Cairns capacity", body: "Cairns and Hinterland's 11.8% OOS growth rate is the highest sustained growth in NQ. Capacity planning should flag Cairns for a service expansion review within 2–3 years if growth continues.", color: "#f59e0b" },
            ].map((rec) => (
              <div
                key={rec.title}
                className="bg-surface border border-border rounded-xl p-6 card-lift"
                style={{ borderColor: `${rec.color}22` }}
              >
                <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: rec.color }} />
                <h3 className="font-display text-xl text-text-primary mb-3">{rec.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{rec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-border text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-text-secondary mb-6">Want to discuss this analysis or see the full information paper?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:chethana.vm@outlook.in" className="inline-flex items-center gap-2 bg-accent-2 text-bg font-mono text-sm px-6 py-3 rounded hover:bg-accent-2/90 transition-all">
              Get in touch
            </a>
            <a href="https://github.com/vmchethana30-cloud/health-analytics-portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border text-text-secondary font-mono text-sm px-6 py-3 rounded hover:border-accent-2/40 hover:text-text-primary transition-all">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
