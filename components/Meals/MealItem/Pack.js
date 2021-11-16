import { useContext } from 'react'

import classes from "./Pack.module.css";
import PackItemForm from "./PackItemForm";
import CartContext from '../../../store/cart-context';

const Pack = (props) => {
  const cartCtx = useContext(CartContext)

  const price = `$${props.price}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      description: props.description
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <PackItemForm onAddToCart={addToCartHandler} id={props.id}/>
      </div>
    </li>
  );
};

export default Pack;
