import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1 className="site-title">Soul Subconscious</h1>
        </div>
        <nav className="site-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/booking" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Booking</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
        </nav>
      </div>
    </header>
  )
}
