export function Footer() {
  return (
    <footer className="relative pt-24 pb-12">
      {/* CTA Section */}
      <section id="download" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-gradient-purple via-gradient-blue to-gradient-pink opacity-10" />
          <div className="absolute inset-0 bg-darker-surface/80" />

          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl border border-gradient-purple/30" />

          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create{' '}
              <span className="gradient-text">Something Beautiful</span>?
            </h2>
            <p className="text-xl text-darker-text-muted max-w-2xl mx-auto mb-10">
              Download Darker for free and experience the future of image editing.
              Open source, privacy-respecting, and built for creators.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://github.com/darker-app/darker/releases"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-darker-text text-darker-bg font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                Download for macOS
              </a>
              <a
                href="https://github.com/darker-app/darker"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-darker-surface border border-darker-border hover:border-darker-border-light text-darker-text font-semibold text-lg transition-all"
              >
                View on GitHub
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-darker-text-muted">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-darker-success" />
                Open Source (MIT)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-purple" />
                macOS & Windows
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-blue" />
                Free Forever
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gradient-purple to-gradient-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-darker-text">Darker</span>
            </div>
            <p className="text-sm text-darker-text-muted leading-relaxed">
              A modern, AI-native image editor built with Rust and TypeScript.
              Open source and free forever.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-darker-text mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'AI Tools', 'File Format', 'Roadmap'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-darker-text-muted hover:text-darker-text transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-darker-text mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Documentation', href: '#' },
                { name: 'GitHub', href: 'https://github.com/darker-app/darker' },
                { name: 'Releases', href: 'https://github.com/darker-app/darker/releases' },
                { name: 'Discussions', href: 'https://github.com/darker-app/darker/discussions' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-darker-text-muted hover:text-darker-text transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-darker-text mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'MIT License'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-darker-text-muted hover:text-darker-text transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-darker-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-darker-text-muted">
            {new Date().getFullYear()} Darker. Open source under the MIT License.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/darker-app/darker"
              className="text-darker-text-muted hover:text-darker-text transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/darker_app"
              className="text-darker-text-muted hover:text-darker-text transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
