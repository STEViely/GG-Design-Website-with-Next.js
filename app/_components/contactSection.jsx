import Image from "next/image";
import Line from "@/public/Line.png";
import Chat from "@/public/Chat.png";

export default function ContactSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white p-10">
      <h1 className="text-[20px] sm:text-[24px] lg:text-[36px] text-center">
        สอบถามรายละเอียดเพิ่มเติม
      </h1>
      <div className="flex gap-4 sm:gap-6 lg:gap-12">
        <a
          href="https://lin.ee/MsoarOB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-[36px] h-[36px] lg:w-[50px] lg-h0[50px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125">
            <Image src={Line} alt="line" cover="true" />
          </button>
        </a>
        <a
          href="https://m.me/ggdesignlogo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-[36px] h-[36px] lg:w-[50px] lg-h0[50px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125">
            <Image src={Chat} alt="chat" cover="true" />
          </button>
        </a>
      </div>
    </div>
  );
}
