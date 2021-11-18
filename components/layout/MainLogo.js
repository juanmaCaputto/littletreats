import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./MainLogo.module.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../images/logo-little.png";

const MainLogo = () => {
  return (
    <Row>
      <Col className={classes.logo}>
        <img src={logo} alt="Logo" />
      </Col>
    </Row>
  );
};

export default MainLogo;
