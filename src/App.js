import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemist = people.filter((person) => person.profession === "chemist");
  const noChemist = people.filter((person) => person.profession !== "chemist");
  const listItems = (human) =>
    human.map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));
  return (
    <article>
      <h1>Scientists</h1>
      <h1>Chemist</h1>
      <ul>{listItems(chemist)}</ul>
      <h1>Everyone else</h1>
      <ul>{listItems(noChemist)}</ul>
    </article>
  );
}
