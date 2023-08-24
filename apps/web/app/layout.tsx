//import { Nav, Link, Html, Main } from "ui";
import Link from "next/link";
import { Navigation, NavLink, ThemeRegistry } from "./_components";
import "./index.css";
import { Box } from "@mui/material";
//import "ui/dist/index.css";
export default function RootLayout({ children }) {
  const drawerWidth = 240;
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navigation>
            <NavLink href="/hops">Hops</NavLink>
            <NavLink href="/malts">Malts</NavLink>
            <NavLink href="/yeasts">Yeasts</NavLink>
          </Navigation>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
              p: 0,
              m: 0,
              position: "relative",
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
