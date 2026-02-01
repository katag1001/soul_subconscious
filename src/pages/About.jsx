import '../pages/pages.css';
import '../pages/about.css';
import BiancaImg from '../assets/Bianca.png';

export default function About() {
  return (
    <>
      <section className="about-bio">
        <div className="container bio-wrapper">
          <div className="bio-image">
            <img src={BiancaImg} alt="Bianca" />
          </div>
          <div className="bio-text">
            <h2>Meet Bianca</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fermentum massa sit amet nulla luctus, ac tincidunt lorem
              facilisis. Cras ut ante sit amet augue dignissim pharetra.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <button className="primary-btn">Contact Bianca</button>
          </div>
        </div>
      </section>

    </>
  )
}
