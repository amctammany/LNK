import * as React from "react";
export type ButtonProps = {
  onClick?: React.EventHandler<any>;
  children?: React.ReactNode;
};
export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="p5" onClick={onClick}>
      <h1 className="text-3xl font-extrabold text-center w-32">{children}</h1>
    </button>
  );
};
