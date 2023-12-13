import { FC } from "react";

import ItemList from "./ItemList";
import { TTodo } from "../../types/todos";

interface Props {
  items: TTodo[];
  handleCheck: (id: string) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

const Content: FC<Props> = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          onHandleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </>
  );
};

export default Content;
