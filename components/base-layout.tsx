import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

interface BaseLayoutProps {
  children: React.ReactNode;
  image: React.ReactNode;
}

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-repeat bg-fixed bg-auto bg-left-top bg-[url('../public/background.jpg')] overflow-auto`}>
        <div className='bg-white h-screen m-auto min-h-screen max-w-[1000px] md:max-w-[768px] sm:max-w-[490px] overflow-hidden'> { /** Wrapper for the application responsiveness. */ }
          {children}
        </div>
      </body>
    </html>
  );
}
