import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./MainLogo.module.css";
import { Row, Col, Container } from "react-bootstrap";
import logo from "../../images/logo-little.png";

const MainLogo = () => {
  return (
    <Container>
      <Row>
        <Col className={classes.logo}>
          <img src={logo} alt="Logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLogo;
