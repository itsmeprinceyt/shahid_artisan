import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr. Shahid - Artisan Wooden Work",
  description: "Mr. Shahid - Artisan Wooden Work: Expertly handcrafted wooden doors, kitchens, beds, and almirahs, combining traditional craftsmanship with modern elegance for your home.",
  icons: {
    icon: "profilepic.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Link
          href={`https://wa.me/918953148591?text=${encodeURIComponent(
            "Hello, Shahid - Artisan Wooden Work"
          )}`}
          passHref
          target="_blank"
        >
          <div className="fixed right-5 bottom-5 z-10">
            <Image
            className="animate-bounce"
              src={"/whatsapp.png"}
              width={40}
              height={40}
              alt="Whatsapp"
            />
          </div>
        </Link>
        {children}
      </body>
    </html>
  );
}
