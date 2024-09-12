"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#CCD0D8] pt-10 mx-auto flex flex-col items-center pb-10">
      <h1 className="text-[36px] ">ดูผลงานโลโก้</h1>
      <ul className="grid grid-cols-1 mx-auto mt-8 gap-4 lg:grid-cols-2">
        <Link href="/logo/luxury">
          <li className="font-bold border-[1px] w-[220px] h-[140px] flex justify-center items-center rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[24px]">
            เรียบหรู | luxury
          </li>
        </Link>
        <Link href="/logo/minimal">
          <li className="font-bold border-[1px] w-[220px] h-[140px] flex justify-center items-center rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[24px]">
            มินิมอล | minimal
          </li>
        </Link>
        <Link href="/logo/modern">
          <li className="font-bold border-[1px] w-[220px] h-[140px] flex justify-center items-center rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[24px]">
            โมเดิล | modern
          </li>
        </Link>
        <Link href="/logo/others">
          <li className="font-bold border-[1px] w-[220px] h-[140px] flex justify-center items-center rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[24px]">
            อื่นๆ | others
          </li>
        </Link>
      </ul>
    </div>
  );
}
