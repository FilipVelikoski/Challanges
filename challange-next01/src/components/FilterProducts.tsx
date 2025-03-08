"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function FilterProducts() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [genderFilter, setGenderFilter] = useState(
    searchParams.get("gender") || null
  );
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());

    if (genderFilter) {
      query.set("gender", genderFilter);
    } else {
      query.delete("gender");
    }

    if (searchQuery) {
      query.set("q", searchQuery);
    } else {
      query.delete("q");
    }

    const newUrl = `?${query.toString()}`;

    if (window.location.search !== newUrl) {
      router.push(newUrl);
    }
  }, [genderFilter, searchQuery, router]);

  return (
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            !genderFilter && !searchQuery ? "how-active1" : ""
          }`}
          onClick={() => {
            setGenderFilter(null);
            setSearchQuery("");
          }}
        >
          All Products
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            genderFilter === "women" ? "how-active1" : ""
          }`}
          onClick={() => setGenderFilter("women")}
        >
          Women
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            genderFilter === "man" ? "how-active1" : ""
          }`}
          onClick={() => setGenderFilter("man")}
        >
          Men
        </button>

        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            searchQuery === "belt" ? "how-active1" : ""
          }`}
          onClick={() => {
            setSearchQuery("belt");
          }}
        >
          Belt
        </button>
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            searchQuery === "shoe" ? "how-active1" : ""
          }`}
          onClick={() => {
            setSearchQuery("shoe");
          }}
        >
          Shoes
        </button>
        <button
          className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
            searchQuery === "watch" ? "how-active1" : ""
          }`}
          onClick={() => {
            setSearchQuery("watch");
          }}
        >
          Watches
        </button>
      </div>

      <div className="flex-w flex-c-m m-tb-10">
        <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
          <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
          Search
        </div>
      </div>

      {/* Search */}
      <div className="panel-search w-full p-t-10 p-b-15">
        <div className="bor8 dis-flex p-l-15">
          <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
            <i className="fa fa-search"></i>
          </button>

          <input
            className="mtext-107 cl2 size-114 plh2 p-r-15"
            type="text"
            name="search-product"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
