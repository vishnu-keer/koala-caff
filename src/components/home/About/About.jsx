import "./About.scss";

import aboutImage from "../../../assets/images/gallery/about.webp";

import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__wrapper">
          {/* =========================
                LEFT
          ========================= */}

          <div className="about__left">
            <div className="about__image">
              <img src={aboutImage} alt="Koala Caff Interior" />
            </div>
          </div>

          {/* =========================
                RIGHT
          ========================= */}

          <div className="about__right">
            <span className="about__subtitle">ABOUT KOALA CAFF</span>

            <h2 className="about__title">
              Crafted with Passion,
              <br />
              Served with Love.
            </h2>

            <p className="about__description">
              At Koala Caff, every cup tells a story. From freshly brewed coffee
              to handcrafted meals, we create an experience where great taste,
              warm hospitality, and beautiful ambience come together.
            </p>

            <div className="about__features">
              <div className="about__feature">
                <FaCheckCircle />
                <span>Premium Coffee Beans</span>
              </div>

              <div className="about__feature">
                <FaCheckCircle />
                <span>Freshly Prepared Food</span>
              </div>

              <div className="about__feature">
                <FaCheckCircle />
                <span>Cozy Modern Interior</span>
              </div>

              <div className="about__feature">
                <FaCheckCircle />
                <span>Free WiFi & Workspace</span>
              </div>
            </div>

            <button className="about__button">
              <a href="#menu">
                Explore Menu
              </a>
            </button>

            <div className="about__stats">
              <div className="about__stat">
                <h3>10K+</h3>
                <p>Happy Customers</p>
              </div>

              <div className="about__stat">
                <h3>4.9★</h3>
                <p>Google Rating</p>
              </div>

              <div className="about__stat">
                <h3>150+</h3>
                <p>Coffee & Food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
