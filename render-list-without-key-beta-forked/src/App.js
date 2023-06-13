import { recipes } from "./data.js";

export default function RecipeList() {
  const rec = recipes.map((rec) => (
    <>
      <h2>{rec.name}</h2>
      <ul>
        <h3>{rec.ingredients.map((items) =>
          {
            return <li>{items}</li>   
          })}
        </h3>
      </ul>
    </>
  ));

  return (
    <div>
      <h1>Recipes</h1>
      <div>{rec}</div>
    </div>
  );
}
