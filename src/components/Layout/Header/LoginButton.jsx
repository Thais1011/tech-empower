import { useState } from "react";
import classes from "./LoginButton.module.css";

const LoginButton =() => { 
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
        <span>Login</span>
        </button>
    )   
}
export default LoginButton;