import { BlogI } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedBlogs = ({ blogs }: { blogs: BlogI[] }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {blogs.map((blog) => (
          <li className="mb-4" key={blog.id}>
            <Link href={`/blog/${blog.id}`} className="wrao-pic-w">
              <Image
                src={blog.img}
                alt="PRODUCT"
                className="img-fluid"
                width={600}
                height={600}
              />

              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                  {blog.title}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
