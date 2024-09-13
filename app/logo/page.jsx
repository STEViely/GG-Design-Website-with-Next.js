"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white pt-10 flex flex-col items-center pb-10">
      <h1 className="text-[#00133B] font-bold text-[22px] md:text-[30px] lg:text-[40px] text-center">
        บริการออกแบบโลโก้ <br className="lg:hidden" />
        ที่สร้างเอกลักษณ์ให้ธุรกิจคุณ
      </h1>
      <div className="w-[360px] md:w-[500px] lg:w-[800px] p-4 rounded-lg">
        <p className="text-[14px] md:text-[16px] lg:text-[24px] text-[#00133B] ">
          "โลโก้เป็นมากกว่าสัญลักษณ์
          มันคือสิ่งที่สะท้อนตัวตนของแบรนด์และธุรกิจของคุณ! ที่ GG Design
          เรามีทีมงานมืออาชีพที่พร้อมจะช่วยคุณสร้างโลโก้ที่ไม่ซ้ำใคร สวยงาม
          และเหมาะสมกับธุรกิจของคุณ
          ทำให้ลูกค้าจดจำและประทับใจตั้งแต่ครั้งแรกที่พบ"
        </p>
      </div>
      <ul className="grid grid-cols-1 mx-auto mt-4 gap-4 lg:grid-cols-2 ">
        <Link href="/logo/luxury">
          <li className="text-[#00133B] font-bold border-[1px] w-[220px] h-[140px] flex justify-center items-center rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#00133B] hover:text-[24px] hover:text-white">
            เรียบหรู | luxury
          </li>
        </Link>
        <Link href="/logo/minimal">
          <li className="text-[#00133B] font-bold border-[1px] w-[220px] h-[140px] flex justify-center items-center rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#00133B] hover:text-[24px] hover:text-white">
            มินิมอล | minimal
          </li>
        </Link>
        <Link href="/logo/modern">
          <li className="text-[#00133B] font-bold border-[1px] w-[220px] h-[140px] flex justify-center items-center rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#00133B] hover:text-[24px] hover:text-white">
            โมเดิล | modern
          </li>
        </Link>
        <Link href="/logo/others">
          <li className="text-[#00133B] font-bold border-[1px] w-[220px] h-[140px] flex justify-center items-center rounded-[14px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#00133B] hover:text-[24px] hover:text-white">
            อื่นๆ | others
          </li>
        </Link>
      </ul>
    </div>
  );
}
