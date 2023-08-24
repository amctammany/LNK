//import { usePathname } from "next/navigation";
import { Button } from "@mui/material";
import Link from "next/link";

export interface NavLinkProps {
  href: string;
  children: string;
}
export const NavLink = ({ href, children }: NavLinkProps) => {
  //const pathname = usePathname();
  //const isActive = pathname === href;
  const isActive = false;

  return (
    <Button
      component={Link}
      href={href}
      sx={{ my: 2, color: isActive ? "red" : "white", display: "block" }}
    >
      {children}
    </Button>
  );
};

export default NavLink;
