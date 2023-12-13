import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ColorLists from "../../components/colors/ColorLists";
import AddColor from "../../components/forms/AddColor";
import Search from "../../components/search/Search";
import colorData from "../../data/colors-data.json";
import { TColors } from "../../types/colors";

const ColorPallet = () => {
  const [colors, setColors] = useState<TColors[]>(colorData);

  return (
    <div>
      <Search />
      <AddColor
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: uuidv4(),
              rating: 0,
              title,
              color,
            },
          ];
          setColors(newColors);
        }}
      />
      <ColorLists
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
    </div>
  );
};
export default ColorPallet;
