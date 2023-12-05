import { ChangeEvent, useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ] as const; // Added "as const" for more accurate typing
};
export default useInput;
