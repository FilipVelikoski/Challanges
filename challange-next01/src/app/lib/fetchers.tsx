export async function fetchAllProducts() {
  const resProducts = await fetch("http://localhost:5001/products");
  const products = await resProducts.json();

  return products;
}

export async function fetchProducts(start: number) {
  const resProducts = await fetch(
    `http://localhost:5001/products?_start=${start}&_limit=4`
  );
  const products = await resProducts.json();

  return products;
}

export async function fetchAllBlogs() {
  const resBlogs = await fetch("http://localhost:5001/blogs");
  const blogs = await resBlogs.json();

  return blogs;
}

export async function fetchBlogs(start: number) {
  const resBlogs = await fetch(
    `http://localhost:5001/blogs?_start=${start}&_limit=3`
  );
  const blogs = await resBlogs.json();

  return blogs;
}
