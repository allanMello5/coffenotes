import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src='/videos/backgroundvideo.mp4' type="video/mp4" autoPlay loop muted></video>
           <h1>TAKE A FRESH <span>COFFE</span>  IN THE MORNING</h1>
        <p>What makes coffe special?</p>  
           <div className='hero-btns'>
               <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
               <i className="fa fa-file-text" aria-hidden="true"></i>READ ARTICLES

                </Button>
               <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                  SHOP<i className='fa fa-cart-plus'/>
                </Button>

           </div>



        </div>

    )
    
}
export default HeroSection