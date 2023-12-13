import Header from "./features/header/Header";
import Todo from "./features/todos/Todo";
import Menu from "./components/recipe/Menu";
import data from "./data/recipes.json";

const App = () => {
  return (
    <>
      <Header title="Hello Developers" className="header" />
      <hr />
      {/* <Menu recipes={data} /> */}
      {/* <Todo /> */}
    </>
  );
};

export default App;
