import Link from "next/link";
import { Nav, NavLink } from "ui";

export default function HopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav>
        <NavLink href="/hops/create">Create</NavLink>
      </Nav>
      {children}
    </div>
  );
}
