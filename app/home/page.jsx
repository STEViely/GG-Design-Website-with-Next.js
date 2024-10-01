"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "../_components/EmblaCarousel";

import "../../css/base.css";
import "../../css/sandbox.css";
import "../../css/embla.css";
import Image from "next/image";
import Link from "next/link";
import Bgg from "@/public/LandingPage/bgg.jpg";
import GGD2 from "@/public/GGD2.png";
import A1 from "@/public/LandingPage/A-20.jpg";
import A2 from "@/public/LandingPage/A1-20.jpg";
import A3 from "@/public/LandingPage/A2-20.jpg";
import A4 from "@/public/LandingPage/A3-20.jpg";
import A5 from "@/public/LandingPage/A4-20.jpg";
import A6 from "@/public/LandingPage/A5-20.jpg";
import A7 from "@/public/LandingPage/A6-20.jpg";
import A8 from "@/public/LandingPage/A7-20.jpg";
import A9 from "@/public/LandingPage/A8-20.jpg";
import A10 from "@/public/LandingPage/A9-20.jpg";
import G1 from "@/public/LandingPage/GG 2-1.jpg";
import G2 from "@/public/LandingPage/GG 2-2.jpg";
import G3 from "@/public/LandingPage/GG 2-3.jpg";
import G4 from "@/public/LandingPage/GG 2-4.jpg";
import G5 from "@/public/LandingPage/GG 2-5.jpg";
import Typewriter from "typewriter-effect";

const OPTIONS = { loop: true };

export default function Page() {
  const images = [
    { src: A1, alt: "Main Picture" },
    { src: G1, alt: "Main Picture" },
    { src: A2, alt: "Main Picture" },
    { src: G2, alt: "Main Picture" },
    { src: A3, alt: "Main Picture" },
    { src: G3, alt: "Main Picture" },
    { src: A4, alt: "Main Picture" },
    { src: G4, alt: "Main Picture" },
    { src: A5, alt: "Main Picture" },
    { src: G5, alt: "Main Picture" },
    { src: A6, alt: "Main Picture" },
    { src: A7, alt: "Main Picture" },
    { src: A8, alt: "Main Picture" },
    { src: A9, alt: "Main Picture" },
    { src: A10, alt: "Main Picture" },
  ];

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative w-full h-screen flex flex-col items-center">
        <div className="absolute -z-10 w-full h-full">
          <Image
            src={Bgg}
            alt="background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div>
          <Image
            src={GGD2}
            alt="Logo"
            width={129}
            height={129}
            className="mx-auto md:w-[240px] lg:w-[320px] 2xl:w-[300px]"
          />
        </div>
        <div className="w-[80%]">
          <div className="flex justify-center">
            <h1 className="text-[28px] md:text-[40px] lg:text-[56px] 2xl:text-[58px]">
              <Typewriter
                options={{
                  strings: [
                    "ออกเเบบโลโก้",
                    "ออกแบบเว็บไซต์",
                    "สร้างเว็บไซต์เเละระบบ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="my-4 mx-auto">
            <p className="md:text-[24px] lg:text-[32px] 2xl:text-[34px]">
              “ GG Design ” บริการออกแบบโลโก้, ออกแบบและสร้างเว็บไซต์
              เพื่อให้ธุรกิจกของคุณ มีความน่าเชื่อถือและเป็นมืออาชีพ
              ในราคาที่เข้าถึงง่าย ยินดีให้คำปรึกษาฟรี
            </p>
          </div>

          <EmblaCarousel slides={images} options={OPTIONS} />

          <Link href="/" className="flex justify-center mt-10">
            <button className="bg-[#00133B] w-[120px] h-[32px] text-white rounded-[42px] hover:transition-transform duration-300 ease-in-out hover:scale-105 md:w-[170px] md:h-[52px] md:text-[24px] lg:w-[250px] lg:h-[70px] lg:text-[32px] xl:w-[250px] 2xl:w-[250px] 2xl:h-[60px] 2xl:text-[32px]">
              เข้าสู่เว็บไซต์
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
