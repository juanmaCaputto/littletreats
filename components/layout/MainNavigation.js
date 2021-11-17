import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";
import { Container, Row, Col } from "react-bootstrap";

const MainNavigation = (props) => {
  return (
    <header>
      <Row className={classes.header}>
        <Col className={classes.logo} sm md lg xl xxl={1}></Col>
        <Col sm md lg xl xxl={8}>
          <nav>
            <ul>
              <li>
                <Link href="/">Cookies!</Link>
              </li>
              <li>
                <Link href="/new-pack">＋ Cookie!</Link>
              </li>
            </ul>
          </nav>
        </Col>
        <Col sm md lg xl xxl={3}>
          <HeaderCartButton onClick={props.onShowCart} />
        </Col>
      </Row>
    </header>
  );
};

export default MainNavigation;
