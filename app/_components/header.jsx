"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GGDE from "@/public/GGDE.png";
import { usePathname } from "next/navigation";

export default function Header({ bg }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Reactive pathname from Next.js

  // Hide header on the /home route
  if (pathname === "/home") {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      // Prevent scrolling when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Allow scrolling when the menu is closed
      document.body.style.overflow = "auto";
    }
  };

  const isActive = (path) =>
    pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header>
      <nav className="w-full flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 bg-[#00133B]">
        {/* Logo */}
        <Link href="/">
          <div className="w-[96px] md:w-[120px] lg:w-[193px]">
            <Image src={GGDE} alt="GG Design" />
          </div>
        </Link>

        {/* Menu Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Menu Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`hidden lg:flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-8 text-white text-[16px] sm:text-[20px] md:text-[24px] z-10`}
        >
          <li
            key="home"
            className={`hover:underline ${isActive("/") ? "underline" : ""}`}
          >
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li
            key="logo"
            className={`hover:underline ${
              isActive("/logo") ? "underline" : ""
            }`}
          >
            <Link href="/logo">ออกแบบโลโก้</Link>
          </li>
          <li
            key="aboutUs"
            className={`hover:underline ${
              isActive("/aboutUs") ? "underline" : ""
            }`}
          >
            <Link href="/aboutUs">เกี่ยวกับเรา</Link>
          </li>
          <li
            key="contactUs"
            className={`hover:underline ${
              isActive("/contactUs") ? "underline" : ""
            }`}
          >
            <Link href="/contactUs">ติดต่อเรา</Link>
          </li>
        </ul>
      </nav>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <>
          <div className="fixed right-0 top-14 bg-white opacity-50 w-[100%] h-full flex flex-col justify-start items-end px-4 py-6 z-50"></div>
          <div className="absolute right-0 top-14 bg-[#00133B] w-[40%] flex flex-col justify-start items-end px-4 py-6 z-50">
            <ul className="flex flex-col items-end gap-4 text-white text-[16px] sm:text-[20px]">
              <li
                key="home-mobile"
                className={`hover:underline ${
                  isActive("/") ? "underline" : ""
                }`}
              >
                <Link href="/">หน้าหลัก</Link>
              </li>
              <li
                key="logo-mobile"
                className={`hover:underline ${
                  isActive("/logo") ? "underline" : ""
                }`}
              >
                <Link href="/logo">ออกแบบโลโก้</Link>
              </li>
              <li
                key="aboutUs-mobile"
                className={`hover:underline ${
                  isActive("/aboutUs") ? "underline" : ""
                }`}
              >
                <Link href="/aboutUs">เกี่ยวกับเรา</Link>
              </li>
              <li
                key="contactUs-mobile"
                className={`hover:underline ${
                  isActive("/contactUs") ? "underline" : ""
                }`}
              >
                <Link href="/contactUs">ติดต่อเรา</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
