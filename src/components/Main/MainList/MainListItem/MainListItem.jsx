import "../MainList.css";

export default function MainList({ description, title, image, link }) {
  return (
    <li>
      <a href={link} target="_blank">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
}
