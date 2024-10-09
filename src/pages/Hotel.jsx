import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Hotel.css'; 

const Hotel = () => {
    return (
        <div>
        <title>Web Design Mastery | WDM&amp;Co</title>
        <header className="section__container header__container">
          <div className="header__image__container">
            <div className="header__content">
              <h1>Flight Canceled or Delayed?</h1>
              <p>Find Your Perfect Stay Close to the Airport – Easy Bookings for Unexpected Delays!"</p>
            </div>
          </div>
        </header>
        <section className="section__container popular__container">
          <h2 className="section__header">Hotels Nearby</h2>
          <div className="popular__grid">
            <div className="popular__card">
              <img src="./src/assets/remaco.jpg" alt="popular hotel" />
              <div className="popular__content">
                <div className="popular__card__header">
                  <h4>Remaco Hotel</h4>
                  <h4>$120</h4>
                </div>
                <p>Minuwangoda</p>
              </div>
            </div>
            <div className="popular__card">
              <img src="./src/assets/tamarind tree.jpg" alt="popular hotel" />
              <div className="popular__content">
                <div className="popular__card__header">
                  <h4>Hotel Tamarind Tree</h4>
                  <h4>$200</h4>
                </div>
                <p>Andiambalama</p>
              </div>
            </div>
            <div className="popular__card">
              <img src="./src/assets/araliya lagon.jpg" alt="popular hotel" />
              <div className="popular__content">
                <div className="popular__card__header">
                  <h4>Araliya Lagoon Park Resort</h4>
                  <h4>$150</h4>
                </div>
                <p>Negombo</p>
              </div>
            </div>
            <div className="popular__card">
              <img src="./src/assets/cinnamon airport residencies.jpg" alt="popular hotel" />
              <div className="popular__content">
                <div className="popular__card__header">
                  <h4>Cinnamon Airport Residencies</h4>
                  <h4>$180</h4>
                </div>
                <p>Katunayaka</p>
              </div>
            </div>
            <div className="popular__card">
              <img src="./src/assets/Ramada.jpg" alt="popular hotel" />
              <div className="popular__content">
                <div className="popular__card__header">
                  <h4>Ramada by Wyndham Hotel</h4>
                  <h4>$160</h4>
                </div>
                <p>Katunayake</p>
              </div>
            </div>
            <div className="popular__card">
              <img src="./src/assets/airport green.jpg" alt="popular hotel" />
              <div className="popular__content">
                <div className="popular__card__header">
                  <h4>Airport Green View Resort</h4>
                  <h4>$150</h4>
                </div>
                <p>Katunayaka</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    );
};

export default Hotel;
