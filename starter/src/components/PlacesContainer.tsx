import { useEffect, useState } from "react";
import Place, { PlaceInterface } from "./Place";

const PlacesContainer = () => {
  const [places, setPlaces] = useState<PlaceInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
      });
  }, []);

  return (
    <div className="my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
        {places.map((el) => (
          <Place key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default PlacesContainer;
