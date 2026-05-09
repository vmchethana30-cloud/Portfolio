export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Chethana Manjunath. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:chethana.vm@outlook.in"
            className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/chethana-vm"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span className="font-mono text-xs text-text-muted">Brisbane, AU</span>
        </div>
      </div>
    </footer>
  );
}
