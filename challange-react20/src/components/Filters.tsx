import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import { Products } from "../data/ProductsTypes";
import SideBar from "./SideBar";

export default function Filters() {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const filterProductsByGender = (gender: string | null) => {
    setActiveFilter(gender || "ALL");
    if (gender === null) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((bike) => bike.gender === gender));
      setActiveFilter(gender);
    }
  };

  const filterProductsByBrand = (brand: string | null) => {
    setActiveFilter(brand || "ALL");
    if (brand === null) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((bike) => bike.brand === brand));
      setActiveFilter(brand);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md="3">
          <SideBar
            products={products}
            filterProductsByGender={filterProductsByGender}
            filterProductsByBrand={filterProductsByBrand}
            activeFilter={activeFilter}
          />
        </Col>
        <Col md="9">
          <div className="bikes-container">
            <Row xs={1} md={3} className="g-4">
              {filteredProducts.map((product, idx) => (
                <Cards key={idx} {...product} />
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
