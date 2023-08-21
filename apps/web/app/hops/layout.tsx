import Link from "next/link";

export default function HopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/hops/create">Create</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
