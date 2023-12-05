import Menu from "./components/Menu";
import data from "./data/recipes.json";

const App = () => {
  return (
    <>
      <h1 className="hello">Hello Developers</h1>
      <Menu recipes={data} />
    </>
  );
};

export default App;
