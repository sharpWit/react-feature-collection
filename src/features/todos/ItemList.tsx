import { FC } from "react";

import LineItem from "./LineItem";
import { TTodo } from "../../types/todos";

interface Props {
  items: TTodo[];
  onHandleCheck: (id: string) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

const ItemList: FC<Props> = ({ items, onHandleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={onHandleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
