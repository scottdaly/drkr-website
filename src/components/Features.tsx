const features = [
  {
    icon: '🖌️',
    title: 'Professional Brush Engine',
    description: 'Advanced brush tools with customizable size, opacity, flow, and hardness. Real-time stroke preview and smooth drawing experience.',
  },
  {
    icon: '📐',
    title: 'Layer System',
    description: 'Full layer support with opacity, visibility, locking, and blend modes. Organize your work with layer groups and masks.',
  },
  {
    icon: '✂️',
    title: 'Selection Tools',
    description: 'Rectangular, elliptical, and freeform lasso selections. Add, subtract, or intersect with existing selections.',
  },
  {
    icon: '🎨',
    title: 'Color Management',
    description: 'Intuitive HSV color picker with hex input, swatches, and quick foreground/background color swapping.',
  },
  {
    icon: '↩️',
    title: 'Full History',
    description: 'Comprehensive undo/redo system that tracks every action. Never lose your work with persistent history.',
  },
  {
    icon: '🔧',
    title: 'Image Adjustments',
    description: 'Built-in filters for brightness, contrast, saturation, blur, and more. Apply adjustments non-destructively.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Create</span>
          </h2>
          <p className="text-xl text-darker-text-muted max-w-2xl mx-auto">
            Professional-grade tools designed for modern workflows.
            Fast, intuitive, and built from the ground up for performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-darker-surface border border-darker-border hover:border-darker-border-light transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-darker-text group-hover:text-darker-accent-light transition-colors">
                {feature.title}
              </h3>
              <p className="text-darker-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Keyboard shortcuts highlight */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-darker-surface to-darker-surface-light border border-darker-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Keyboard-First Design</h3>
              <p className="text-darker-text-muted">
                Industry-standard shortcuts you already know. Press <kbd className="px-2 py-0.5 rounded bg-darker-border text-sm">B</kbd> for brush,{' '}
                <kbd className="px-2 py-0.5 rounded bg-darker-border text-sm">V</kbd> for move,{' '}
                <kbd className="px-2 py-0.5 rounded bg-darker-border text-sm">Ctrl+Z</kbd> to undo.
              </p>
            </div>
            <div className="flex gap-2">
              {['B', 'E', 'V', 'I', 'H', 'Z'].map((key) => (
                <kbd
                  key={key}
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-darker-bg border border-darker-border text-lg font-mono text-darker-text-muted"
                >
                  {key}
                </kbd>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
