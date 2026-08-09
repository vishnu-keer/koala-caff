import "./Gallery.scss";

import gallery1 from "../../../assets/images/gallery/gallery-1.webp";
import gallery2 from "../../../assets/images/gallery/gallery-2.webp";
import gallery3 from "../../../assets/images/gallery/gallery-3.webp";
import gallery4 from "../../../assets/images/gallery/gallery-4.webp";
import gallery5 from "../../../assets/images/gallery/gallery-5.webp";
import gallery6 from "../../../assets/images/gallery/gallery-6.webp";

import gallery7 from "../../../assets/images/gallery/gallery-7.webp";
import gallery8 from "../../../assets/images/gallery/gallery-8.webp";
import gallery9 from "../../../assets/images/gallery/gallery-9.webp";
import gallery10 from "../../../assets/images/gallery/gallery-10.webp";
import gallery11 from "../../../assets/images/gallery/gallery-11.webp";
import gallery12 from "../../../assets/images/gallery/gallery-12.webp";

const firstRow = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const secondRow = [
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

const Gallery = () => {
  return (
    <section
      className="gallery"
      id="gallery"
    >
      <div className="container">

        {/* ===========================
                HEADER
        =========================== */}

        <div className="gallery__header">

          <span className="gallery__subtitle">
            OUR GALLERY
          </span>

          <h2 className="gallery__title">
            A Place Where Every
            <br />
            Corner Feels Special
          </h2>

          <p className="gallery__description">
            Experience the warm ambience,
            handcrafted coffee and premium
            interiors of Koala Caff.
          </p>

        </div>

                {/* ===========================
                ROW 1
        =========================== */}

        <div className="gallery__slider">

          <div className="gallery__track gallery__track--left">

            {firstRow.map((image, index) => (

              <div
                className="gallery__item"
                key={`left-${index}`}
              >

                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                />

              </div>

            ))}

          </div>

        </div>

        {/* ===========================
                ROW 2
        =========================== */}

        <div className="gallery__slider">

          <div className="gallery__track gallery__track--right">

            {secondRow.map((image, index) => (

              <div
                className="gallery__item"
                key={`right-${index}`}
              >

                <img
                  src={image}
                  alt={`Gallery ${index + 7}`}
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Gallery;