import { FC, ReactEventHandler, useState } from "react";
import Star from "./Star";

interface Props {
  totalStars?: number;
  style?: React.CSSProperties;
  onDoubleClick?: ReactEventHandler;
}

const createArray = (length: number) => [...Array(length)];

const StarRating: FC<Props> = ({
  totalStars = 5,
  style,
  onDoubleClick,
  ...props
}) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div
      style={{ padding: "5px", ...style }}
      onDoubleClick={onDoubleClick}
      {...props}
    >
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};
export default StarRating;
