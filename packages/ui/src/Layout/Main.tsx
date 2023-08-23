import * as React from "react";

export interface MainProps {
  children?: React.ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return (
    <main>
      <div className="mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
};
