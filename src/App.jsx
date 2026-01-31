import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import FAQs from './pages/FAQs'
import Footer from './components/Footer.jsx'

// Blog posts
import PowerOfSubconscious from './pages/blogs/PowerOfSubconscious'
import CreatingSafetyWithinYourself from './pages/blogs/CreatingSafetyWithinYourself'
import HealingNotLinearJourney from './pages/blogs/HealingNotLinearJourney'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="root">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<FAQs />} />

            {/* Blog post routes */}
            <Route path="/blog/power-of-the-subconscious-mind" element={<PowerOfSubconscious />} />
            <Route path="/blog/creating-safety-within-yourself" element={<CreatingSafetyWithinYourself />} />
            <Route path="/blog/healing-is-not-linear-journey" element={<HealingNotLinearJourney />} />
          </Routes>
        </main>
      </div>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
