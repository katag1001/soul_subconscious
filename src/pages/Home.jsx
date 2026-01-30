import '../pages/pages.css'
import '../pages/home.css'
import BiancaImg from '../assets/Bianca.png'
import CardCarousel from '../components/CardCarousel.jsx';
import WaveBackground from '../components/WaveBackground.jsx';

export default function Home() {
  const cards = [
  {
    title: "First Card",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:  {BiancaImg},
  },
  {
    title: "Second Card",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: {BiancaImg},
  },
  {
    title: "Third Card",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:  {BiancaImg},
  },
];


  return (
    <>

      {/* Hero Section */}
      <WaveBackground height="520px">
      <section className="page hero">
      
        <div className="container">
          <div className="intro">
            <div className="intro-text">
              <h1>Unlock Your Inner Calm</h1>
              <h2>Heal. Grow. Thrive.</h2>
              <p>
                We help you connect with your inner self through creative and
                therapeutic sessions designed to restore balance and clarity.
              </p>
              <button className="primary-btn">Explore Services</button>
            </div>

          </div>
        </div>
        
      </section>
      </WaveBackground>


      {/* Video Introduction 
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
      </section>*/}

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

      
      {/* Cards */}
      <div style={{ padding: "60px" }}>
        <CardCarousel cards={cards} />
      </div>

      {/* Free Hypnosis Download */}
      <section className="download-hypnosis">
        <div className="container">
          <div className="download-info-wrapper">
          <h2>Download Your Free Hypnosis Recording</h2>
          <p>Start your journey to calm and clarity today with a free guided session.</p>
          </div>
          <a className="primary-btn">Download Now</a>
        </div>
      </section>



      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"Bianca helped me overcome my anxiety and gave me tools I use daily. Truly life-changing!"</p>
              <h4>- Sarah J.</h4>
            </div>
            <div className="testimonial-card">
              <p>"I never thought I could feel so confident again. Her sessions are magical."</p>
              <h4>- Michael R.</h4>
            </div>
            <div className="testimonial-card">
              <p>"Thanks to Bianca, my relationship has improved drastically. Highly recommend RTT."</p>
              <h4>- Emily T.</h4>
            </div>
          </div>
        </div>
      </section>


      {/* Lead Form & Call to Action */}
      <section className="page lead-form">
        <div className="container">
          <h2>Book a Call</h2>
          <p>Schedule your free consultation and take the first step toward transformation.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="primary-btn">Book a Call</button>
          </form>
        </div>
      </section>


    </>
  )
}
