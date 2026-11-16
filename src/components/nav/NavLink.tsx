"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type props = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: props) => {
  const pathname = usePathname();
  return (
    <Link
      key={href}
      href={href}
      className={
        pathname === href ? "text-yellow-400" : "hover:text-yellow-400/80"
      }
    >
      {label}
    </Link>
  );
};

export default NavLink;
