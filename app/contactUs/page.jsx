import Image from "next/image";
import Line from "@/public/Line.png";
import Chat from "@/public/Chat.png";
import FACEBOOK from "@/public/FACEBOOK.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white pt-10 flex flex-col items-center pb-10">
      <h1 className="font-bold mt-8 text-[22px] px-4 md:text-[30px] lg:text-[40px] text-center">
        เริ่มต้นสร้างธุรกิจที่โดดเด่นและเป็นที่จดจำ
        <br />
        กับ GG Design วันนี้!
      </h1>
      <div className="mt-4 p-4">
        <p className="text-center md:text-[22px]">
          ติดต่อเรา เพื่อปรึกษาและขอใบเสนอราคา <br className="lg:hidden" />
          หรือดูผลงานของเราก่อนตัดสินใจ!
        </p>
      </div>
      <div className="p-4 gap-4 flex flex-col">
        <p className="text-center md:text-[18px]">
          เยี่ยมชม facebook ของเราที่&nbsp;
          <Link
            href="https://www.facebook.com/ggdesignlogo"
            target="_blank"
            className="underline font-bold text-blue-800 cursor-pointer"
          >
            GG Design
          </Link>
        </p>
        <Link href="https://www.facebook.com/ggdesignlogo" target="_blank">
          <Image
            src={FACEBOOK}
            alt="facebook"
            width={90}
            height={90}
            className="w-[300px] md:w-[600px] xl:w-[1000px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center mt-4 gap-2">
        <h1 className="underline md:text-[18px]">สอบถามเพิ่มเติม</h1>
        <div className="flex justify-center gap-6 md:gap-8 lg:gap-12">
          <a
            href="https://lin.ee/MsoarOB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[36px] h-[36px] md:w-[50px] lg:w-[80px] lg:h-[50px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125">
              <Image src={Line} alt="line" cover="true" />
            </button>
          </a>
          <a
            href="https://m.me/ggdesignlogo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[36px] h-[36px] md:w-[50px] lg:w-[82px] lg-h0[50px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125">
              <Image src={Chat} alt="chat" cover="true" />
            </button>
          </a>
        </div>
      </div>
      <p className="mt-10 md:mt-20 text-[16px] md:text-[18px]">
        &quot;หวังเป็นอย่างยิ่งที่จะได้ร่วมงานกับคุณ&quot;
      </p>
    </div>
  );
}
