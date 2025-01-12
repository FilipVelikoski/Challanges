import { Link } from "react-router-dom";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className="Navbar">
        <Link to={"/"}>
          <div className="title">
            <h1>MUSIC DB</h1>
          </div>
        </Link>
      </div>
      <div className="line"></div>
    </>
  );
}
