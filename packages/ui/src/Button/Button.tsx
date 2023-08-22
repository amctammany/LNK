"use client";
import * as React from "react";
export type ButtonProps = {
  onClick?: React.EventHandler<any>;
  children?: React.ReactNode;
};
export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="p5" onClick={onClick}>
      <h1 className="text-3xl font-bold underline">{children}</h1>
    </button>
  );
};
