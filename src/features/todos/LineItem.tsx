import { FC } from "react";
import { FaTrashAlt } from "react-icons/fa";

import { TTodo } from "../../types/todos";

interface Props {
  item: TTodo;
  handleCheck: (id: string) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

const LineItem: FC<Props> = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : {}}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
