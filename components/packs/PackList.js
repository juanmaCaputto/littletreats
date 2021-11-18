import classes from "./PackList.module.css";
import Pack from "./Pack";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

function PackList(props) {
  return (
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
  );
}

export default PackList;
