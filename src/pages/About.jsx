import '../pages/pages.css'


export default function About() {
  return (
    <>
      <section className="page hero">
        <div className="container">

          <div className="intro intro-about">
            <div className="intro-text">
              <h1>My Philosophy</h1>
              <h2>Heal. Grow. Thrive.</h2>
              <p>
                Soul & Subconscious was created as a gentle space for reflection,
                healing, and personal transformation. Every session is designed
                to support you in reconnecting with your inner wisdom.
              </p>
            </div>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Mission</h3>
              <p>
                To provide a safe, nurturing, and inspiring environment where
                meaningful personal growth can unfold naturally.
              </p>
            </div>

            <div className="card">
              <h3>Approach</h3>
              <p>
                Integrating therapeutic techniques, creativity, and mindfulness
                to meet you exactly where you are.
              </p>
            </div>

            <div className="card">
              <h3>Values</h3>
              <p>
                Compassion, authenticity, and gentle transformation—without
                pressure or expectation.
              </p>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
