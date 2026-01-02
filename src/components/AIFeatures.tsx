const aiFeatures = [
  {
    title: 'Edit with Natural Language',
    description: 'Describe what you want to change, and AI understands your intent. "Make the sky more dramatic" or "Add a soft glow to the subject."',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Background Removal',
    description: 'One-click background removal powered by AI segmentation. Works on people, products, pets, and more.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Super Resolution',
    description: 'Upscale images 2x or 4x while preserving detail. AI fills in missing information intelligently.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    title: 'Intelligent Inpainting',
    description: 'Select an area and describe what should fill it. Remove unwanted objects or add new elements seamlessly.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: 'Style Transfer',
    description: 'Apply artistic styles from famous paintings, modern illustrations, or custom references to your photos.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Generate from Prompt',
    description: 'Create entirely new images from text descriptions. Perfect for concept art, backgrounds, and creative exploration.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const providers = [
  { name: 'Google Gemini', logo: 'G' },
  { name: 'OpenAI DALL-E', logo: 'O' },
  { name: 'Stability AI', logo: 'S' },
  { name: 'Replicate', logo: 'R' },
];

export function AIFeatures() {
  return (
    <section id="ai" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-darker-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gradient-purple/20 to-gradient-blue/20 border border-gradient-purple/30 mb-6">
            <span className="text-sm font-medium text-gradient-purple">AI-Powered</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intelligence That{' '}
            <span className="gradient-text">Understands</span>
            <br />
            Your Vision
          </h2>
          <p className="text-xl text-darker-text-muted max-w-2xl mx-auto">
            Harness the power of multiple AI providers for image generation,
            editing, and enhancement. Your API keys, your choice of models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aiFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-darker-surface border border-darker-border hover:border-gradient-purple/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gradient-purple/5"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gradient-purple/20 to-gradient-blue/20 flex items-center justify-center text-gradient-purple mb-4 group-hover:from-gradient-purple/30 group-hover:to-gradient-blue/30 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-darker-text">
                {feature.title}
              </h3>
              <p className="text-darker-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* AI Providers */}
        <div className="p-8 rounded-2xl bg-darker-surface border border-darker-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Bring Your Own API Keys</h3>
            <p className="text-darker-text-muted">
              Connect to your preferred AI providers. No subscriptions, no hidden fees.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-darker-bg border border-darker-border hover:border-darker-border-light transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-purple to-gradient-blue flex items-center justify-center text-white font-bold">
                  {provider.logo}
                </div>
                <span className="text-darker-text font-medium">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI History Feature */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">AI Operation History</h3>
            <p className="text-darker-text-muted mb-6 leading-relaxed">
              Every AI operation is tracked and stored in your project. See exactly
              what prompts were used, which provider generated each element, and
              reproduce results at any time.
            </p>
            <ul className="space-y-3">
              {[
                'Full prompt history preserved',
                'Regenerate with same parameters',
                'Track API usage and costs',
                'Share reproducible workflows',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-darker-text-muted">
                  <svg className="w-5 h-5 text-darker-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl border border-darker-border p-6">
            <div className="text-sm text-darker-text-muted mb-4 font-medium">AI History</div>
            <div className="space-y-3">
              {[
                { type: 'generate', prompt: 'Sunset over mountain lake...', time: '2 min ago' },
                { type: 'upscale', prompt: 'Upscale 2x (quality)', time: '5 min ago' },
                { type: 'edit', prompt: 'Add soft clouds to the sky', time: '8 min ago' },
              ].map((op, i) => (
                <div key={i} className="p-3 rounded-lg bg-darker-bg border border-darker-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gradient-purple uppercase">{op.type}</span>
                    <span className="text-xs text-darker-text-muted">{op.time}</span>
                  </div>
                  <p className="text-sm text-darker-text truncate">{op.prompt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
