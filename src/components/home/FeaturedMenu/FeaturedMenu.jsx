import { useState } from "react";
import "./FeaturedMenu.scss";

import { menuData } from "../../../data/menuData";

const tabs = ["Coffee", "Drinks", "Food", "Desserts"];

const FeaturedMenu = () => {
  const [activeTab, setActiveTab] = useState("Coffee");

  return (
    <section className="featured-menu" id="menu">
      <div className="container">
        {/* ===========================
                HEADER
        =========================== */}

        <div className="featured-menu__header">
          <span className="featured-menu__subtitle">OUR SIGNATURE MENU</span>

          <h2 className="featured-menu__title">
            Crafted Fresh.
            <br />
            Served with Love.
          </h2>

          <p className="featured-menu__description">
            From handcrafted coffees to delicious café favourites, every item is
            prepared using premium ingredients and served with passion.
          </p>
        </div>

        {/* ===========================
                  TABS
        =========================== */}

        <div className="featured-menu__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`featured-menu__tab ${
                activeTab === tab ? "active" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ===========================
                MENU GRID
        =========================== */}

        <div className="featured-menu__grid">
          {menuData[activeTab].map((item) => (
            <div className="featured-menu__card" key={item.id}>
              <div className="featured-menu__image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="featured-menu__content">
                <h3 className="featured-menu__name">{item.title}</h3>

                <p className="featured-menu__text">{item.description}</p>

                <div className="featured-menu__bottom">
                  <span className="featured-menu__price">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===========================
                FOOTER
        =========================== */}
      </div>
    </section>
  );
};

export default FeaturedMenu;
