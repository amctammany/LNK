//import { usePathname } from "next/navigation";
import { Button } from "@mui/material";

export interface NavMenuProps {
  href: string;
  children: string;
}
export const NavMenu = ({ href, children }: NavMenuProps) => {
  //const pathname = usePathname();
  //const isActive = pathname === href;
  const isActive = false;

  return (
    <Button
      href={href}
      sx={{ my: 2, color: isActive ? "red" : "white", display: "block" }}
    >
      {children}
    </Button>
  );
};

export default NavMenu;
