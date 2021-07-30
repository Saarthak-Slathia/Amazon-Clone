import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide__container">
            <img
              className="slide"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/1500x600_shop-now._CB663404287_.jpg"
              alt=""
            />
          </div>
          <div className="slide__container">
            <img
              className="slide"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/July21/PD/Heros/V1/Nord_CE_NI_1500x600._CB663714298_.jpg"
              alt=""
            />
          </div>
          <div className="slide__container">
            <img
              className="slide"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Primeday/GW/Heros/V1/1_PD_Tallhero_1500x600._CB663423747_.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
