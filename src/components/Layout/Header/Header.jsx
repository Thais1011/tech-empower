import classes from "./Header.module.css";
import HeaderCartButton from "./CartButton";
import MenuButton from "./MenuButton";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="src/assets/beespiscadinha.png"
        alt="logo"
      />
      <h1>Beers!</h1>
      <MenuButton />
      <HeaderCartButton />
      <LoginButton />
    </header>
  );
};

export default Header;
