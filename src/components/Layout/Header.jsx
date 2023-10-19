import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import ambev from "../../assets/ambev.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bees Brewery</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={ambev}
          alt="Between the earth and the sky, there is only one beer."
        />
      </div>
    </Fragment>
  );
};

export default Header;
