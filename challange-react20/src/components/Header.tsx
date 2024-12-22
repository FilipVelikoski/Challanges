import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../public/assets/logo.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <Navbar expand="lg" className="fs-5">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Navbar.Brand href="#" className="mx-4">
            <img src={logo} alt="" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto fw-bold header-nav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="active">
                HOME
              </Nav.Link>
              <Nav.Link href="#action2">BIKES</Nav.Link>
              <Nav.Link href="#">GEAR</Nav.Link>
              <Nav.Link href="#action1">PARTS</Nav.Link>
              <Nav.Link href="#action1">TIRES</Nav.Link>
              <Nav.Link href="#action1">SERVICE-INFO</Nav.Link>
              <Nav.Link href="#action1">CATALOGUES</Nav.Link>
              <Nav.Link href="#action1">CONTACT</Nav.Link>
            </Nav>
            <Form className="d-flex fw-bold mx-4">
              <Nav.Link href="#action1">
                <i className="fas fa-search mx-3"></i>
              </Nav.Link>
              <Nav.Link href="#action1">
                <i className="fas fa-shopping-bag"></i>
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="line"></div>
      <div className="mt-5 mx-4">
        <h1>Bikes</h1>
      </div>
    </>
  );
}
