import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/shared/ScrollToTop'
import { Home } from './pages/Home'
import { Discuss } from './pages/Discuss'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
