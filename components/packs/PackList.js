import classes from "./PackList.module.css";
import Pack from "./Pack";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function PackList(props) {
  return (
    <Container>
      <Row>
        <Col className={classes.columna}>
          <ul className={classes.list}>
            <li>
              <div className={classes.title}>𝓝𝓾𝓮𝓼𝓽𝓻𝓪𝓼 𝓒𝓸𝓸𝓴𝓲𝓮𝓼</div>
            </li>
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
