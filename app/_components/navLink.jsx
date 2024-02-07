"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`rounded p-2 ${
        pathName === link.url &&
        "bg-[#7eb2e1] text-white rounded-lg ring-2 ring-black"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
