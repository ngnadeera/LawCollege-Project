import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider1 from '../../Components/Assests/slider1.jpg' 


const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel controls={false} >
      
        <img
          className="img-fluid custom-height"
          src={Slider1}
          alt="First slide"
          style={{width:"100%" }}
        />
        {/* <Carousel.Caption className="carousel-caption">
          <div className="caption-content">
            <p className="caption-text">
              Sri Lanka Law College
              <br /></p>
              <p className='sub-caption'>
              The Incorporated Council of Legal Education </p>
              <p className='sub-content'>Sri Lanka Law College (SLLC), established in 1874, is the premier legal institution in Sri Lanka, <br/>
providing the only path to becoming an Attorney-at-Law, with highly qualified faculty, <br/>
modern facilities, and practical training for successful legal careers. </p>
          </div>
        </Carousel.Caption> */}
      </Carousel>

       /* <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <div className="caption-content">
            <p>
              Sri Lanka Law College
              <br />
              The Incorporated Council of Legal Education
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption">
          <div className="caption-content">
            <p>
              Sri Lanka Law College
              <br />
              The Incorporated Council of Legal Education
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>  */
  );
};

export default Slider;
