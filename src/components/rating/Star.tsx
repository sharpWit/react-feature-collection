import { FC } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  selected: boolean;
  onSelect: () => void;
}

const Star: FC<Props> = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};
export default Star;
