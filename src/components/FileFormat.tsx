const formatFeatures = [
  {
    title: 'ZIP-Based Container',
    description: 'Standard ZIP archive that can be opened with any file explorer. Extract and inspect your project files directly.',
    icon: '📦',
  },
  {
    title: 'JSON Metadata',
    description: 'Human-readable configuration files. Document settings, layer properties, and AI history stored as clean JSON.',
    icon: '📄',
  },
  {
    title: 'WebP Pixel Storage',
    description: 'Modern, efficient image compression for layer data. Smaller file sizes without quality loss.',
    icon: '🖼️',
  },
  {
    title: 'Streamable Design',
    description: 'Load thumbnails instantly, then layers on demand. Perfect for large files and web-based editing.',
    icon: '⚡',
  },
];

export function FileFormat() {
  return (
    <section id="format" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-darker-surface border border-darker-border mb-6">
              <span className="text-sm font-medium text-darker-text-muted">.drkr</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Open Format,{' '}
              <span className="gradient-text">No Lock-In</span>
            </h2>
            <p className="text-xl text-darker-text-muted mb-8 leading-relaxed">
              DRKR is an open, documented file format. Your work is never trapped in
              proprietary containers. Export to standard formats anytime, or dive
              into the raw files yourself.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {formatFeatures.map((feature) => (
                <div key={feature.title} className="p-4 rounded-xl bg-darker-surface border border-darker-border">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold text-darker-text mb-1">{feature.title}</h3>
                  <p className="text-sm text-darker-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl border border-darker-border p-6 font-mono text-sm overflow-hidden">
            <div className="flex items-center gap-2 mb-4 text-darker-text-muted">
              <span>📁</span>
              <span>sunset-edit.drkr</span>
            </div>
            <div className="space-y-1 text-darker-text-muted">
              <div className="flex items-center gap-2">
                <span className="text-darker-accent">├──</span>
                <span className="text-darker-text">mimetype</span>
                <span className="text-xs opacity-50">application/x-drkr</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-darker-accent">├──</span>
                <span className="text-darker-text">manifest.json</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-darker-accent">├──</span>
                <span className="text-darker-text">document.json</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-darker-accent">├──</span>
                <span>📁 layers/</span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span className="text-gradient-purple">├──</span>
                <span>📁 layer-001/</span>
              </div>
              <div className="flex items-center gap-2 pl-10">
                <span className="text-gradient-purple">├──</span>
                <span className="text-darker-text">meta.json</span>
              </div>
              <div className="flex items-center gap-2 pl-10">
                <span className="text-gradient-purple">└──</span>
                <span className="text-darker-text">pixels.webp</span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span className="text-gradient-purple">└──</span>
                <span>📁 layer-002/</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-darker-accent">├──</span>
                <span>📁 ai/</span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span className="text-gradient-blue">└──</span>
                <span className="text-darker-text">history.json</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-darker-accent">└──</span>
                <span>📁 preview/</span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span className="text-gradient-pink">├──</span>
                <span className="text-darker-text">thumbnail.webp</span>
              </div>
              <div className="flex items-center gap-2 pl-6">
                <span className="text-gradient-pink">└──</span>
                <span className="text-darker-text">merged.webp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Import/Export */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-darker-surface border border-darker-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">📥</span> Import From
            </h3>
            <div className="flex flex-wrap gap-3">
              {['PNG', 'JPEG', 'WebP', 'GIF', 'BMP', 'TIFF', 'PSD*'].map((format) => (
                <span
                  key={format}
                  className="px-3 py-1.5 rounded-lg bg-darker-bg border border-darker-border text-sm text-darker-text-muted"
                >
                  {format}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-darker-text-muted">*PSD import with layers coming soon</p>
          </div>
          <div className="p-8 rounded-2xl bg-darker-surface border border-darker-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">📤</span> Export To
            </h3>
            <div className="flex flex-wrap gap-3">
              {['PNG', 'JPEG', 'WebP', 'DRKR', 'PSD*', 'PDF*'].map((format) => (
                <span
                  key={format}
                  className="px-3 py-1.5 rounded-lg bg-darker-bg border border-darker-border text-sm text-darker-text-muted"
                >
                  {format}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-darker-text-muted">*PSD and PDF export coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
