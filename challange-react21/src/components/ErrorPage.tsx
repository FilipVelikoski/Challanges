import { Link } from "react-router-dom";

type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <div>
      Go to <Link to={"/"}>home page</Link>
    </div>
  );
}
