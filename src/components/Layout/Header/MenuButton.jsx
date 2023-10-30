import { useState } from "react";
import classes from "./MenuButton.module.css";

const MenuButton =() => { 
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const handleMouseEnter = () => {
        setBtnIsHighlighted(true);
      };

      const handleMouseLeave = () => {
        btnIsHighlighted(true);
      };

    return(
        <button 
        className={classes.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        
        <span className={classes.icon}>
        </span>
        <h1> Menu</h1>
        </button>
    )   
}
export default MenuButton;