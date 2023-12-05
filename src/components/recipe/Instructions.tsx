import { FC } from "react";

interface Props {
  title: string;
  steps: string[];
}

const Instructions: FC<Props> = ({ title, steps }) => {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </section>
  );
};
export default Instructions;
