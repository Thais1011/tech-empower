import { useState } from "react";
import classes from "./MenuButton.module.css";

//preciso estilizar melhor o botão quando aberto!

const MenuButton =() => { 
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleMouseEnter = () => {
        setBtnIsHighlighted(true);
      };

      const handleMouseLeave = () => {
        btnIsHighlighted(true);
      };

    const handleButtonClick = () => {
      setShowMenu( (prevState) => !prevState);
    }

    return(
      <div className={classes.container}>
        <button 
        className={classes.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleButtonClick}
        >
        
        <span className={classes.icon}>
        </span>
        <span>Menu</span>
        </button>
        {showMenu && (
          <div className={classes.menu}>
            <ul>
              <li>See More</li>
              <li>Contact Us</li>
              <li>Option 3</li>
            </ul>
          </div>
)}
      </div>
      )   
}
export default MenuButton;