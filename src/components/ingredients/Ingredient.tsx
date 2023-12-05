import { FC } from "react";
import { TIngredient } from "../../types/ingredient";

const Ingredient: FC<TIngredient> = ({ amount, measurement, name }) => {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
};
export default Ingredient;
