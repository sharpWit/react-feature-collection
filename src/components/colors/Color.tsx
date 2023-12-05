import { FC } from "react";
import StarRating from "../rating/StarRating";
import { FaTrash } from "react-icons/fa";

interface Props {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove?: (id: string) => void;
  onRate?: (id: string, rating: number) => void;
}

const Color: FC<Props> = ({ id, title, color, rating, onRemove, onRate }) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove && onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate && onRate(id, rating)}
      />
    </section>
  );
};
export default Color;
