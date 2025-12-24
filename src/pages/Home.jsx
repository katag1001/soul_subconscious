import '../pages/pages.css'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <section className="page home">
        <div className="container">
          <h2>Welcome to Soul Subconscious</h2>
          <p className="lead">A calm place to explore inner creativity and book sessions.</p>
          <div className="card small">
            <h3>Latest</h3>
            <p>New blog posts and offerings will appear here.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
