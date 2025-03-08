import React from "react";
import ProductItem from "./ProductItem";
import { ProductI } from "@/interfaces";

const RelatedProducts = ({ products }: { products: ProductI[] }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center font-weight-bold">
            Related Products
          </h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {products.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
