import * as React from "react";
export type ButtonProps = {
  /**
   * Optional onClick handler
   */
  onClick?: React.EventHandler<any>;

  /**
   * Inner contents of button
   */
  children?: React.ReactNode;
};

/**
 * UI Button Component
 */
export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="p5" onClick={onClick}>
      <h1 className="text-3xl italic font-extrabold text-center w-32">
        {children}
      </h1>
    </button>
  );
};
