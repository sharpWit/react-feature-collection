import { FC } from "react";
import Recipe from "./Recipe";
import { TRecipe } from "../../types/recipe";
interface Props {
  recipes: TRecipe[];
}

const Menu: FC<Props> = ({ recipes }) => {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
};
export default Menu;
