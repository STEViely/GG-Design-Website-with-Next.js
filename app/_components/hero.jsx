import Image from "next/image";
import Hero from "@/public/Hero.jpg";
import Typewriter from "typewriter-effect";

export default function HeroSection({ targetSectionRef1, targetSectionRef2 }) {
  const scrollToSection1 = () => {
    targetSectionRef1.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection2 = () => {
    targetSectionRef2.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full relative drop-shadow-lg">
      <Image src={Hero} alt="heroSection" cover="true" priority />
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-[rgba(0,19,59,0.8)] mix-blend-multiply" />
      <div className="absolute top-0 left-0 w-full h-full z-10 text-white flex flex-col items-center justify-center lg:justify-around">
        <h1 className="font-bold text-[18px] md:text-[24px] lg:text-[32px] xl:text-[45px] 2xl:text-[50px]">
          <Typewriter
            options={{
              strings: [
                "ออกเเบบโลโก้ที่คุณเลือกได้",
                "ออกแบบเว็บไซต์ตามใจคุณ",
                "สร้างเว็บไซต์เเละระบบที่คุณกำหนดเองได้",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="flex gap-4">
          <div
            onClick={scrollToSection1}
            className="border  border-white  rounded-lg p-4 w-[50%] hover:bg-white cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-[rgba(0,19,59,0.8)] flex flex-col  items-center justify-center md:w-[300px] md:h-[250px] lg:w-[350px] lg:h-[300px] xl:w-[500px] xl: 2xl:w-[600px] 2xl:h-[400px]"
          >
            <h1 className="text-[14px] md:text-[20px] lg:text-[28px] xl:text-[40px] 2xl:text-[45px]">
              Logo Design
            </h1>
            <p className="text-[14px] md:text-[20px] lg:text-[28px] xl:text-[40px] 2xl:text-[45px]">
              รับออกเเบบโลโก้
            </p>
          </div>
          <div
            onClick={scrollToSection2}
            className="border border-white p-4 w-[50%] rounded-lg hover:bg-white cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-[rgba(0,19,59,0.8)] flex flex-col  items-center justify-center md:w-[300px] md:h-[250px] lg:w-[350px] lg:h-[300px] xl:w-[500px] xl: 2xl:w-[600px] 2xl:h-[400px]"
          >
            <h1 className="text-[14px] md:text-[20px] lg:text-[28px] xl:text-[40px] 2xl:text-[45px]">
              Web Design
              <br className="xl:hidden" /> and Develop
            </h1>
            <p className="text-[14px] md:text-[20px] lg:text-[28px] xl:text-[40px] 2xl:text-[45px]">
              ออกเเบบเเละ
              <br className="md:hidden" />
              จัดทำเว็บไซต์
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
