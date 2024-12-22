import { Card, CardBody, CardTitle } from "react-bootstrap";
import { Products } from "../data/ProductsTypes";

type ProductsProps = {
  products: Products[];
  filterProductsByGender: (gender: string | null) => void;
  filterProductsByBrand: (brand: string | null) => void;
  activeFilter: string;
};

export default function SideBar({
  products,
  filterProductsByBrand,
  filterProductsByGender,
  activeFilter,
}: ProductsProps) {
  const maleBikesCount = products.filter(
    (bike) => bike.gender === "MALE"
  ).length;

  const femaleBikes = products.filter(
    (bike) => bike.gender === "FEMALE"
  ).length;

  const getBikeCountByBrand = (brand: string) => {
    return products.filter((bike) => bike.brand === brand).length;
  };

  return (
    <div className="filter-sidebar">
      <Card className="mb-3 border-0 bg-transparent" style={{ width: "100%" }}>
        <CardBody>
          <CardTitle>Filter by:</CardTitle>
          <div className="wrapper mt-4">
            <div
              className={`hover-group ${
                activeFilter === "ALL" ? "active-filter" : ""
              }`}
              id="showAll"
              onClick={() => filterProductsByGender(null)}
            >
              <p className="show-all">Show all</p>
              <p className="number-bikes">{products.length}</p>
            </div>
          </div>
        </CardBody>
        <CardBody>
          <CardTitle>Gender</CardTitle>
          <div className="wrapper mt-4">
            <div
              className={`hover-group ${
                activeFilter === "MALE" ? "active-filter" : ""
              }`}
              id="male"
              onClick={() => filterProductsByGender("MALE")}
            >
              <p>Male</p>
              <p className="number-bikes">{maleBikesCount}</p>
            </div>
            <div
              className={`hover-group ${
                activeFilter === "FEMALE" ? "active-filter" : ""
              }`}
              id="female"
              onClick={() => filterProductsByGender("FEMALE")}
            >
              <p>Female</p>
              <p className="number-bikes">{femaleBikes}</p>
            </div>
          </div>
        </CardBody>
        <CardBody>
          <CardTitle>Brand</CardTitle>
          <div className="wrapper mt-4">
            {[
              "LE GRAND BIKES",
              "KROSS",
              "EXPLORER",
              "VISITOR",
              "PONY",
              "FORCE",
              "E-BIKES",
              "IDEAL",
            ].map((brand) => (
              <div
                key={brand}
                className={`hover-group ${
                  activeFilter === brand ? "active-filter" : ""
                }`}
                onClick={() => filterProductsByBrand(brand)}
              >
                <p>{brand}</p>
                <p className="number-bikes">{getBikeCountByBrand(brand)}</p>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
