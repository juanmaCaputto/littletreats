import { useContext } from "react";
import "bootstrap/dist/css/bootstrap-grid.css";

import classes from "./Pack.module.css";
import PackItemForm from "./PackItemForm";
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
    <li className={classes.pack}>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div
          className={classes.spacer}
        />
        <div className={classes.extraGradient} />
        <Container className={classes.gradient}>
          <Row className={classes.content}>
            <Col
              xs={6}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              xxl={6}
              className={classes.info}
            >
              <h3>{props.title}</h3>
              <div
                className={`${classes.description} d-none d-md-block d-xl-block d-lg-block d-xxl-block`}
              >
                {props.description}
              </div>
              <div className={classes.price}>{price}</div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <PackItemForm onAddToCart={addToCartHandler} id={props.id} />
            </Col>
          </Row>
        </Container>
      </div>
    </li>
  );
};

export default Pack;
