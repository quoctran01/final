import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; 

export default function Slider() { 
  return ( 
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={'https://res.cloudinary.com/uploadimgvvv/image/upload/v1677341859/fxbbgsatycizvuys7z4g.png'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500} className=''>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677341859/fxbbgsatycizvuys7z4g.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677341859/fxbbgsatycizvuys7z4g.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}