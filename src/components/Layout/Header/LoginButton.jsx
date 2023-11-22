import { useState } from "react";
import classes from "./LoginButton.module.css";
import { Link } from "react-router-dom";

//Ainda não está funcional!

const LoginButton = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const handleMouseEnter = () => {
    setBtnIsHighlighted(true);
  };

  const handleMouseLeave = () => {
    btnIsHighlighted(true);
  };

  return (
    <Link to="/login">
      <button
        className={classes.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={classes.icon}></span>
        <span>Login</span>
      </button>
    </Link>
  );
};
export default LoginButton;
