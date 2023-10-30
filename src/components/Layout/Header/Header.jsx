import classes from "./Header.module.css";
import HeaderCartButton from "./CartButton";
import MenuButton from "./MenuButton";


const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <img className={classes.logo} src="src/assets/beespiscadinha.png" alt="logo" />        
        <h1>Pokemons</h1>
        <MenuButton onClick={props.onShowMenu} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </div>
  );
};

export default Header;
