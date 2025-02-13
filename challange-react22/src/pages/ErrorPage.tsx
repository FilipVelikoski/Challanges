import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops! Something went wrong. 😕</h1>
      <p className="fw-bold fs-5">
        Please return to{" "}
        <Link to="/">
          <button className="btn btn-dark">Home Page</button>
        </Link>
      </p>
    </div>
  );
}
