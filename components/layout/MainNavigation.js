import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";
import { Container, Row, Col } from "react-bootstrap";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <Container>
        <Row>
          {/* <Col className={classes.logo} sm md lg xl xxl={1}></Col> */}
          {/* <nav>
            <ul>
              <li>
                <Link href="/">Cookies!</Link>
              </li>
              <li>
                <Link href="/new-pack">＋ Cookie!</Link>
              </li>
            </ul>
          </nav> */}
          {/* </Col> */}
          <Col sm={9} md={9} lg={9} xl={10} xxl={10} />
          <Col sm={3} md={3} lg={3} xl={2} xxl={2}>
            <HeaderCartButton onClick={props.onShowCart} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default MainNavigation;
