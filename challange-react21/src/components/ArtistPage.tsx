import { Link, useParams } from "react-router-dom";
import artists from "../db";
import AlbumList from "./AlbumList";

type Props = {};
export default function ArtistPage({}: Props) {
  const { id } = useParams();

  const artist = artists.find((artist) => artist.id.toString() === id);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artistPage-container">
      <div className="artistPage">
        <img
          src={`/public/images/covers/${artist.cover}.jpg`}
          className="artist-picture mb-3"
          alt={artist.name}
        />
        <h2>{artist.name}</h2>
        <p className="text-center mt-3">{artist.bio}</p>
        <div className="row">
          {artist.albums.map((el) => (
            <div className="col-6 p-0" key={el.albumId}>
              <Link to={`/artist/${id}/${el.albumId}`}>
                <AlbumList {...el} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
