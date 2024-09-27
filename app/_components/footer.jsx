import Image from "next/image";
export default function Footer() {
  return (
    <div className="hidden lg:h-[100px] lg:flex justify-around items-start gap-10 mx-auto my-16 relative bottom-0 left-0 w-full">
      <Image src="/GGD2.png" alt="footerLogo" width={102.54} height={102.54} />
      <hr className="ml-2 border-[1px] h-[104.51px]" />
      <div className="w-[30%]">
        <h1>เกี่ยวกับเรา</h1>
        <p>
          “ GG Design ” บริการออกแบบโลโก้, ออกแบบและสร้างเว็บไซต์
          เพื่อให้ธุรกิจของคุณ ดูน่าเชื่อถือและเป็นมืออาชีพ ในราคาที่เข้าถึงง่าย
          ยินดีให้คำปรึกษาฟรี
        </p>
      </div>

      <div className="w-[20%]">
        <h1>บริการ</h1>
        <li>ออกแบบโลโก้</li>
        <li>ออกแบบและสร้างเว็บไซต์</li>
      </div>
      <div className="w-[20%]">
        <h1>ติดต่อเรา</h1>
        <div className="flex gap-6">
          <a
            href="https://lin.ee/MsoarOB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <Image
                src="/Line.png"
                alt="line"
                width={19}
                height={18}
                className="w-[22px]"
              />
            </button>
          </a>
          <a
            href="https://m.me/ggdesignlogo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <Image
                src="/Chat.png"
                alt="chat"
                width={18}
                height={18}
                className="w-[20px] "
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
