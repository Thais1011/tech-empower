import classes from "./CartItem.module.css";

const CartItem = (props) => {
  console.log("passou aqui");
  return (
    <li className={classes["cart-item"]}>
      <img src={props.image} alt={props.title} />
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`R$ ${props.price}`}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
