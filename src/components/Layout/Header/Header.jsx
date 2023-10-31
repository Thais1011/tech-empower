import classes from "./Header.module.css";
import HeaderCartButton from "./CartButton";
import MenuButton from "./MenuButton";
import LoginButton from "./LoginButton";
import CartProvider from "../../../store/CartProvider";
import { useState } from "react";
import Cart from "../../../pages/Cart/Cart";
import CartButton from "./CartButton";


const Header = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <header className={classes.header}>
      <CartProvider>
      {cartIsShown && <CartButton onClose={hideCartHandler} />}      
        <img className={classes.logo} src="src/assets/beespiscadinha.png" alt="logo" />        
        <h1>Beers!</h1>
        <MenuButton />
        <HeaderCartButton onShowCart={showCartHandler} />
        <LoginButton/>
      </CartProvider>
       </header>
  );
};

export default Header;
