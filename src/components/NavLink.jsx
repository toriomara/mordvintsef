import Link from "next/link";
import { usePathname } from "next/navigation";
import { DrawerClose } from "./ui/drawer";

export const NavLink = ({ link }) => {
  const pathname = usePathname();
  return (
    <DrawerClose asChild>
      <Link
        className={`${
          pathname === link.path
            ? "text-primary text-lg"
            : "hover:text-primary-[300] text-lg"
        }`}
        href={link.path}
      >
        {link.title}
      </Link>
    </DrawerClose>
  );
};
