interface DetailsType {
  image: string;
  section: string;
  title: string;
  description: string;
  text: string;
}

interface Props {
  title: string;
}

export const DetailsBlock = ({ title }: Props) => {
  const storiesAdventures: DetailsType[] = [
    {
      image: "https://picsum.photos/id/1016/370/395",
      section: "About",
      title: "Stories of Adventure",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quisquam, temporibus eveniet optio architecto molestias deserunt nisi provident eum quibusdam maiores! Quia fugiat nihil reiciendis. Magni corporis dolores est tempora!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eius! Eligendi, consectetur maiores? Excepturi, aspernatur!",
    },
  ];

  const popularAdventures = [
    {
      image: "https://picsum.photos/id/1018/370/395",
      section: "About",
      title: "Popular Adventures",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quisquam, temporibus eveniet optio architecto molestias deserunt nisi provident eum quibusdam maiores! Quia fugiat nihil reiciendis. Magni corporis dolores est tempora!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eius! Eligendi, consectetur maiores? Excepturi, aspernatur!",
    },
  ];

  const details =
    title === "Popular Adventures" ? popularAdventures : storiesAdventures;

  return (
    <div className="container my-5">
      {details.map((el, idx) => (
        <div
          key={idx}
          className="row align-items-center justify-content-center"
        >
          <div className="col-12 col-md-7">
            <h5 className="section">{el.section}</h5>
            <h2>{title}</h2>
            <p className="mb-3">{el.description}</p>
            <p>{el.text}</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="img">
              <img src={el.image} alt="" className="img-details" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
