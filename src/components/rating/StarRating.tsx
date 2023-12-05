import {
  CSSProperties,
  FC,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import Star from "./Star";

interface Props {
  totalStars?: number;
  selectedStars?: number;
  style?: CSSProperties;
  onDoubleClick?: ReactEventHandler;
  onRate: (i: number) => void;
}

// Function to create a new array with a specified length
const createArray = (length: number) => [...Array(length)];

const StarRating: FC<Props> = ({
  totalStars = 5,
  selectedStars = 0,
  style,
  onDoubleClick,
  onRate,
}) => {
  // const [selectedStars, setSelectedStars] = useState(selectedItems);

  // useEffect(() => {
  //   setSelectedStars(selectedItems);
  // }, [selectedItems]);

  return (
    <div style={{ padding: "5px", ...style }} onDoubleClick={onDoubleClick}>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};
export default StarRating;
