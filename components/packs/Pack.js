import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap-grid.css";
import CSSTransition from "react-transition-group/CSSTransition";

import classes from "./Pack.module.css";
import PackItemForm from "./PackItemForm";
import CartContext from "../../store/cart-context";
import { Container, Row, Col } from "react-bootstrap";
import infoIcon from "../../images/info-icon.png";

const Pack = (props) => {
  const [showBlock, setShowBlock] = useState(false);
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

  const showInfoHandler = () => {
    setShowBlock(true);
    console.log("entrando");
  };

  const hideInfoHandler = () => {
    setShowBlock(false);
  };

  return (
    <li className={classes.pack}>
      <CSSTransition
        in={showBlock}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: classes.whiteBackgroundOpen,
          exit: "",
          exitActive: classes.whiteBackgroundClosed,
        }}
      >
        <div className={classes.whiteBackground} onClick={hideInfoHandler}>
          {props.description}
        </div>
      </CSSTransition>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div className={classes.spacer}>
          <button className={classes.infoIcon} onClick={showInfoHandler}>
            <img src={infoIcon} alt="description" />
          </button>
        </div>
        <div className={classes.extraGradient} />
        <Container className={classes.gradient}>
          <Row className={classes.content}>
            <Col
              xs={4}
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
            <Col xs={8} sm={6} md={6} lg={6} xl={6} xxl={6}>
              <PackItemForm onAddToCart={addToCartHandler} id={props.id} />
            </Col>
          </Row>
        </Container>
      </div>
    </li>
  );
};

export default Pack;
