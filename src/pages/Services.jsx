import '../pages/pages.css'
import '../pages/services.css'
import Therapy from '../assets/therapy.png'
import TherapyWide from '../assets/therapy-wide.png'
import BookingForm from '../components/BookingForm.jsx';

export default function Services() {
  const services = [
    {
      title: "Rapid Transformational Therapy",
      details: "Work with the subconscious mind to uncover and shift the root of recurring patterns. Designed for deeper change when you feel ready to move beyond surface level solutions."
    },
    {
      title: "Personalised Hypnosis Recording",
      details: "A custom hypnosis recording created specifically for your goals and beliefs. Includes a one hour call and a tailored recording you can return to anytime."
    },
    {
      title: "Rapid Alignment Audios",
      details: "Short personalised audios designed for the moments your mind is most receptive. Choose a Morning Activation or Sleep Rewire to gently train new beliefs daily."
    },
    {
      title: "Identity Shift Programs",
      details: "60 or 90 day containers supporting deep subconscious change and identity level shifts."
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

      {/* Full-width Image 
      <section className="services-image-wide">
        <img src={TherapyWide} alt="Therapy Session Wide" />
      </section> */}

      {/* Booking / Call-to-Action Section */}
      <BookingForm />

    </>
  )
}
