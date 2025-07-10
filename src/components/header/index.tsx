'use client'

import Image from "next/image";
import Link from "next/link";
import logoSmall from '../../../public/assets/images/logo-devlinks-small.svg'
import logoLarge from '../../../public/assets/images/logo-devlinks-large.svg'
import { LuLink } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";
import NavItems, { NavItemsProps } from "../navItems";
import { usePathname } from "next/navigation";



export default function Header() {
    const items: NavItemsProps[] = [
        {
            url: '/',
            icon: <LuLink />,
            label: "Links",
        },
        {
            url: '/profile',
            icon: <CgProfile />,
            label: 'Profile Details'
        }
    ]
    const pathname = usePathname()

    return(
        <header className="flex items-center justify-between gap-16 py-4 px-6 mb-6 sm:mx-6 sm:my-6 rounded-xl bg-white " >
            <Link href={'/'} >
                <Image src={logoSmall} className=" sm:hidden " alt="logo small" />
                <Image src={logoLarge} className=" hidden sm:block " alt="logo large" />
            </Link>
            <ul className="flex w-full max-w-[450px] " >
               {
                items.map((links) => (
                    <NavItems
                        key={links.label}
                        url={links.url}
                        icon={links.icon}
                        label={links.label}
                        isActive={pathname === links.url}
                    />
                ))
               }
            </ul>
            <Link href={'/preview'} className="border px-6 py-4 rounded-lg border-purple-600 text-purple-600 " >
                <span className="hidden sm:block " >Preview</span>
                <IoEyeOutline className="sm:hidden" />
            </Link>
        </header>
    )
}