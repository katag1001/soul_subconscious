import '../pages/pages.css'

export default function Booking() {
  return (
    <section className="page booking">
      <div className="container">
        <h2>Booking</h2>
        <p className="lead">This page is reserved for booking information.</p>
        <div className="card small">
          {/* Intentionally left blank — add booking widget or form later if desired */}
          <div style={{ minHeight: 140 }} />
        </div>
      </div>
    </section>
  )
}
