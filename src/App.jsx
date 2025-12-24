import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Booking from './pages/Booking'
import Blog from './pages/Blog'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="root">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
