import Link from "next/link";
import { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { LuLink } from "react-icons/lu";

export interface NavItemsProps {
  url: string;
  isActive?: boolean;
  icon: ReactNode;
  label: string;
}

export default function NavItems({
  url,
  isActive,
  icon,
  label,
}: NavItemsProps) {
  return (
    <li 
    className="text-grey-500 rounded-lg w-full text-present-3-semibold"
    style={
        {
            color: isActive ? '#633cff' : '',
            background: isActive ? '#eee' : '' 
        }
    } >
      <Link href={url} className="flex items-center justify-center gap-2 p-4 " >
        {icon}
        <span className=" hidden md:block"> {label} </span>
      </Link>
    </li>
  );
}

