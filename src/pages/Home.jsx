import '../pages/pages.css'
import '../pages/home.css'
import BiancaImg from '../assets/Bianca.png'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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

            <div className="intro-image-wrapper">
              <img src={BiancaImg} alt="Bianca" className="intro-image" />
            </div>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To provide a safe, nurturing, and inspiring environment for
                deep personal growth.
              </p>
            </div>

            <div className="card">
              <h3>Our Approach</h3>
              <p>
                A blend of therapeutic practices, creativity, and mindfulness
                tailored to you.
              </p>
            </div>

            <div className="card">
              <h3>Our Values</h3>
              <p>
                Compassion, authenticity, and gentle transformation at your
                own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Introduction */}
      <section className="page video-intro">
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

      {/* Areas I Can Help With */}
      <section className="page help-with">
        <div className="container">
          <h2>How I Can Help</h2>
          <ul className="help-list">
            <li>Fears & Phobias</li>
            <li>Confidence</li>
            <li>Anxiety</li>
            <li>Addictions & Habits</li>
            <li>Relationships</li>
            <li>Weight Problems</li>
          </ul>
        </div>
      </section>

      {/* RTT Explanation */}
      <section className="page rtt-info">
        <div className="container">
          <h2>What is RTT?</h2>
          <p>
            RTT (Rapid Transformational Therapy) is a powerful method that combines the most
            effective principles of Hypnotherapy, Psychotherapy, NLP, and CBT to create rapid,
            permanent transformation.
          </p>

          <h3>What to Expect from an RTT Session</h3>
          <ul className="rtt-steps">
            <li><strong>Initial Consultation:</strong> Discuss your goals and challenges.</li>
            <li><strong>Hypnosis:</strong> A deep, relaxed state to access your subconscious mind.</li>
            <li><strong>Rewiring:</strong> Identify and reframe limiting beliefs to empower you.</li>
            <li><strong>Lasting Change:</strong> Walk away with practical tools for life-long transformation.</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="page testimonials">
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

      {/* Free Hypnosis Download */}
      <section className="page download-hypnosis">
        <div className="container">
          <h2>Download Your Free Hypnosis Recording</h2>
          <p>Start your journey to calm and clarity today with a free guided session.</p>
          <a href="/assets/free-hypnosis.mp3" download className="primary-btn">Download Now</a>
        </div>
      </section>
    </>
  )
}

