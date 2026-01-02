import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-darker-border' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="w-12 h-12" />
          <span className="text-xl font-bold text-darker-text">Darker</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-darker-text-muted hover:text-darker-text transition-colors">
            Features
          </a>
          <a href="#ai" className="text-darker-text-muted hover:text-darker-text transition-colors">
            AI Tools
          </a>
          <a href="#format" className="text-darker-text-muted hover:text-darker-text transition-colors">
            File Format
          </a>
          <a
            href="https://github.com/darker-app/darker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darker-text-muted hover:text-darker-text transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/editor"
            className="px-5 py-2 rounded-lg bg-darker-surface border border-darker-border hover:border-darker-border-light text-darker-text font-medium transition-colors"
          >
            Open in Browser
          </a>
          <a
            href="#download"
            className="px-5 py-2 rounded-lg bg-darker-accent hover:bg-darker-accent-light text-white font-medium transition-colors"
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
