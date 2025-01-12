import { AlbumI } from "./ArtistItems";

export default function AlbumList({ cover }: AlbumI) {
  const coverPath = `/public/images/albums/${cover}.jpg`;
  return (
    <div>
      <div className="card ">
        <img src={coverPath} alt="" />
      </div>
    </div>
  );
}
