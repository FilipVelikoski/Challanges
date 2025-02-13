import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="NavBar">
        <Link to={"/"}>
          <h3>RESTAURANT</h3>
        </Link>
        <Link to="/favourites">
          <i className="fas fa-heart"></i>
        </Link>
      </div>
      <div className="line"></div>
    </>
  );
}
