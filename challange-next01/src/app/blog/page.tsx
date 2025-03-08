import type { NextPage } from "next";
import Head from "next/head";
import BlogItem from "../../components/BlogItem";
import PageTitle from "../../components/PageTitle";
import { BlogI } from "@/interfaces";
import FilterBlogs from "@/components/FilterBlogs";

async function fetchBlogs(
  category?: string,
  search?: string
): Promise<BlogI[] | undefined> {
  try {
    const url = new URL("http://localhost:5001/blogs");

    if (category) url.searchParams.append("category_like", category);
    if (search) url.searchParams.append("q", search);

    const res = await fetch(url.toString());
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { category, q } = await searchParams;
  const filteredBlogs = await fetchBlogs(category, q);
  return (
    <>
      <Head>
        <title>Store - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={"Blog"} />

      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {filteredBlogs && filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <BlogItem key={blog.id} {...blog} />
                  ))
                ) : (
                  <p className="text-center w-full">There are no results.</p>
                )}
              </div>
            </div>

            <FilterBlogs />
          </div>
        </div>
      </section>
    </>
  );
}
