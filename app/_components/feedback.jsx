import Image from "next/image";
import { useState } from "react";
export default function Feedback() {
  const comments = [
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999430/Screenshot_2024-10-03_150934_njg4la.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999430/Screenshot_2024-10-03_150911_ku1crf.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999430/Screenshot_2024-10-03_150557_k1hslh.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999430/Screenshot_2024-10-03_150513_lfo0av.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999430/Screenshot_2024-10-03_150535_yg8bvc.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999430/Screenshot_2024-10-03_150448_nszipc.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150840_ocxmih.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150433_hxxhux.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150825_vfepic.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150411_acfk9h.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150354_wdde7j.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150335_gmvfcp.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150736_cwn8xe.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150259_ktp29y.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150659_sbvvtp.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999429/Screenshot_2024-10-03_150627_hhntfv.png",
      alt: "comment",
    },
    {
      src: "https://res.cloudinary.com/dbmscl9hm/image/upload/v1727999428/Screenshot_2024-10-03_150312_uakq5z.png",
      alt: "comment",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-[85%] mx-auto mt-4">
      <div
        className="flex justify-between items-center p-4 rounded-lg bg-[#00133B] cursor-pointer"
        onClick={toggleAnswer}
      >
        <h1 className="text-white xl:text-[24px]">รีวิวจากลูกค้าของเรา</h1>
        <button>
          {isOpen ? (
            <p className="text-white">ซ่อน</p> // ปุ่มชี้ขึ้น
          ) : (
            <p className="text-white">เเสดง</p> // ปุ่มชี้ลง
          )}
        </button>
      </div>
      {isOpen && (
        <div className="w-[0%] md:w-[50%] lg:w-[70%] mx-auto mt-4">
          {comments.map((el, index) => (
            <Image
              src={el.src}
              alt={el.alt}
              key={el}
              width={250}
              height={0}
              className="w-full"
            />
          ))}
        </div>
      )}
    </div>
  );
}
