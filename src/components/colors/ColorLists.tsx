import { FC } from "react";
import Color from "./Color";
import { TColors } from "../../types/colors";

interface Props {
  colors: TColors[];
  onRemoveColor?: (id: string) => void;
  onRateColor?: (id: string, rating: number) => void;
}

const ColorLists: FC<Props> = ({ colors, onRemoveColor, onRateColor }) => {
  if (!colors.length) return <p>No colors listed! (Add a color)</p>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};
export default ColorLists;
