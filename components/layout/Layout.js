import React, { useState, Fragment } from "react";

import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Cart from "../Cart/Cart";

function Layout(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <div className={classes.background}>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <MainNavigation onShowCart={showCartHandler} />
        <main className={classes.main}>{props.children}</main>
      </div>
    </Fragment>
  );
}

export default Layout;
