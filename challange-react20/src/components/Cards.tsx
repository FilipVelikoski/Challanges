import { Col, Row, Card, CardBody, CardTitle, CardText } from "react-bootstrap";
import { Products } from "../data/ProductsTypes";

export default function Cards({ name, price, image }: Products) {
  return (
    <Row>
      <Col className="mb-4">
        <Card style={{ width: "100%" }} className="h-100">
          <img src={`/assets/${image}.png`} alt={name} className="bike-img" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{price}</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
