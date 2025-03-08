"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function FilterBlogs() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [categoryFilter, setCategoryFilter] = useState<string | null>(
    searchParams.get("category") || null
  );
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());

    if (categoryFilter) {
      query.set("category", categoryFilter);
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
  }, [categoryFilter, searchQuery, router]);
  return (
    <div className="col-md-4 col-lg-3 p-b-80">
      <div className="side-menu">
        <form className="bor17 of-hidden pos-relative">
          <input
            className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
            type="text"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />

          <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
            <i className="fa fa-search"></i>
          </button>
        </form>

        <div className="p-t-55">
          <h4 className="mtext-112 cl2 p-b-33">Categories</h4>

          <ul>
            <li className="bor18">
              <button
                className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                  categoryFilter === "fashion" ? "active-blog" : ""
                }`}
                onClick={() => {
                  setCategoryFilter("fashion");
                }}
              >
                Fashion
              </button>
            </li>

            <li className="bor18">
              <button
                className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                  categoryFilter === "Beauty" ? "active-blog" : ""
                }`}
                onClick={() => {
                  setCategoryFilter("Beauty");
                }}
              >
                Beauty
              </button>
            </li>

            <li className="bor18">
              <button
                className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                  categoryFilter === "streetstyle" ? "active-blog" : ""
                }`}
                onClick={() => {
                  setCategoryFilter("streetstyle");
                }}
              >
                Street Style
              </button>
            </li>

            <li className="bor18">
              <button
                className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                  categoryFilter === "lifestyle" ? "active-blog" : ""
                }`}
                onClick={() => {
                  setCategoryFilter("lifestyle");
                }}
              >
                Life Style
              </button>
            </li>

            <li className="bor18">
              <button
                className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                  categoryFilter === "diy" ? "active-blog" : ""
                }`}
                onClick={() => {
                  setCategoryFilter("diy");
                }}
              >
                DIY & Crafts
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
