import Link from "next/link";
import * as ui from "ui";
import "ui/dist/index.css";

const Nav = () => (
  <nav>
    Navigation
    <ul>
      <li>
        <Link href="/hops">Hops</Link>
        <Link href="/malts">Malts</Link>
        <Link href="/yeasts">Yeasts</Link>
      </li>
    </ul>
  </nav>
);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
