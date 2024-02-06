"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
    <>
      <section className="h-16 bg-primaryWhite "></section>
      <section className="bg-primary h-screen">
        <div className="flex w-[100%] justify-between items-center px-[30px] pt-12">
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]">
            <Link href="/navbarStyles">
            <p className="text-center font-[500] ">NavBar Styles</p>
            </Link>
          </div>
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]">
            <p className="text-center font-[500]">Sliding Image Styles</p>
          </div>
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]">
            <p className="text-center font-[500]">Dropdown Styles</p>
          </div>
        </div>
        <div className="flex w-[100%] justify-between items-center px-[30px] pt-12">
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]">
            <p className="text-center font-[500]">Framer-Motion Styles</p>
          </div>
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]">
            <p className="text-center font-[500]">Sliding Image Styles</p>
          </div>
          <div className="px-10 py-8 bg-primaryWhite rounded-2xl w-[30%] cursor-pointer hover:bg-[black] hover:text-[white]">
            <p className="text-center font-[500]">Dropdown Styles</p>
          </div>
        </div>
      </section>
    </>
  );
}
