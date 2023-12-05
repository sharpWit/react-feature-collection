import { useState } from "react";
import ColorLists from "./components/colors/ColorLists";
import Menu from "./components/recipe/Menu";
import data from "./data/recipes.json";
import colorData from "./data/colors-data.json";
import { TColors } from "./types/colors";
import AddColor from "./components/forms/AddColor";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [colors, setColors] = useState<TColors[]>(colorData);

  return (
    <>
      <h1 className="hello">Hello Developers</h1>
      {/* <Menu recipes={data} /> */}
      <hr />
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
    </>
  );
};

export default App;
