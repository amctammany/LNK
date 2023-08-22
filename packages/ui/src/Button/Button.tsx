import * as React from "react";

export const Button = () => {
  return (
    <button className="p5" onClick={() => alert("boop")}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </button>
  );
};
