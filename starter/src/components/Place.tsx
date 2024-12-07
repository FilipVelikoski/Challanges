export interface PlaceInterface {
  id: number;
  place: string;
  desc: string;
  img: string;
}

const Place = ({ place, desc, img }: PlaceInterface) => {
  return (
    <>
      <div className="col">
        <div className="card text-bg-dark  place-card">
          <img src={img} className="card-img" alt={place} />
          <div className="card-img-overlay">
            <h5 className="card-title">{place}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;
