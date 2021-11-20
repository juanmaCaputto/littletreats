import classes from "./PackList.module.css";
import Pack from "./Pack";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function PackList(props) {
  return (
    <Container md>
      <Row>
        <Col>
          <ul className={classes.list}>
            {props.packs.map((pack) => (
              <Pack
                key={pack.id}
                id={pack.id}
                image={pack.image}
                title={pack.title}
                price={pack.price}
                description={pack.description}
              />
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default PackList;
