import { FC, FormEvent } from "react";
import useInput from "../../hooks/useInput";

interface Props {
  onNewColor: (title: string, color: string) => void;
}

const AddColor: FC<Props> = ({ onNewColor }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button type="submit">Add Color</button>
    </form>
  );
};
export default AddColor;
