import artists from "../db";
import ArtistItem from "./ArtistItems";

type Props = {};

export default function ArtistsList({}: Props) {
  return (
    <div className="artistList">
      <h2 className="text-center">Browse the artists</h2>
      {artists.map((el) => (
        <ArtistItem key={el.id} {...el} />
      ))}
    </div>
  );
}
