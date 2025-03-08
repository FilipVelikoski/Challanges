import {
  fetchAllBlogs,
  fetchAllProducts,
  fetchBlogs,
} from "@/app/lib/fetchers";
import PageTitle from "@/components/PageTitle";
import RelatedBlogs from "@/components/RelatedBlogs";
import { BlogI } from "@/interfaces";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

async function fetchData(
  id: string
): Promise<{ blog: BlogI; relatedBlogs: BlogI[] }> {
  const blogRes = await fetch(`http://localhost:5001/blogs/${id}`);
  const blog = await blogRes.json();

  const allBlogs = await fetchAllBlogs();
  const randomNo = Math.floor(Math.random() * (allBlogs.length - 3));

  const relatedBlogs = await fetchBlogs(randomNo);

  return { blog, relatedBlogs };
}

export async function generateStaticParams() {
  const allBlogsRes = await fetch("http://localhost:5001/blogs");
  const allBlogs = await allBlogsRes.json();

  return allBlogs.map((blog: BlogI) => ({
    id: blog.id,
  }));
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { blog, relatedBlogs } = await fetchData(id);
  return (
    <>
      <Head>
        <title>Store - title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={blog.title} />

      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                <div className="wrap-pic-w how-pos5-parent">
                  <Image
                    src={blog.img}
                    alt="IMG-BLOG"
                    width={600}
                    height={600}
                  />
                </div>

                <div className="p-t-32">
                  <span className="flex-w align-items-center flex-m stext-111 cl2 p-b-19">
                    <span className="flex-c-m mr-3 bor7 p-lr-15 trans-04">
                      {blog.category}
                    </span>

                    <span>
                      <span className="cl4">By</span> {blog.author}
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>{blog.date}</span>
                  </span>

                  <h4 className="ltext-109 cl2 p-b-28">{blog.title}</h4>

                  <p className="stext-117 cl6 p-b-26">{blog.first_content}</p>

                  <p className="stext-117 cl6 p-b-26">{blog.second_content}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <RelatedBlogs blogs={relatedBlogs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
