import { useParams } from "react-router-dom";

import artists from "../db";

export default function AlbumPage() {
  const { albumId } = useParams();

  const artist = artists.find((artist) =>
    artist.albums.some((album) => album.albumId.toString() === albumId)
  );

  const album = artist?.albums.find(
    (album) => album.albumId.toString() === albumId
  );

  if (!album) {
    return <div>Album not found</div>;
  }

  const coverPath = album ? `/public/images/albums/${album.cover}.jpg` : "";

  return (
    <div className="albumPage-container">
      <div className="albumPage">
        <div className=" mt-4" key={album?.albumId}>
          <img src={coverPath} alt="" className="album-img" />
          <p className="mt-3">
            Title: <span>{album?.title}</span>
          </p>
          <p>
            Year: <span>{album?.year}</span>
          </p>
          <p>
            Price: <span>{album?.price}$</span>
          </p>
        </div>
      </div>
    </div>
  );
}
