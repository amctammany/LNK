//import { Nav, Link, Html, Main } from "ui";
import Link from "next/link";
//import "ui/dist/index.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <nav>
        <Link href="/hops">Hops</Link>
        <Link href="/malts">Malts</Link>
        <Link href="/yeasts">Yeasts</Link>
      </nav>
      <main>{children}</main>
    </html>
  );
}
