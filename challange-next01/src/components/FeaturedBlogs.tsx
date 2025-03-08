import { BlogI } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogProps = {
  blogs: BlogI[];
};
const FeaturedBlogs = ({ blogs }: BlogProps) => {
  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1 font-weight-bold">
            Our Blogs
          </h3>
        </div>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-sm-6 col-md-4 p-b-40" key={blog.id}>
              <Link className="blog-item" href={`/blog/${blog.id}`}>
                <div className="hov-img0">
                  <Image
                    src={blog.img}
                    alt="IMG-BLOG"
                    className="img-fluid"
                    width={600}
                    height={600}
                  />
                </div>

                <div className="p-t-15">
                  <div className="stext-107 flex-w p-b-14">
                    <span className="m-r-3">
                      <span className="cl4">By</span>

                      <span className="cl5">{blog.author}</span>
                    </span>

                    <span>
                      <span className="cl4">on</span>

                      <span className="cl5 ml-1">{blog.date}</span>
                    </span>
                  </div>

                  <h4 className="p-b-12">
                    <div className="mtext-101 cl2 hov-cl1 trans-04 font-weight-bold">
                      {blog.title}
                    </div>
                  </h4>

                  <p className="stext-108 cl6">{blog.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
