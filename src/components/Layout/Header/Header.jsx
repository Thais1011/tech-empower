import classes from "./Header.module.css";
import HeaderCartButton from "./CartButton";
import MenuButton from "./MenuButton";
import LoginButton from "./LoginButton";
import CartProvider from "../../../store/CartProvider";

const Header = () => {
  return (
    <header className={classes.header}>
      <CartProvider>
        <img
          className={classes.logo}
          src="src/assets/beespiscadinha.png"
          alt="logo"
        />
        <h1>Beers!</h1>
        <MenuButton />
        <HeaderCartButton />
        <LoginButton />
      </CartProvider>
    </header>
  );
};

export default Header;
