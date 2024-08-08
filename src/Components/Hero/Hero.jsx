import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        
        <div>
          <div className="hero-hand-icon">
            
           
          </div>  
          <div className="hero-hand-video">
           <video width="320" height="240" autoplay>
           <source src="frontend\src\Components\Assets\videoplayback.mp4" type="video/mp4" alt="">
           </source>  
           </video>
       </div>
        </div>
        
       
      </div>
      
    </div>
  );
};


export default Hero;
