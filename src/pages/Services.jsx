import '../pages/pages.css'
import '../pages/services.css'
import Therapy from '../assets/therapy.png'
import TherapyWide from '../assets/therapy-wide.png'
import BookingForm from '../components/BookingForm.jsx';

export default function Services() {
  const services = [
    {
      title: "Service One",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Service Two",
      details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Service Three",
      details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      title: "Service Four",
      details: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  return (
    <>
      {/* Intro Section */}
      <section className="services-intro">
        <div className="container intro-wrapper">
          <div className="intro-text">
            <h2>Our Services</h2>
            <p>
              Explore the variety of therapeutic and creative sessions we offer. 
              Each session is designed to guide you toward clarity, balance, and growth.
            </p>
          </div>
          <div className="intro-image">
            <img src={Therapy} alt="Therapy Session" />
          </div>
        </div>
      </section>

      {/* Services Card Grid */}
      <section className="services-grid">
        <div className="container grid-wrapper">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width Image */}
      <section className="services-image-wide">
        <img src={TherapyWide} alt="Therapy Session Wide" />
      </section>

      {/* Booking / Call-to-Action Section */}
      <BookingForm />

    </>
  )
}
