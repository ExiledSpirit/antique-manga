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
      <body className={`${abel.className} bg-repeat bg-fixed bg-auto bg-left-top bg-[url('../public/background.jpg')] overflow-scroll text-black`}>
        <div className='bg-white m-auto max-w-[1440px] lg:max-w-full'> { /** Wrapper for the application responsiveness. */ }
          <div className="max-w-full h-[400px]">
            <Link href="/" className="relative max-w-full h-full">
              <Image src={image} alt={""} className="relative h-full max-w-full object-none"></Image>
            </Link>
          </div>
          <div className="px-8 py-4">
            <MenuComponent menu={menu} />
            <section className="flex row gap-4 mt-4">
              <main className="w-full">
                {children}
              </main>
              <aside className="w-1/3 bg-gray-200 p-2 h-fit">
                <h4 className="uppercase text-center mb-4">Nos sigam no instagram</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="h-[140px] w-full bg-black"></div>
                  <div className="h-[140px] w-full bg-black"></div>
                  <div className="h-[140px] w-full bg-black"></div>
                  <div className="h-[140px] w-full bg-black"></div>
                  <div className="h-[140px] w-full bg-black"></div>
                  <div className="h-[140px] w-full bg-black"></div>
                </div>
              </aside>
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
