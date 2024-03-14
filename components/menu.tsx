import { Inter } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

type NextImage = typeof Image;

export interface MenuItem {
  titulo: string
  href: string
  subMenus?: MenuItem[]
}

interface MenuProps {
  menu: MenuItem[]
}

export default function MenuComponent({
  menu
}: Readonly<MenuProps>) {
  return (
    <ul className="flex row w-full justify-between h-full items-center">
      {menu.map((item) => {
        return (
          <li key={item.titulo}>
            <Link href={item.href} className="text-xl text-brown hover:text-black transition-anchor">
              {item.titulo}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
