import { useState } from "react";
import classes from "./AboutUs.module.css";

const AboutUs =() => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);


    const handleMouseEnter = () => {
        setBtnIsHighlighted(true);
      };

      const handleMouseLeave = () => {
        btnIsHighlighted(true);
      };

      const handleButtonClick = () => {
        setShowAboutUs( (prevState) => !prevState);
      }

    return(
<div>
        <button 
        className={classes.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleButtonClick}
        >

        <span>About Us</span>
        </button>
        {showAboutUs && (
          <div className={classes.address}>
            <ul>
              <p>We are at Rod. Heitor Penteado, 5421</p>
              <p>Campinas - SP</p>
              <p>Brazil</p>
            </ul>
          </div>
)}

</div>
        
        
    )   
}

export default AboutUs;