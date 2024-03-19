import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: '400'
});


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-repeat bg-fixed bg-auto bg-left-top bg-[url('../public/background.jpg')] overflow-scroll text-black`}>
        <div className='bg-white m-auto max-w-[1440px] lg:max-w-full'> { /** Wrapper for the application responsiveness. */ }
          <div className="px-8 py-4">
            <section className="flex row gap-4 mt-4">
              <main className="w-full">
                {children}
              </main>
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
