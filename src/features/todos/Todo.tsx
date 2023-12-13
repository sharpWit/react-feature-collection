import { FC, useState, useEffect, FormEvent } from "react";
import "./todo.scss";

import AddItem from "./AddItem";
import Content from "./Content";
import SearchItem from "../search/SearchItem";
import apiRequest from "../../utils/apiRequest";
import Footer from "../footer/Footer";
import { TTodo } from "../../types/todos";
import { TData } from "../../types/dataResponse";

const { v4: uuidv4 } = require("uuid");

const API_URL = "http://localhost:3001/api/data";

const Todo: FC = () => {
  const [items, setItems] = useState<TTodo[]>([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true); // Set loading to true before the fetch
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems: TData = await response.json();

        const extractedItems: TTodo[] = listItems.data || [];

        setItems(extractedItems);
        setFetchError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setFetchError(err.message);
        } else {
          setFetchError("Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Initial data fetch
    fetchItems();
  }, []);

  const addItem = async (item: string) => {
    try {
      // Generate a unique ID for the new item using uuid
      const newItemId = uuidv4();

      // Prepare the new item with the generated ID
      const newItemObject = {
        id: newItemId,
        item,
        checked: false,
      };

      // Update the local state optimistically
      const updatedItems = [...items, newItemObject];
      setItems(updatedItems);
      setFetchError(null);

      // Make the API request with the new item
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItemObject),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to add item. Server returned ${response.status}`
        );
      }

      const responseData = await response.json();

      if (
        !responseData.data ||
        !responseData.data.items ||
        responseData.data.items.length === 0
      ) {
        throw new Error("Unexpected response format from server");
      }

      const addedItem = responseData.data.items[0];

      // Update the local state with the actual ID from the server
      updatedItems.pop(); // Remove the optimistically added item
      updatedItems.push(addedItem); // Add the item with the actual ID
      setItems(updatedItems);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFetchError(error.message);
      } else {
        setFetchError("Unknown error");
      }
    }
  };

  const handleCheck = async (id: string) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);

    const myItem = listItem.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (!result) setFetchError(result);
  };

  const handleDelete = async (id: string) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (!result) setFetchError(result);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="todo">
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem search={search} setSearch={setSearch} />

      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && items.length === 0 && (
          <p>No items available</p>
        )}
        {!fetchError && !isLoading && items.length > 0 && (
          <Content
            items={items.filter(
              (item) =>
                item &&
                item.item &&
                item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} className="footer" />
    </div>
  );
};

export default Todo;
