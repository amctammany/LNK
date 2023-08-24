import Link from "next/link";
//import { Nav, NavLink } from "ui";

export default function HopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/hops/create">Create</Link>
      {children}
    </div>
  );
}
