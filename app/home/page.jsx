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

export default function Page() {
  const images = [
    { src: A1, alt: "Main Picture" },
    { src: A2, alt: "Main Picture" },
    { src: A3, alt: "Main Picture" },
    { src: A4, alt: "Main Picture" },
    { src: A5, alt: "Main Picture" },
    { src: A6, alt: "Main Picture" },
    { src: A7, alt: "Main Picture" },
    { src: A8, alt: "Main Picture" },
    { src: A9, alt: "Main Picture" },
    { src: A10, alt: "Main Picture" },
  ];

  const webs = [
    { src: G1, alt: "Web picture" },
    { src: G2, alt: "Web picture" },
    { src: G3, alt: "Web picture" },
    { src: G4, alt: "Web picture" },
    { src: G5, alt: "Web picture" },
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={Bgg}
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="opacity-30"
      />

      {/* Centered Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
        <Image src={GGD2} alt="logo" width={303} height={303} />
      </div>

      {/* Responsive text */}
      <div className="absolute top-[180px] md:top-[280px] left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl md:text-[48px]">บริการออกเเบบ</h1>
      </div>

      {/* Responsive description text */}
      <div className="w-full px-4 md:w-[710px] md:h-[114px]">
        <p className="text-[14px] md:text-[20px] lg:text-[20px] 2xl:text-[28px] absolute top-[200px] md:top-[320px] lg:top-[320px] left-1/2 transform -translate-x-1/2 mt-4 text-center">
          <b>“ GG Design ”</b> บริการออกแบบโลโก้, ออกแบบและสร้างเว็บไซต์{" "}
          <br className="lg:hidden md:hidden" />
          เพื่อให้ธุรกิจกของคุณ มีความน่าเชื่อถือและเป็นมืออาชีพ
          ในราคาที่เข้าถึงง่าย ยินดีให้คำปรึกษาฟรี
        </p>
      </div>

      {/* Centered Images - Responsive */}
      <div className="absolute w-full flex justify-center top-[320px] md:top-[450px] lg:top-[420px]  2xl:top-[420px]">
        <div className="grid grid-cols-5 md:grid-cols-5 gap-[5px] justify-center mt-4">
          {images.map((el, index) => (
            <Image
              src={el.src}
              alt={el.alt}
              width={148.83}
              height={148.83}
              key={index}
              className="drop-shadow-lg w-[50px] md:w-[120px] 2xl:w-[100px]"
            />
          ))}
        </div>
      </div>

      {/* Web Images - Responsive */}
      <div className="absolute w-full flex justify-center top-[440px] md:top-[720px] lg:top-[600px] 2xl:top-[640px]">
        <div className="grid grid-cols-5 md:grid-cols-5 gap-[5px] justify-center mt-4">
          {webs.map((el, index) => (
            <Image
              src={el.src}
              alt={el.alt}
              width={251.33}
              height={177.82}
              key={index}
              className="drop-shadow-lg w-[60px] md:w-[140px] 2xl:w-[180px]"
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <Link href="/">
        <button className="absolute bottom-[80px] md:bottom-[80px] lg:bottom-[40px] left-1/2 transform -translate-x-1/2 w-[150px] md:w-[172px] h-[40px] md:h-[43px] rounded-[42px] bg-[#00133B] text-white text-[16px] md:text-[24px] drop-shadow-lg hover:transition-transform duration-300 ease-in-out hover:scale-105">
          เข้าสู่เว็บไซต์
        </button>
      </Link>
    </div>
  );
}
