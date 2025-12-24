import '../pages/pages.css'
import Footer from '../components/Footer'
import BiancaImg from '../assets/Bianca.png'

export default function Home() {
  return (
    <>
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
              <img
                src={BiancaImg}
                alt="Bianca"
                className="intro-image"
              />
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

      <Footer />
    </>
  )
}
