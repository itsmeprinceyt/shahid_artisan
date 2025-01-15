import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-white">

      {/* Intro */}
      <div className="h-screen bg-red-50/20 flex flex-col gap-2 items-center justify-center">
        <div className=" flex  flex-col items-center">
          <div className="md:text-8xl text-5xl md:font-bold font-extrabold">Mr. Shahid</div>
          <div className="md:text-3xl text-xl font-thin">Artisan Wooden Work</div>
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
      
      {/* 2nd Page */}
      <div className="h-auto bg-gradient-to-b from-red-50/20 to-blue-100 flex items-center justify-center relative">
        <div className="absolute -top-10">
        <Image
                src={"/phone-rotate.gif"}
                width={50}
                height={50}
                alt="Phone Rotate"
              />
        </div>
        <div className="overflow-auto bg-white shadow-md rounded-3xl p-6 max-w-full mx-auto mb-10">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2 text-left" colSpan={2}>Item</th>
                <th className="border border-gray-300 p-2 text-center">Sq ft</th>
                <th className="border border-gray-300 p-2 text-center">Sq fr & Material Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  • Modern Kitchen Design
                  <div className="grid grid-cols-2 border border-black">
                    <p className="border border-black p-1">Wood Approximation</p>
                    <p className="border border-black p-1">Rs/- 300 to 1800</p>
                    <p className="border border-black p-1"> PVC Approximation</p>
                    <p className="border border-black p-1">Rs/- 200 to 2200</p>
                  </div>
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <Image
                    src={"/photos/1.png"}
                    width={100}
                    height={100}
                    alt="Modern Kitchen Design"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">Rs 350/-</td>
                <td className="border border-gray-300 p-2 text-center font-semibold">Rs 1350/-</td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-2">
                  • Modern Warddrobe Design
                  <div className="grid grid-cols-2 border border-black">
                    <p className="border border-black p-1">Acrylic Sheet</p>
                    <p className="border border-black p-1">Rs/- 1300 to 1700</p>
                    <p className="border border-black p-1">Veneer with Melamine</p>
                    <p className="border border-black p-1">Rs/- 1350 to 1750</p>
                    <p className="border border-black p-1">Polyurethane</p>
                    <p className="border border-black p-1">Rs/- 1400 to 1850</p>
                  </div>
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <Image
                    src={"/photos/2.png"}
                    width={100}
                    height={100}
                    alt="Modern Kitchen Design"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">Rs 300/-</td>
                <td className="border border-gray-300 p-2 text-center font-semibold">Rs 1350/-</td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  • Normal Bed & Side Table <br></br>
                  • Modular Bed & Side Table
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <Image
                    src={"/photos/3.jpg"}
                    width={100}
                    height={100}
                    alt="Modern Kitchen Design"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">Rs 250/-</td>
                <td className="border border-gray-300 p-2 text-center font-semibold">Rs 1100/-</td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  • Panel Wall Door
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <Image
                    src={"/photos/4.png"}
                    width={100}
                    height={100}
                    alt="Modern Kitchen Design"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">Rs 180/-</td>
                <td className="border border-gray-300 p-2 text-center font-semibold">Rs 1000/-</td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  • Flash Door with Mica Belen <br></br>
                  • Flash Door with Mica Handel Lock
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <Image
                    src={"/photos/5.jpg"}
                    width={100}
                    height={100}
                    alt="Modern Kitchen Design"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">
                  Rs 1500/-
                  <br></br>
                  Rs 1800/-
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">
                  Rs 6000/-
                  <br></br>
                  Rs 7500/-
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  • Modular Led Panel Mica Design <br></br>
                  • Normal Led Panel Mica Design
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <Image
                    src={"/photos/6.jpg"}
                    width={100}
                    height={100}
                    alt="Modern Kitchen Design"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">
                  Rs 450/-
                  <br></br>
                  All Design
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">
                  Rs 1350/-
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-2" colSpan={2}>
                  • Modular Wall Panel
                </td>

                <td className="border border-gray-300 p-2 text-center font-semibold">
                  Rs 7/-
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">
                  -
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 px-4 py-2" colSpan={2}>
                  • Quackery
                </td>

                <td className="border border-gray-300 p-2 text-center font-semibold">
                  Rs 250/-
                </td>
                <td className="border border-gray-300 p-2 text-center font-semibold">
                  Rs 1350/-
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
