"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryPicker: React.FC = () => {
  const router = useRouter();

  const handleCategoryClick = (gender: string) => {
    router.push(`/shop?gender=${gender}`);
  };
  return (
    <div className="sec-banner bg0">
      <div className="row no-gutters">
        <div className="col-6 m-lr-auto respon4">
          <div className="block1 wrap-pic-w">
            <Image
              src="/images/banner-04.jpg"
              alt="IMG-BANNER"
              width={600}
              height={600}
            />

            <button
              className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              onClick={() => handleCategoryClick("women")}
            >
              <div className="block1-txt-child1 flex-col-l">
                <span className="block1-name ltext-102 trans-04 p-b-8 font-weight-bold">
                  Woman
                </span>

                <span className="block1-info stext-102 trans-04">
                  Spring 2022
                </span>
              </div>

              <div className="block1-txt-child2 p-b-4 trans-05">
                <div className="block1-link stext-101 cl0 trans-09">
                  Shop Now
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="col-6 m-lr-auto respon4">
          <div className="block1 wrap-pic-w">
            <Image
              src="/images/banner-05.jpg"
              alt="IMG-BANNER"
              width={600}
              height={600}
            />

            <button
              className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              onClick={() => handleCategoryClick("man")}
            >
              <div className="block1-txt-child1 flex-col-l">
                <span className="block1-name ltext-102 trans-04 p-b-8 font-weight-bold">
                  Man
                </span>

                <span className="block1-info stext-102 trans-04">
                  Spring 2022
                </span>
              </div>

              <div className="block1-txt-child2 p-b-4 trans-05">
                <div className="block1-link stext-101 cl0 trans-09">
                  Shop Now
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPicker;
