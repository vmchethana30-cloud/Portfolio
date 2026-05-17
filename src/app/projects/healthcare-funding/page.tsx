import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Funding Analytics — Chethana Manjunath",
  description:
    "End-to-end analysis of Activity Based Funding, Own Source Revenue and National Funding Arrangements across 14 Queensland HHS.",
};

const charts = [
  {
    src: "/healthcare-funding/chart_consolidated_dashboard.png",
    title: "Consolidated Funding Dashboard",
    description:
      "Four-panel dashboard combining all three funding streams — total funding by HHS, Queensland funding mix, year-on-year growth trend, and North Queensland's share of total ABF funding from 2019 to 2024.",
    insight:
      "ABF dominates at ~68% of total funding. North Queensland maintains a stable 14–15% share of QLD ABF despite population growth pressures. COVID-19 caused a visible dip in 2020 with full recovery by 2022.",
    color: "#00d4ff",
  },
  {
    src: "/healthcare-funding/chart_abf_by_hhs.png",
    title: "ABF Funding by HHS",
    description:
      "Total Activity Based Funding allocation across all 14 Queensland HHS for FY2024, with North Queensland HHS highlighted to show regional funding distribution relative to metropolitan counterparts.",
    insight:
      "Metro North and Metro South dominate ABF allocation. North Queensland HHS collectively receive proportionally less funding relative to their geographic coverage and travel burden on patients.",
    color: "#00d4ff",
  },
  {
    src: "/healthcare-funding/chart_abf_trend.png",
    title: "ABF Trend & NWA Price Growth",
    description:
      "Left panel shows ABF funding trend for North QLD, Metro, and All QLD from 2019–2024. Right panel tracks National Weighted Activity (NWA) price growth — the unit price that drives total ABF revenue.",
    insight:
      "NWA price grew 13.3% from $5,012 (2019) to $5,678 (2024). The COVID-19 dip in 2020 is clearly visible with Metro recovering faster than regional HHS due to higher elective surgery volumes.",
    color: "#00d4ff",
  },
  {
    src: "/healthcare-funding/chart_abf_variance.png",
    title: "ABF Cost Variance by Care Type",
    description:
      "Comparison of ABF funded amounts versus actual costs by care type (left), and the resulting variance percentage (right). Positive variance indicates underspend; negative indicates cost overrun.",
    insight:
      "Emergency Department and Mental Health care types show consistent cost overruns relative to ABF funding — a common finding in public hospital systems where demand is unplanned and activity-based pricing does not always cover complexity.",
    color: "#f59e0b",
  },
  {
    src: "/healthcare-funding/chart_osr_trend.png",
    title: "Own Source Revenue Trend & Category Breakdown",
    description:
      "Left panel tracks total OSR versus budget from 2019–2024, clearly showing COVID-19 impact. Right panel breaks down OSR by category for FY2024, with Private Patient Fees and Car Parking as the dominant streams.",
    insight:
      "COVID-19 reduced OSR by approximately 25% in 2020, driven by suspension of elective procedures and restricted access to facilities. Full recovery was achieved by 2023 with a positive growth trajectory through 2024.",
    color: "#10b981",
  },
  {
    src: "/healthcare-funding/chart_osr_variance.png",
    title: "OSR Budget Variance by HHS",
    description:
      "Budget variance percentage for Own Source Revenue across all 14 HHS — showing which health services exceeded or fell short of their OSR targets across the full 2019–2024 period.",
    insight:
      "Larger metropolitan HHS show greater variance volatility due to higher private patient volumes. Several regional HHS consistently underperformed OSR budgets, reflecting lower private health insurance rates and fewer commercial revenue opportunities.",
    color: "#10b981",
  },
  {
    src: "/healthcare-funding/chart_nfa_split.png",
    title: "National Funding — Commonwealth vs State Split",
    description:
      "Stacked bar and trend line showing the evolving split between Commonwealth and State contributions to National Funding Arrangements across Queensland from 2019 to 2024.",
    insight:
      "The Commonwealth share has grown from 50.0% (2019) to 52.5% (2024) under the National Health Reform Agreement — reflecting the Commonwealth's increasing funding responsibility for public hospital services.",
    color: "#7c3aed",
  },
  {
    src: "/healthcare-funding/chart_nfa_utilisation.png",
    title: "NFA Stream Utilisation & Undrawn Funds",
    description:
      "Left panel shows drawn versus undrawn amounts by funding stream across all years. Right panel shows utilisation rates against the 95% target threshold for each stream.",
    insight:
      "Capital Funding and Preventive Health streams fall below the 95% utilisation target — indicating planning or delivery barriers to drawing down allocated funds. Mental Health and Indigenous Health streams show strong utilisation above target.",
    color: "#7c3aed",
  },
  {
    src: "/healthcare-funding/chart_indigenous_funding.png",
    title: "Indigenous Health Funding — NQ Focus",
    description:
      "Trend lines showing Indigenous Health funding growth for each North Queensland HHS from 2019–2024 (left), alongside a full HHS comparison for FY2024 (right).",
    insight:
      "Torres and Cape and Cairns and Hinterland receive disproportionately higher Indigenous Health funding — reflecting higher Aboriginal and Torres Strait Islander population proportions in these catchments and specific needs-based allocation under National Funding Arrangements.",
    color: "#f59e0b",
  },
];

