import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">Soul and Subconscious</div>
        <div className="footer-right">

          {/* YouTube Icon */}
          <a
            href="https://www.youtube.com/@soulandsubconscious"
            aria-label="YouTube"
            className="social"
            title="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  width="24"
  height="24"
  aria-hidden="true"
>
  <path d="M23.498 6.186a2.998 2.998 0 0 0-2.116-2.123C19.428 3.5 12 3.5 12 3.5s-7.428 0-9.382.563a2.998 2.998 0 0 0-2.116 2.123A31.246 31.246 0 0 0 0 12a31.246 31.246 0 0 0 .502 5.814 2.998 2.998 0 0 0 2.116 2.123C4.572 20.5 12 20.5 12 20.5s7.428 0 9.382-.563a2.998 2.998 0 0 0 2.116-2.123A31.246 31.246 0 0 0 24 12a31.246 31.246 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
</svg>

          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/soul_and_subconscious/?hl=en"
            aria-label="Instagram"
            className="social"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 6.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm4.8-3.4a1.08 1.08 0 1 1-1.08 1.08A1.08 1.08 0 0 1 16.8 5.1zM12 10.5A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5z"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}






