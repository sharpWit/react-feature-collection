import { FC } from "react";

interface Props {
  title: string;
  className: string;
}

const Header: FC<Props> = ({ title, className }) => {
  return <h1 className={className}>{title}</h1>;
};

export default Header;
