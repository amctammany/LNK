import React from "react";

export default function Nav({ children }: { children: React.ReactNode }) {
  const links = React.Children.map(children, (link) => <li>{link}</li>);
  return (
    <nav>
      <ul>{links}</ul>
    </nav>
  );
}
