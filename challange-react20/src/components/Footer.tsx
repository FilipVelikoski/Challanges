import { Card, CardBody, CardText, CardTitle, Col, Row } from "react-bootstrap";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      <Row md={4} className="mt-5">
        <Col>
          <Card className="border-0 bg-transparent  mt-5">
            <CardBody>
              <CardTitle>Social Share</CardTitle>
              <div className="social-icons mt-5">
                <a href="https://facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 bg-transparent mt-5">
            <CardBody>
              <CardTitle>Event info</CardTitle>
              <CardText className=" mt-4 footer-link">Enter Now</CardText>
              <CardText className="card-text footer-link">Event info</CardText>
              <CardText className="card-text footer-link">Coruse Maps</CardText>
              <CardText className="card-text footer-link">Race Pack</CardText>
              <CardText className="card-text footer-link">Results</CardText>
              <CardText className="card-text footer-link">FAQs</CardText>
              <CardText className="card-text footer-link">
                Am I Registered
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 bg-transparent mt-5">
            <CardBody>
              <CardTitle>Registration</CardTitle>
              <CardText className=" mt-4 footer-link">Volunteers </CardText>
              <CardText className="card-text footer-link">Gallery</CardText>
              <CardText className="card-text footer-link">Press</CardText>
              <CardText className="card-text footer-link">Results</CardText>
              <CardText className="card-text footer-link">
                Privacy Policy
              </CardText>
              <CardText className="card-text footer-link">
                Service Plus
              </CardText>
              <CardText className="card-text footer-link">Contacts</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 bg-transparent mt-5">
            <CardBody>
              <CardTitle>Schedule</CardTitle>
              <CardText className=" mt-4 footer-link">Gallery </CardText>
              <CardText className="card-text footer-link">About</CardText>
              <CardText className="card-text footer-link">Videos</CardText>
              <CardText className="card-text footer-link">Results</CardText>
              <CardText className="card-text footer-link">FAQs</CardText>
              <CardText className="card-text footer-link">Results</CardText>
              <CardText className="card-text footer-link">Volunteers</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </footer>
  );
}
