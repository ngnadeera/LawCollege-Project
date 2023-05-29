import React from 'react';
import './MainCaption.css'
import SliderButton from './SliderButton';


const MainCaption = () => {
    return(
        
    <div className="caption-content">
        <p className="main">
            <p className="caption-text">
              Sri Lanka Law College
              <br /></p>
              <p className='sub-caption'>
              The Incorporated Council of Legal Education </p>
              <p className='sub-content'>Sri Lanka Law College (SLLC), established in 1874, is the premier legal institution in Sri Lanka, <br/>
providing the only path to becoming an Attorney-at-Law, with highly qualified faculty, <br/>
modern facilities, and practical training for successful legal careers. </p></p>

        <div className="button">
            <SliderButton /> 
        </div>
          </div>
    );
}

export default MainCaption;