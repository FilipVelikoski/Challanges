import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CategoryPicker from "@/components/CategoryPicker";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProducts from "@/components/FeaturedProducts";
import { BannerI, BlogI, FeaturedProdI } from "@/interfaces";

async function fetchData(): Promise<{
  BannerData: BannerI;
  FeaturedProdData: FeaturedProdI[];
  FeaturedBlogData: BlogI[];
}> {
  // banner
  const BannerRes = await fetch("http://localhost:5001/banner_content");
  const BannerData = await BannerRes.json();

  // featured products
  const FeaturedProdRes = await fetch(
    "http://localhost:5001/products/?_limit=4"
  );
  const FeaturedProdData = await FeaturedProdRes.json();

  // featured blogs
  const FeaturedBlogRes = await fetch("http://localhost:5001/blogs/?_limit=3");
  const FeaturedBlogData = await FeaturedBlogRes.json();

  return { BannerData, FeaturedProdData, FeaturedBlogData };
}

export default async function Home() {
  const { BannerData, FeaturedProdData, FeaturedBlogData } = await fetchData();
  return (
    <div>
      <Banner preTitle={BannerData.preTitle} title={BannerData.title} />

      <CategoryPicker />

      <FeaturedProducts featuredProdData={FeaturedProdData} />

      <FeaturedBlogs blogs={FeaturedBlogData} />
    </div>
  );
}
