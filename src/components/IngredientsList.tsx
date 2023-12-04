import React, { FC } from "react";
import Ingredient from "./Ingredient";
import { TIngredient } from "../types/ingredient";

interface Props {
  list: TIngredient[];
}

const IngredientsList: FC<Props> = ({ list }) => {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
};
export default IngredientsList;
