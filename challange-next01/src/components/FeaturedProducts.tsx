import React from "react";
import ProductItem from "./ProductItem";
import { FeaturedProdI } from "@/interfaces";

type FeaturedProdProps = {
  featuredProdData: FeaturedProdI[];
};

const FeaturedProducts = ({ featuredProdData }: FeaturedProdProps) => {
  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1 font-weight-bold">
            Store Overview
          </h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex">
                  {featuredProdData.map((product) => (
                    <ProductItem {...product} key={product.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
