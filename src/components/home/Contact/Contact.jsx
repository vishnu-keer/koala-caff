import "./Contact.scss";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* ===========================
                HEADER
        =========================== */}

        <div className="contact__header">
          <span className="contact__subtitle">CONTACT KOALA CAFF</span>

          <h2 className="contact__title">
            Let's Brew Something
            <br />
            Amazing Together
          </h2>

          <p className="contact__description">
            Whether you're planning a casual coffee date, a family gathering, or
            simply craving your favourite brew, we're always here to welcome
            you.
          </p>
        </div>

        {/* ===========================
        CONTACT CARDS
=========================== */}

        <div className="contact__cards">
          <div className="contact__card">
            <span className="contact__number">01</span>

            <div className="contact__icon">
              <FaMapMarkerAlt />
            </div>

            <h3>Visit Us</h3>

            <p>
              Koala Caff
              <br />
              Jaipur, Rajasthan
            </p>
          </div>

          <div className="contact__card">
            <span className="contact__number">02</span>

            <div className="contact__icon">
              <FaPhoneAlt />
            </div>

            <h3>Call Us</h3>

            <a href="tel:+919001697576">+91 90016 97576</a>
          </div>

          <div className="contact__card">
            <span className="contact__number">03</span>

            <div className="contact__icon">
              <FaEnvelope />
            </div>

            <h3>Email Us</h3>

            <a href="mailto:koalacaff@gmail.com">koalacaff@gmail.com</a>
          </div>

          <div className="contact__card">
            <span className="contact__number">04</span>

            <div className="contact__icon">
              <FaClock />
            </div>

            <h3>Opening Hours</h3>

            <p>
              Everyday
              <br />
              9:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        {/* ===========================
                CONTENT
        =========================== */}

        <div className="contact__wrapper">
          {/* LEFT */}

          <div className="contact__form">
            <h3 className="contact__form-title">Reserve Your Table</h3>

            <p className="contact__form-text">
              Fill out the form below and our team will get back to you shortly.
            </p>

            <form>
              <div className="contact__row">
                <input type="text" placeholder="Full Name" />

                <input type="tel" placeholder="Phone Number" />
              </div>

              <div className="contact__row">
                <input type="email" placeholder="Email Address" />

                <input type="number" placeholder="Guests" />
              </div>

              <div className="contact__row">
                <input type="date" />

                <input type="time" />
              </div>

              <textarea rows="7" placeholder="Special Request..."></textarea>

              <button className="contact__button" type="submit">
                Reserve Table
              </button>
            </form>
          </div>

          {/* ===========================
                  RIGHT
          =========================== */}

          <div className="contact__right">
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps?q=KOALA+CAFF+Jaipur&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Koala Caff Location"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/place/KOALA+CAFF/@27.459817,73.2890615,7z/data=!4m10!1m2!2m1!1skoala+cafe!3m6!1s0x396dc970f6b25dcf:0x5b62344db75de96!8m2!3d26.8043098!4d75.8103023!15sCgprb2FsYSBjYWZlWgwiCmtvYWxhIGNhZmWSAQRjYWZl4AEA!16s%2Fg%2F11zcnxwdb0?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__direction"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* ===========================
                BOTTOM CTA
        =========================== */}

        <div className="contact__cta">
          <h3>Need Instant Assistance?</h3>

          <p>
            We're just one message away. Reach out anytime for reservations,
            enquiries or directions.
          </p>

          <div className="contact__actions">
            <a
              href="https://wa.me/919001697576"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
            >
              WhatsApp Us
            </a>

            <a href="tel:+919001697576" className="contact__call">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
