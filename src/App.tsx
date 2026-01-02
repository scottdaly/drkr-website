import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AIFeatures } from './components/AIFeatures'
import { FileFormat } from './components/FileFormat'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-darker-bg text-darker-text">
      <Header />
      <main>
        <Hero />
        <Features />
        <AIFeatures />
        <FileFormat />
      </main>
      <Footer />
    </div>
  )
}

export default App
