import React from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return <a href={href}>{children}</a>;
}
