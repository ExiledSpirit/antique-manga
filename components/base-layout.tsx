import { Inter } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

type NextImage = typeof Image;

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
      <body className={`${inter.className} bg-repeat bg-fixed bg-auto bg-left-top bg-[url('../public/background.jpg')] overflow-auto`}>
        <div className='bg-white h-screen m-auto min-h-screen max-w-[1000px] md:max-w-[768px] sm:max-w-[490px] max-h-screen px-8 py-10'> { /** Wrapper for the application responsiveness. */ }
          <Link href="/" className="max-w-full h-16 block relative">
            <Image fill src={image} alt={""} className="relative h-auto max-w-full"></Image>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
