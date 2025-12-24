import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">Soul and Subconscious</div>
        <div className="footer-right">
          <a href="" aria-label="Facebook" className="social" title="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.29v-2.9h3.98V9.04c0-3.95 2.36-6.11 5.95-6.11 1.72 0 3.51.31 3.51.31v3.86h-1.98c-1.95 0-2.56 1.21-2.56 2.45v2.1h4.35l-.7 2.9h-3.65v7.03c4.78-.8 8.44-4.94 8.44-9.93z"/>
            </svg>
          </a>

          <a href="" aria-label="Email" className="social" title="Email">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>

          <a href="" aria-label="Instagram" className="social" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 6.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm4.8-3.4a1.08 1.08 0 1 1-1.08 1.08A1.08 1.08 0 0 1 16.8 5.1zM12 10.5A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
