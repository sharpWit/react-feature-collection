import { FC } from "react";

interface Props {
  length: number;
  className: string;
}

const Footer: FC<Props> = ({ length, className }) => {
  return (
    <div className={className}>
      {length} List {length === 1 ? "item" : "items"}
    </div>
  );
};
export default Footer;
