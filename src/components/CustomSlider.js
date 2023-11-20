import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.scss"

export default class CustomSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-container__item">
              <img src="./img/slide1.avif"/>
            </div>
            <div className="slider-container__item">
                <img src="./img/slide2.avif"/>
            </div>
            <div className="slider-container__item">
                <img src="./img/slide3.avif"/>
            </div>
          </Slider>
        </div>
      );
    }
  }