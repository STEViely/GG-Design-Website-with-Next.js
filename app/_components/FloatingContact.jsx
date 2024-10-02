import Image from "next/image";

export default function FloatingContact() {
  return (
    <div className=" flex  fixed bottom-5 right-1 md:right-3 flex-col gap-2 z-50">
      <a
        href="https://lin.ee/MsoarOB"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <Image
            src="/Line.png"
            alt="line"
            width={52}
            height={52}
            className="w-[42px] transition-transform duration-300 ease-in-out transform hover:scale-125 md:w-[62px]"
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
            width={50}
            height={50}
            className="w-[42px] transition-transform duration-300 ease-in-out transform hover:scale-125 md:w-[62px]"
          />
        </button>
      </a>
    </div>
  );
}
