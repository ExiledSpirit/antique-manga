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
    <div>
      {children}
    </div>
  );
}
