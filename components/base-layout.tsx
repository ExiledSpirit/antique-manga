import { Abel } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import MenuComponent, { MenuItem } from "./menu";

const abel = Abel({
  subsets: ["latin"],
  weight: "400"
});

const menu: MenuItem[] = [
  {
    titulo: 'doujinshi',
    href: '/doujinshi'
  },
  {
    titulo: 'mangá',
    href: '/manga'
  },
  {
    titulo: 'manhwa',
    href: '/manhwa'
  },
  {
    titulo: 'novel',
    href: '/novel'
  },
  {
    titulo: 'oneshot',
    href: '/oneshot'
  },
  {
    titulo: 'projetos futuros',
    href: '/projetos-futuros'
  },
  {
    titulo: 'sobre a scan',
    href: '/sobre-a-scan'
  },
  {
    titulo: 'equipe',
    href: '/equipe'
  },
  {
    titulo: 'recrutamento',
    href: '/recrutamento'
  },
  {
    titulo: 'contato',
    href: '/contato'
  },
]

interface BaseLayoutProps {
  children: React.ReactNode;
  image: StaticImageData;
}

export default function BaseLayout({
  children,
  image
}: Readonly<BaseLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${abel.className} bg-repeat bg-fixed bg-auto bg-left-top bg-[url('../public/background.jpg')] overflow-auto`}>
        <div className='bg-white min-h-screen h-auto m-auto max-w-[1000px] md:max-w-[768px] sm:max-w-[490px] px-8 py-10'> { /** Wrapper for the application responsiveness. */ }
          <Link href="/" className="relative">
            <Image src={image} alt={""} className="relative h-auto max-w-full"></Image>
          </Link>
          <MenuComponent menu={menu}>

          </MenuComponent>
          {children}
        </div>
      </body>
    </html>
  );
}
