import '../pages/pages.css'
import '../pages/home.css'

import BookingForm from '../components/BookingForm.jsx';

import CardCarousel from '../components/CardCarousel.jsx';
import WaveBackground from '../components/WaveBackground.jsx';

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'


export default function Home() {
  const cards = [
  {
    title: "Rapid Transformational Therapy",
    text: "Work with the subconscious mind to uncover and shift the root of recurring patterns. Designed for deeper change when you feel ready to move beyond surface level solutions.",
    image: img1,
  },
  {
    title: "Personalised Hypnosis Recording",
    text: "A custom hypnosis recording created specifically for your goals and beliefs. Includes a one hour call and a tailored recording you can return to anytime.",
    image: img2,
  },
    {
    title: "Rapid Alignment Audios",
    text: "Short personalised audios designed for the moments your mind is most receptive. Choose a Morning Activation or Sleep Rewire to gently train new beliefs daily.",
    image:  img3,
  },
  {
    title: "Identity Shift Programs",
    text: "60 or 90 day containers supporting deep subconscious change and identity level shifts.",
    image:  img4,
  },
];


  return (
    <>

      {/* Hero Section */}
      <section className="page hero-homepage">
      
        <div className="container">
          <div className="intro">
            <div className="main-intro">
              <h1>Create the life you want</h1>
              <h2>Change the beliefs that keep you stuck</h2>
              <p>
               Explore · Release · Rewire
              </p>
              <button
                className="primary-btn"
                onClick={() => window.location.href = '/services'}
              >
                Explore Services
              </button>
            </div>

          </div>
        </div>
        
      </section>
      

      {/* Cards */}
      <section className="cards-info">
      <div className="carousel-wrapper">
        <CardCarousel cards={cards} />
      </div>
      </section>


      {/* RTT Explanation */}
      <section className="rtt-info">
        <div className="rtt-title">
          <h2>What is RTT?</h2>
        </div>

        <div className="rtt-detail">
          <p>
            RTT (Rapid Transformational Therapy) is a powerful method that combines the most
            effective principles of Hypnotherapy, Psychotherapy, NLP, and CBT to create rapid,
            permanent transformation.
          </p>
        </div>
      </section>


      {/* Video Introduction */}
      <section className="video-intro">
        <div className="container">
          <h2>Meet Bianca</h2>
          <p>Learn more about me and how I can support your personal growth journey.</p>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
              title="Bianca Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>


      {/* Free Hypnosis Download */}
      <WaveBackground>
      <section className="download-hypnosis">
        <div className="container">
          <div className="download-info-wrapper">
            <h2>Download Your Free Hypnosis Recording</h2>
            <p>Start your journey to calm and clarity today with a free guided session.</p>
          </div>
          <a
            className="primary-btn"
            href="/relaxation.m4a"
            download="relaxation.m4a"
          >
            Download Now
          </a>
        </div>
      </section>
      </WaveBackground>


      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say...</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>“I was feeling nervous and apprehensive, but this quickly disappeared once we started talking. I felt like a weight had been lifted from my shoulders straight after the session.”</p>
              <h4>- A.B.</h4>
            </div>
            <div className="testimonial-card">
              <p>“I feel much more confident and so much love towards myself. I’ve noticed clear positive shifts in my life since the session.”</p>
              <h4>- Aini. P</h4>
            </div>
            <div className="testimonial-card">
              <p>“Working with Bianca is a game changer. I can’t imagine a better professional to make this journey with.”</p>
              <h4>- P.</h4>
            </div>
          </div>
        </div>
      </section>


      {/* Lead Form & Call to Action */}
      <section className="lead-form">
      <BookingForm />
      </section>


    </>
  )
}
