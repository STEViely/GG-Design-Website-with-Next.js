import Image from "next/image";

export default function WebContainer({ title, content, img, reverse }) {
  return (
    <div
      className={`p-8 flex justify-center gap-8 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-[200px] flex justify-center flex-col ">
        <h1 className="font-bold ">{title}</h1>
        <p>{content}</p>
      </div>
      <div>
        <Image
          src={img}
          alt="webPreview"
          width={50}
          height={50}
          className="w-[200px] drop-shadow-lg"
        />
      </div>
    </div>
  );
}
