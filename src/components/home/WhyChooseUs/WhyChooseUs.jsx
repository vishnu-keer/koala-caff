import "./WhyChooseUs.scss";

import { FaCoffee, FaWifi, FaParking, FaStar } from "react-icons/fa";

import { MdRestaurant } from "react-icons/md";

import { GiSofa } from "react-icons/gi";

const features = [
  {
    icon: <FaCoffee />,
    title: "Premium Coffee",
    description: "Freshly brewed coffee made with carefully selected beans.",
  },

  {
    icon: <MdRestaurant />,
    title: "Fresh Food",
    description:
      "Prepared daily using fresh ingredients and authentic recipes.",
  },

  {
    icon: <GiSofa />,
    title: "Cozy Ambience",
    description: "Relax, work or spend quality time in our beautiful café.",
  },

  {
    icon: <FaWifi />,
    title: "Free WiFi",
    description: "Fast internet for work, study and casual browsing.",
  },

  {
    icon: <FaParking />,
    title: "Easy Parking",
    description: "Convenient parking space available for every guest.",
  },

  {
    icon: <FaStar />,
    title: "Top Rated",
    description: "Loved by hundreds of happy customers every single day.",
  },
];
const WhyChooseUs = () => {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why__header">
          <span className="why__subtitle">WHY CHOOSE US</span>

          <h2 className="why__title">
            More Than Just
            <br />A Coffee Shop
          </h2>

          <p className="why__description">
            Every cup we serve and every meal we prepare is crafted with passion
            to give you an unforgettable café experience.
          </p>
        </div>

        <div className="why__grid">
          {features.map((feature, index) => (
            <div className="why__card" key={index}>
              <div className="why__icon">{feature.icon}</div>

              <h3 className="why__card-title">{feature.title}</h3>

              <p className="why__card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
