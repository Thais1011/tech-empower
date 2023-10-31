import CartIcon from "../../../pages/Cart/CartIcon";
import classes from "./CartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import Cart from "../../../pages/Cart/Cart";

//Ainda não está funcional!

const CartButton = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
  }, [cartCtx.items]);
  return (
    <button className={btnClasses} onClick={<Cart/>}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
