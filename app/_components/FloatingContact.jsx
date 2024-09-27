import Image from "next/image";

export default function FloatingContact() {
  return (
    <div className="hidden sm:flex fixed bottom-5 right-5 flex-col gap-6 z-50">
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
            className="w-[52px] transition-transform duration-300 ease-in-out transform hover:scale-125"
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
            className="w-[50px] transition-transform duration-300 ease-in-out transform hover:scale-125"
          />
        </button>
      </a>
    </div>
  );
}
