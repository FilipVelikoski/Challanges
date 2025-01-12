import { Link } from "react-router-dom";

export interface ArtistI {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: AlbumI[];
}

export interface AlbumI {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
}

export default function ArtistItem({ id, name, cover }: ArtistI) {
  const coverPath = `/public/images/covers/${cover}.jpg`;
  return (
    <Link to={`/artist/${id}`}>
      <div className="card border-0 mb-3 position-relative">
        <img src={coverPath} alt={name} />
        <p className="artist-name">{name}</p>
      </div>
    </Link>
  );
}
