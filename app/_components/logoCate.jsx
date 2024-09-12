"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LogoCate() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <h1 className="text-[36px] ">ผลงานโลโก้</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:w-[1000px] mt-8 mx-auto">
        <Link href="/logo/luxury">
          <li
            className={`border-[1px] w-[120px] h-[40px] flex justify-center items-center rounded-[14px] cursor-pointer hover:transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white ${
              isActive("/logo/luxury") ? "bg-white" : ""
            } `}
          >
            luxury
          </li>
        </Link>
        <Link href="/logo/minimal">
          <li
            className={`border-[1px] w-[120px] h-[40px] flex justify-center items-center rounded-[14px] cursor-pointer hover:transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white ${
              isActive("/logo/minimal") ? "bg-white" : ""
            } `}
          >
            minimal
          </li>
        </Link>
        <Link href="/logo/modern">
          <li
            className={`border-[1px] w-[120px] h-[40px] flex justify-center items-center rounded-[14px] cursor-pointer hover:transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white ${
              isActive("/logo/modern") ? "bg-white" : ""
            } `}
          >
            modern
          </li>
        </Link>
        <Link href="/logo/others">
          <li
            className={`border-[1px] w-[120px] h-[40px] flex justify-center items-center rounded-[14px] cursor-pointer hover:transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white ${
              isActive("/logo/others") ? "bg-white" : ""
            } `}
          >
            others
          </li>
        </Link>
      </ul>
    </>
  );
}
