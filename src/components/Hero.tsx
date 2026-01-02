export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-blue/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-pink/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-darker-surface border border-darker-border mb-8">
            <span className="w-2 h-2 rounded-full bg-darker-success animate-pulse" />
            <span className="text-sm text-darker-text-muted">Now in Development</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Image Editing,{' '}
            <span className="gradient-text">Reimagined</span>
            <br />
            with AI
          </h1>

          <p className="text-xl md:text-2xl text-darker-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            A modern, open-source image editor built for the AI era.
            Professional tools, native performance, and intelligent features
            that understand your creative vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-darker-accent to-gradient-purple hover:from-darker-accent-light hover:to-gradient-purple text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-darker-accent/20"
            >
              Download for Free
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-darker-surface border border-darker-border hover:border-darker-border-light text-darker-text font-semibold text-lg transition-all hover:bg-darker-surface-light"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* App preview mockup */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-gradient-purple via-gradient-blue to-gradient-pink rounded-2xl blur-xl opacity-30 animate-float" />
            <div className="relative glass rounded-2xl border border-darker-border overflow-hidden shadow-2xl">
              {/* Title bar mockup */}
              <div className="h-10 bg-darker-surface flex items-center px-4 border-b border-darker-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-sm text-darker-text-muted">Untitled.drkr - Darker</span>
              </div>
              {/* Canvas area mockup */}
              <div className="h-80 md:h-96 bg-darker-bg flex">
                {/* Tools sidebar */}
                <div className="w-12 bg-darker-surface border-r border-darker-border flex flex-col items-center py-2 gap-1">
                  {['V', 'H', 'B', 'E', 'I', 'C'].map((tool, i) => (
                    <div
                      key={tool}
                      className={`w-8 h-8 rounded flex items-center justify-center text-xs ${
                        i === 2 ? 'bg-darker-accent text-white' : 'text-darker-text-muted hover:bg-darker-surface-light'
                      }`}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
                {/* Canvas */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <div
                    className="w-full max-w-md aspect-[4/3] rounded-lg border border-darker-border"
                    style={{
                      background: `repeating-conic-gradient(rgba(60,60,65,0.5) 0% 25%, rgba(40,40,45,0.5) 0% 50%) 50% / 20px 20px`
                    }}
                  />
                </div>
                {/* Layers panel */}
                <div className="w-48 bg-darker-surface border-l border-darker-border p-3 hidden md:block">
                  <div className="text-xs text-darker-text-muted mb-2 font-medium">Layers</div>
                  {['Layer 3', 'Layer 2', 'Background'].map((layer, i) => (
                    <div
                      key={layer}
                      className={`px-2 py-1.5 rounded text-sm mb-1 flex items-center gap-2 ${
                        i === 0 ? 'bg-darker-accent/20 text-darker-text' : 'text-darker-text-muted'
                      }`}
                    >
                      <span className="w-4 h-4 rounded bg-darker-border" />
                      {layer}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
