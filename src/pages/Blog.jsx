import '../pages/pages.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Blog() {
  return (
    <>
      <section className="page hero blog-page">
        <div className="container">

          {/* Blog Intro */}
          <div className="blog-intro">
            <h1>Reflections & Insights</h1>
            <p className="blog-subtitle">
              Gentle reflections on healing, growth, and the subconscious—
              written to be read slowly.
            </p>
          </div>

          {/* Featured Post */}
          <article className="blog-feature">
            <h2>The Power of the Subconscious Mind</h2>
            <p className="blog-meta">Mindfulness · Healing</p>
            <p className="blog-excerpt">
              The subconscious mind quietly shapes our thoughts, emotions,
              and behaviors. By learning to listen inward, we begin to create
              space for gentle, lasting change.
            </p>
            <Link to="/blog/power-of-the-subconscious-mind" className="read-more">Read more →</Link>
          </article>

          {/* Blog List */}
          <div className="blog-list">

            <article className="blog-item">
              <h3>Creating Safety Within Yourself</h3>
              <p className="blog-meta">Self-Compassion</p>
              <p className="blog-excerpt">
                Emotional safety isn’t something we find outside of ourselves—
                it’s something we learn to cultivate within.
              </p>
              <Link to="/blog/creating-safety-within-yourself" className="read-more">Read more →</Link>
            </article>

            <article className="blog-item">
              <h3>Healing Is Not a Linear Journey</h3>
              <p className="blog-meta">Growth & Awareness</p>
              <p className="blog-excerpt">
                Healing unfolds in cycles, not straight lines. Understanding
                this can help us meet ourselves with more patience.
              </p>
              <Link to="/blog/healing-is-not-linear-journey" className="read-more">Read more →</Link>
            </article>

          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
