import Image from "next/image";

export default function WebContainer({ title, content, img, reverse }) {
  return (
    <div
      className={`p-8 flex justify-center gap-8 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-[200px] md:w-[250px] lg:w-[340px] xl:w-[400px] 2xl:w-[500px] flex justify-center flex-col ">
        <h1 className="font-bold md:text-[30px] text-[#00133B]">{title}</h1>
        <p className="xl:text-[20px] text-[#00133B]">{content}</p>
      </div>
      <div>
        <Image
          src={img}
          alt="webPreview"
          width={50}
          height={50}
          className="w-[200px] md:w-[250px] lg:w-[340px] xl:w-[400px] 2xl:w-[500px] drop-shadow-lg"
        />
      </div>
    </div>
  );
}
