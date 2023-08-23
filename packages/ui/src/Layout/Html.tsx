import * as React from "react";

export type HtmlProps = {
  children?: React.ReactNode;
};
export const Html = ({ children }: HtmlProps) => {
  return (
    <html className="h-full bg-gray-200" lang="en">
      <body className="h-full">{children}</body>
    </html>
  );
};
