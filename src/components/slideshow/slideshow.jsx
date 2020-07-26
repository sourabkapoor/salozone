import React from 'react';
import { Zoom } from "react-slideshow-image";
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';

import 'react-slideshow-image/dist/styles.css';
import './style.css'

const SlideShow = () => {

  const images = [one, two, three, four];
  
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };

  return (
    <div className="slide-container shadow-5 br4">
      <Zoom {...zoomOutProperties}>
        {images.map((image, index) => (
          <img key={index} alt='slide' src={image} />
        ))}
      </Zoom>
    </div>
  )
}

export default SlideShow;
