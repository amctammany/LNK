import Link from "next/link";
import Nav from "ui/src/Nav/Nav";
import NavLink from "ui/src/Nav/NavLink";

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
