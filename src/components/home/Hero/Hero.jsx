import "./Hero.scss";

import heroBg from "../../../assets/images/hero/hero-night.webp";
// import coffeeCup from "../../../assets/images/hero/coffee-cup.webp";
import avatar1 from "../../../assets/images/avatars/avatar-1.svg";
import avatar2 from "../../../assets/images/avatars/avatar-2.svg";
import avatar3 from "../../../assets/images/avatars/avatar-3.svg";
import avatar4 from "../../../assets/images/avatars/avatar-4.svg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img src={heroBg} alt="Koala Caff Jaipur" className="hero__bg" />
      {/* Overlay */}
      <div className="hero__overlay"></div>

      <div className="container">
        <div className="hero__wrapper">
          {/* ================= LEFT ================= */}

          <div className="hero__left">
            <span className="hero__subtitle">WELCOME TO</span>

            <h1 className="hero__title">
              <span className="hero__title-line">KOALA</span>

              <span className="hero__title-line">CAFF</span>
            </h1>

            <h2 className="hero__tagline">BREW • BITE • BELONG</h2>

            <p className="hero__description">
              Experience handcrafted coffee, delicious food, and unforgettable
              moments in Jaipur's premium café.
            </p>

            <div className="hero__buttons">
              <a href="#menu" className="hero__primary">
                Explore Menu
              </a>

              <a href="#contact" className="hero__secondary">
                Book a Table
              </a>
            </div>

            <div className="hero__customers">
              <div className="hero__avatars">
                <img src={avatar1} alt="Customer 1" className="hero__avatar" />
                <img src={avatar2} alt="Customer 2" className="hero__avatar" />
                <img src={avatar3} alt="Customer 3" className="hero__avatar" />
                <img src={avatar4} alt="Customer 4" className="hero__avatar" />
              </div>

              <div className="hero__customer-content">
                <div className="hero__stars">⭐⭐⭐⭐⭐</div>

                <h4>10K+ Happy Customers</h4>

                <p>Loved by coffee lovers in Jaipur</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="hero__right">
            <div className="hero__glow"></div>

            {/* Coffee PNG later */}

            {/*
            <img
                src={coffeeCup}
                alt="Coffee Cup"
                className="hero__cup"
            />
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
