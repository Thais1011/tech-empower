import classes from "./Header.module.css";
import HeaderCartButton from "./CartButton";


const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Bees Brewery</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </div>
  );
};

export default Header;
