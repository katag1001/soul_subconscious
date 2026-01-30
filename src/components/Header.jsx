import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const [bgColor, setBgColor] = useState('rgb(240, 242, 255)') // bg-primary

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 300 // distance over which color transition happens
      const progress = Math.min(scrollY / maxScroll, 1)

      // bg-primary → pale-lilac
      const start = { r: 240, g: 242, b: 255 }
      const end = { r: 227, g: 212, b: 240 }

      const r = Math.round(start.r + (end.r - start.r) * progress)
      const g = Math.round(start.g + (end.g - start.g) * progress)
      const b = Math.round(start.b + (end.b - start.b) * progress)

      setBgColor(`rgb(${r}, ${g}, ${b})`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="site-header" style={{ backgroundColor: bgColor }}>
      <div className="container header-inner">
        <div className="brand">
          <h1 className="site-title">Soul & Subconscious</h1>
        </div>
        <nav className="site-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
        </nav>
      </div>
    </header>
  )
}
