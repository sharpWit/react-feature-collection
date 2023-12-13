import { FaPlus } from "react-icons/fa";
import { Dispatch, FC, FormEvent, SetStateAction, useRef } from "react";

interface Props {
  newItem: string;
  setNewItem: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const AddItem: FC<Props> = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current?.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
