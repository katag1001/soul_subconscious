import '../pages/pages.css'


export default function Services() {
  return (
    <>
      <section className="page hero">
        <div className="container">

          <div className="card-grid">

            <div className="card">
              <h3>Hypnotherapy Session</h3>
              <p>
                A deeply relaxing one-on-one session focused on accessing the
                subconscious mind to support healing, insight, and change.
              </p>
              <button className="primary-btn">Book Now</button>
            </div>

            <div className="card">
              <h3>Guided Meditation</h3>
              <p>
                Gentle, guided meditations designed to calm the nervous system,
                improve focus, and restore emotional balance.
              </p>
              <button className="primary-btn">Book Now</button>
            </div>

            <div className="card">
              <h3>Inner Child Work</h3>
              <p>
                A compassionate space to explore and heal early emotional
                patterns, fostering self-trust and emotional safety.
              </p>
              <button className="primary-btn">Book Now</button>
            </div>

          </div>

        </div>
      </section>


    </>
  )
}