const stats = [
  { value: "14", label: "HHS Analysed" },
  { value: "6", label: "Years (2019–2024)" },
  { value: "3", label: "Funding Streams" },
  { value: "7", label: "Power BI Exports" },
];

const tools = ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy", "Jupyter", "Power BI"];

const fundingTable = [
  { stream: "Activity Based Funding (ABF)", driver: "NWA Units × NWA Price", share: "~68%", notes: "Performance-based — volume drives revenue" },
  { stream: "Own Source Revenue (OSR)", driver: "Commercial & Private Activity", share: "~3%", notes: "COVID-sensitive; car parking, private fees" },
  { stream: "National Funding Arrangements (NFA)", driver: "NHRA + Specific Purpose Payments", share: "~29%", notes: "Commonwealth/State split; stream-specific" },
];

export default function HealthcareFundingPage() {
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-3/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent-3 tracking-widest uppercase mb-4">
            Healthcare Analytics · Python + Power BI
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-text-primary leading-tight mb-6 max-w-4xl">
            Healthcare Funding Analytics
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-6">
            A comprehensive end-to-end analysis of Queensland public hospital
            funding across three streams — Activity Based Funding (ABF), Own
            Source Revenue (OSR), and National Funding Arrangements (NFA) —
            covering 14 Hospital and Health Services from 2019 to 2024.
          </p>

          {/* Funding stream tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "Activity Based Funding (ABF)", color: "#00d4ff" },
              { label: "Own Source Revenue (OSR)", color: "#10b981" },
              { label: "National Funding Arrangements (NFA)", color: "#7c3aed" },
            ].map((s) => (
              <span
                key={s.label}
                className="text-xs font-mono px-3 py-1.5 rounded border"
                style={{ borderColor: `${s.color}40`, color: s.color, backgroundColor: `${s.color}10` }}
              >
                {s.label}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-5">
                <div className="font-display text-3xl text-accent-3 mb-1">{s.value}</div>
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
              href="https://github.com/vmchethana30-cloud/healthcare-funding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded border border-accent-3/40 text-accent-3 hover:bg-accent-3 hover:text-bg transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Funding streams overview table */}
      <section className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent-3 tracking-widest uppercase mb-3">Funding Framework</p>
          <h2 className="font-display text-3xl text-text-primary mb-8">Three streams. One funding picture.</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-surface border-b border-border">
                  {["Funding Stream", "Primary Driver", "QLD Share", "Key Characteristics"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-mono text-text-muted tracking-wider uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fundingTable.map((row, i) => (
                  <tr key={row.stream} className={`border-b border-border ${i % 2 === 0 ? "bg-bg" : "bg-surface"}`}>
                    <td className="px-5 py-4 text-sm font-mono text-accent font-bold">{row.stream}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{row.driver}</td>
                    <td className="px-5 py-4 text-sm font-mono text-text-primary font-bold">{row.share}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-xs text-accent-3 tracking-widest uppercase mb-3">Analysis</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary">
              Nine charts across three funding streams
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

      {/* Key findings */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-xs text-accent-3 tracking-widest uppercase mb-3">Key Findings</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-10">What the data revealed</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stream: "ABF",
                color: "#00d4ff",
                findings: [
                  "NWA price grew 13.3% from 2019–2024 ($5,012 → $5,678)",
                  "COVID-19 caused ~12% activity volume dip in 2020",
                  "ED and Mental Health show consistent cost overruns vs ABF funding",
                  "Metro recovery faster than regional HHS post-COVID",
                ],
              },
              {
                stream: "OSR",
                color: "#10b981",
                findings: [
                  "COVID-19 reduced OSR by ~25% in 2020",
                  "Private Patient Fees (35%) and Car Parking (18%) dominate",
                  "Full recovery achieved by 2023 with growth through 2024",
                  "Regional HHS consistently underperform OSR budgets",
                ],
              },
              {
                stream: "NFA",
                color: "#7c3aed",
                findings: [
                  "Commonwealth share grew from 50.0% to 52.5% (2019–2024)",
                  "Capital Funding and Preventive Health below 95% utilisation target",
                  "Torres & Cape and Cairns receive highest Indigenous Health allocations",
                  "Mental Health stream shows strong utilisation above target",
                ],
              },
            ].map((section) => (
              <div
                key={section.stream}
                className="bg-surface border border-border rounded-xl p-6 card-lift"
                style={{ borderColor: `${section.color}22` }}
              >
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-4 px-2 py-1 rounded inline-block"
                  style={{ color: section.color, backgroundColor: `${section.color}15` }}
                >
                  {section.stream}
                </div>
                <ul className="space-y-3">
                  {section.findings.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: section.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-border text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-text-secondary mb-6">Want to discuss this project or explore the Power BI dashboard?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:chethana.vm@outlook.in" className="inline-flex items-center gap-2 bg-accent-3 text-bg font-mono text-sm px-6 py-3 rounded hover:bg-accent-3/90 transition-all">
              Get in touch
            </a>
            <a
              href="https://github.com/vmchethana30-cloud/healthcare-funding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-text-secondary font-mono text-sm px-6 py-3 rounded hover:border-accent-3/40 hover:text-text-primary transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
