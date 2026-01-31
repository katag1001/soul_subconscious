import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const [bgColor, setBgColor] = useState('rgba(240, 242, 255, 0)')
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // ----- show / hide header -----
      if (scrollY > lastScrollY && scrollY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(scrollY)

      // ----- background color + transparency fade -----
      const maxScroll = 400
      const progress = Math.min(scrollY / maxScroll, 1)

      const start = { r: 240, g: 242, b: 255, a: 0 }
      const end = { r: 200, g: 187, b: 230, a: 0.5 }


      const r = Math.round(start.r + (end.r - start.r) * progress)
      const g = Math.round(start.g + (end.g - start.g) * progress)
      const b = Math.round(start.b + (end.b - start.b) * progress)
      const a = +(start.a + (end.a - start.a) * progress).toFixed(2)

      setBgColor(`rgba(${r}, ${g}, ${b}, ${a})`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`site-header ${hidden ? 'header-hidden' : ''}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="container header-inner">
        <div className="brand">
          <h1 className="site-title">Soul & Subconscious</h1>
        </div>
        <nav className="site-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
