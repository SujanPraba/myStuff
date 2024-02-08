"use client";
import { useRouter } from "next/navigation";
export default function NavBarStyle() {
  const router = useRouter();
  return (
    <>
      <section className="h-16  "></section>
      <section className="bg-teritorycolor h-screen">
        <div className="flex w-[100%] justify-between items-center px-[30px] pt-12">
          <div
            className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]"
            onClick={() => {
              router.push("navbarStyles/navLR");
            }}
          >
            <p className="text-center font-[500] ">Responsive Navbar Left - Right</p>
          </div>

          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]">
            <p className="text-center font-[500]">Responsive Navbar Right - Left</p>
          </div>
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]"
          onClick={() => {
            router.push("navbarStyles/navTB-TW");
          }}>
            <p className="text-center font-[500]">Responsive Navbar Top - Bottom using TW-Elements</p>
          </div>
        </div>
        <div className="flex w-[100%] justify-between items-center px-[30px] pt-12">
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]"
           onClick={() => {
            router.push("navbarStyles/sideNav");
          }}>
            <p className="text-center font-[500]">Static left NavBar</p>
          </div>
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]"
          onClick={() => {
            router.push("navbarStyles/navTB");
          }}>
            <p className="text-center font-[500]">Responsive Navbar Top - Bottom </p>
          </div>
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]">
            <p className="text-center font-[500]">Dropdown Styles</p>
          </div>
        </div>
      </section>
    </>
  );
}
