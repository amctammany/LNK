import { Nav, NavLink, Html, Main } from "ui";
import "ui/dist/index.css";
export default function RootLayout({ children }) {
  return (
    <Html>
      <Nav>
        <NavLink href="/hops">Hops</NavLink>
        <NavLink href="/malts">Malts</NavLink>
        <NavLink href="/yeasts">Yeasts</NavLink>
      </Nav>
      <Main>{children}</Main>
    </Html>
  );
}
