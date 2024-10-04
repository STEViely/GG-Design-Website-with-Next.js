"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import QandA from "./_components/QandA";
import Link from "next/link";
import Hero from "./_components/hero";
import Head from "next/head";
import WebPreview from "./_components/webPreview";
import FloatingContact from "./_components/FloatingContact";
import facebookLogo from "@/public/facebookLogo.jpg";
import Feedback from "./_components/feedback";

const images = [
  { src: "/111.png", alt: "Main Picture" },
  { src: "/222.png", alt: "Main Picture" },
  { src: "/333.png", alt: "Main Picture" },
  { src: "/444.png", alt: "Main Picture" },
  { src: "/555.png", alt: "Main Picture" },
  { src: "/666.png", alt: "Main Picture" },
  { src: "/777.png", alt: "Main Picture" },
  { src: "/888.png", alt: "Main Picture" },
  { src: "/999.png", alt: "Main Picture" },
];

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const targetSectionRef1 = useRef(null);
  const targetSectionRef2 = useRef(null);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // สไลด์ไปทางซ้าย (ต่อไปยังรูปถัดไป)
      nextImage();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // สไลด์ไปทางขวา (ย้อนกลับไปยังรูปก่อนหน้า)
      prevImage();
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <Head>
        <meta
          property="og:image"
          content="https://ggdesign-graphic.com/cover.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Hero
        targetSectionRef1={targetSectionRef1}
        targetSectionRef2={targetSectionRef2}
      />

      {/* <ContactSection /> */}

      <div className=" flex justify-center flex-col items-center gap-4 mt-8">
        <div ref={targetSectionRef1} className="px-4">
          <Link href="/logo">
            <h1 className="font-bold text-[32px] sm:text-[36px] md:text-[42px] lg:text-[64px] text-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 text-[#00133B]">
              รับออกแบบโลโก้{" "}
              <br className="md:hidden lg:hidden xl:hidden 2xl:hidden" />
              <b className="font-bold text-[40px]">990 -. </b>
              <br className="md:hidden lg:hidden xl:hidden 2xl:hidden" />
              ราคาเดียว <br />
              <i className="text-[18px] sm:text-[36px] md:text-[42px] lg:text-[64px]">
                การันตีผลงานมาแล้วกว่า 3,000 แบรนด์
              </i>
            </h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 ">
          <div className="grid grid-cols-3 gap-1 lg:gap-6 drop-shadow-lg">
            {images.slice(0, 9).map((img, index) => (
              <div
                key={index}
                className="h-[80px] w-[80px] sm:h-[90px] sm:w-[90px] lg:h-[350px] lg:w-[350px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                onClick={() => openModal(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={135.53}
                  height={135.53}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#00133B] w-[60%] flex justify-center py-2 px-4 rounded-[50px] text-white transition-transform duration-300 ease-in-out transform hover:scale-105">
          <Link
            href="/logo"
            className="text-[14px] sm:text-[18px] lg:text-[24px] cursor-pointer text-white "
          >
            ..ดูผลงานโลโก้เพิ่มเติม คลิก..
          </Link>
        </div>

        <p className="text-[12px]">หรือ</p>
        <a
          href="https://www.facebook.com/ggdesignlogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col justify-center items-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-125">
            <Image
              src={facebookLogo}
              alt="facebookLogo"
              width={22}
              height={22}
              className="md:w-[50px]"
            />
            <p className="text-[12px] sm:text-[18px] text-[#1877F2]">
              รับออกแบบโลโก้ By GG Design
            </p>
          </div>
        </a>

        <div ref={targetSectionRef2} className="text-center px-4 mt-16 mb-4">
          <h1 className="text-[18px] sm:text-[28px] md:text-[32px] lg:text-[50px]  text-[#00133B]">
            มีโลโก้เป็นของตัวเองเเล้ว
            <br />
            มีเว็บไซต์เป็นของตัวเอง หรือยัง?
          </h1>
        </div>

        <div className="text-center px-4">
          <h1 className="font-bold text-[32px] sm:text-[38px] md:text-[42px] lg:text-[64px] text-[#00133B]">
            รับออกแบบ <br className="sm:hidden" />
            สร้างเว็บไซต์
            <br />
            และระบบต่างๆ ตามใจคุณ
            <br />
            เริ่มต้นที่ 3,990 บาท
          </h1>
        </div>
        <WebPreview />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center pt-40 sm:z-50 sm:px-4 lg:pt-20">
          <div
            className="relative max-w-screen-lg mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="absolute right-1/2 top-[-50px] text-white font-bold text-[24px] sm:text-[32px] lg:text-[40px]  lg:right-1/2  sm:top-[-40px] lg:top-[-60px]"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <button
                className="absolute left-[-30px] top-1/4 text-white font-bold text-[24px] sm:text-[32px] lg:text-[50px] lg:top-1/3"
                onClick={prevImage}
              >
                &lt;
              </button>
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={320}
                height={320}
                className="w-[300px]  sm:w-[520px]  lg:w-[570px]  object-cover"
              />
              <button
                className="absolute right-[-30px] top-1/4 text-white font-bold text-[24px] sm:text-[32px] lg:text-[50px] lg:top-1/3"
                onClick={nextImage}
              >
                &gt;
              </button>
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 mt-4 ">
              {images.slice(1).map((img, index) => (
                <button
                  key={index}
                  className={`w-[50px]  sm:w-[70px]  lg:w-[100px] mx-auto ${
                    currentImageIndex === index + 1
                      ? "border-2 border-white"
                      : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index + 1)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={100}
                    height={75}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <FloatingContact />
      <Feedback />

      <div className="lg:flex flex-col justify-center items-center  mb-10 lg:px-0 ">
        <QandA
          question={"หากต้องการว่าจ้างจะต้องทำอย่างไร?"}
          ans1={"1. ติดต่อทีมงานผ่านทางช่องทางต่างๆ เช่น ไลน์ หรือเฟสบุ๊ค "}
          ans2={"2. เเจ้งความต้องการของลูกค้า"}
          ans3={"2. ตกลงราคา"}
          ans4={
            "3. ชำระเงินก่อนเริ่มงาน โดยชำระ 100% สำหรับงานออกแบบโลโก้ เเละ 50% สำหรับงานจัดทำเว็บไซต์ และชำระที่เหลือเมื่อส่งมอบงานลูกค้าเสร็จสิ้น"
          }
          ans5={"4. ส่งงานให้ลูกค้าตรวจสอบ และแก้ไขตามความต้องการของลูกค้า"}
        />

        <QandA
          question={"ใช้เวลาดำเนินการกี่วัน ?"}
          ans1={
            "1. บริการออกแบบโลโก้ จะใช้เวลาประมาณ 1 วัน โดยขึ้นอยู่กับคิวงานนั้นๆ เป็นหลัก"
          }
          ans2={
            "2. บริการจัดทำเว็บไซต์ จะขึ้นอยู่กับลักษณะของเว็บไซต์ที่ลูกค้าต้องการ โดยเมื่อสอบถามถึงความต้องการของลูกค้าเสร็จสิ้นเเล้ว จะใช้เวลาในการออกเเบบเว็บไซต์ เพื่อส่งให้ลูกค้าเพื่อทำการอนุมัติเเบบภายใน 3 วัน เเละจะมีการรายงานความคืบหน้าเป็นประจำทุกวัน"
          }
        />

        <QandA
          question={"บริการออกแบบโลโก้จะได้รับไฟล์อะไรบ้าง ?"}
          ans1={
            "ไฟล์ที่ได้รับ คือ .jpg .png .ai หรือไฟล์อื่นๆ ตามที่ลูกค้าต้องการ"
          }
        />
      </div>
      <hr className="mt-2 border-[1px] w-full mx-auto" />
    </div>
  );
}
