import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-white">

      {/* Intro */}
      <div className="h-screen bg-red-50/20 flex flex-col gap-2 items-center justify-center">
        <div className=" flex  flex-col items-center">
          <div className="text-8xl font-bold">Mr. Shahid</div>
          <div className="text-3xl font-thin">Artisan Wooden Work</div>
        </div>

        <div className="flex gap-3 ">
          <Link
            href={`https://wa.me/918953148591?text=${encodeURIComponent(
              "Hello, Shahid - Artisan Wooden Work"
            )}`}
            passHref
            target="_blank"
          >
            <div className="bg-green-500 flex p-2 px-4 gap-2 rounded-md shadow-xl">
              <p className="text-white font-semibold">Whatsapp</p>
              <Image
                src={"/whatsapp.png"}
                width={25}
                height={25}
                alt="Whatsapp"
              />
            </div>
          </Link>

          <Link
            href={`https://www.instagram.com/shahidmsnzar`}
            target="_blank"
          >
            <div className="bg-gradient-to-b from-purple-800 to-pink-600 flex p-2 px-4 gap-2 rounded-md shadow-xl">
              <p className="text-white font-semibold">Instagram</p>
              <Image
                src={"/instagram.png"}
                width={25}
                height={25}
                alt="Whatsapp"
              />
            </div>
          </Link>
        </div>

      </div>

      <div className="h-screen bg-red-500 flex items-center justify-center">
        <div className="bg-red-50">Main</div>
      </div>
      {/* Page One */}

    </div>
  );
}
