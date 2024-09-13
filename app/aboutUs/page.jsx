import AboutUs from "@/public/aboutUs.jpg";
import Image from "next/image";
import ContactSection from "../_components/contactSection";

export default function Page() {
  return (
    <>
      <div className="w-full relative drop-shadow-lg flex flex-col items-center">
        {/* Remove absolute positioning from Image */}
        <Image src={AboutUs} alt="About Us" className="w-full h-auto" />

        <div className="gap-4 z-10 px-8 py-4 rounded-lg flex flex-col justify-center bg-white w-[80%] absolute top-[110px] drop-shadow-md md:top-[280px]">
          <h1 className="md:text-[28px] font-bold">เกี่ยวกับเรา</h1>
          <p className="text-[12px] md:text-[24px]">
            <b>“ GG Design ”</b> บริการออกแบบโลโก้, ออกแบบและสร้างเว็บไซต์
            เพื่อให้ธุรกิจกของคุณ มีความน่าเชื่อถือและเป็นมืออาชีพ
            ในราคาที่เข้าถึงง่าย ยินดีให้คำปรึกษา <b>ฟรี</b>
          </p>
        </div>
      </div>
      {/* Now ContactSection will naturally flow below */}
      <ContactSection />
    </>
  );
}
