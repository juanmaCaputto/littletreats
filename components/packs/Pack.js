import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "./Pack.module.css";
import PackItemForm from "../Meals/MealItem/PackItemForm";
import CartContext from "../../store/cart-context";
import { Container, Row, Col } from "react-bootstrap";

const Pack = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      description: props.description,
    });
  };

  return (
    <li className={classes.meal}>
      <Container>
        <Row>
          <Col sm md lg xl xxl={4}>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
          </Col>
          <Col sm md lg xl xxl={2} className={classes.info}>
            <h3>{props.title}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
          </Col>
          <Col sm md lg xl xxl={4} />
          <Col sm md lg xl xxl={2}>
            <PackItemForm onAddToCart={addToCartHandler} id={props.id} />
          </Col>
        </Row>
      </Container>
    </li>
  );
};

export default Pack;
