import Image from "next/image";

export default function WebContainer({ text, content, img, reverse }) {
  return (
    <div
      className={`p-4 flex justify-center gap-8 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-[200px] flex justify-center flex-col ">
        <h1 className="font-bold">{text}</h1>
        <p>{content}</p>
      </div>
      <div>
        <Image
          src={img}
          alt="webPreview"
          width={50}
          height={50}
          className="w-[200px]"
        />
      </div>
    </div>
  );
}
