"use client";

import { useState } from "react";
import Image from "next/image";
import LogoCate from "@/app/_components/logoCate";

export default function Page() {
  const images = [
    { src: "/luxury/lux (1).jpg", alt: "lux" },
    { src: "/luxury/lux (3).jpg", alt: "lux" },
    { src: "/luxury/lux (4).jpg", alt: "lux" },
    { src: "/luxury/lux (5).jpg", alt: "lux" },
    { src: "/luxury/lux (6).jpg", alt: "lux" },
    { src: "/luxury/lux (7).jpg", alt: "lux" },
    { src: "/luxury/lux (8).jpg", alt: "lux" },
    { src: "/luxury/lux (9).jpg", alt: "lux" },
    { src: "/luxury/lux (10).jpg", alt: "lux" },
    { src: "/luxury/lux (11).jpg", alt: "lux" },
    { src: "/luxury/lux (12).jpg", alt: "lux" },
    { src: "/luxury/lux (14).jpg", alt: "lux" },
    { src: "/luxury/lux (15).jpg", alt: "lux" },
    { src: "/luxury/lux (16).jpg", alt: "lux" },
    { src: "/luxury/lux (17).jpg", alt: "lux" },
    { src: "/luxury/lux (18).jpg", alt: "lux" },
    { src: "/luxury/lux (19).jpg", alt: "lux" },
    { src: "/luxury/lux (20).jpg", alt: "lux" },
    { src: "/luxury/lux (21).jpg", alt: "lux" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="bg-[#CCD0D8] p-10 mx-auto flex flex-col items-center">
        <LogoCate />

        <div className="grid grid-cols-2 lg:grid-cols-3 mx-auto gap-[20px] mt-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer w-[150px] md:w-[200px] lg:w-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative ">
            <button
              className="absolute text-white font-bold text-[40px] right-[10px] top-[-8px] md:top-[2px] lg:right-[240px]  lg:top-[-10px] "
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <button
                className="absolute left-4 lg:left-40 top-1/4 text-white font-bold text-[40px] md:left-[10px]"
                onClick={prevImage}
              >
                &lt;
              </button>

              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={400}
                height={400}
                className="sm:w-[400] lg:mt-30 lg:w-[600px] "
              />
              <button
                className="absolute right-4 lg:right-40 top-1/4 text-white font-bold text-[40px] md:right-[10px]"
                onClick={nextImage}
              >
                &gt;
              </button>
            </div>
            <div className="mx-auto grid grid-cols-6 lg:grid-cols-10  gap-2 mt-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] ${
                    currentImageIndex === index
                      ? "transition-transform duration-300 ease-in-out transform scale-150"
                      : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image src={img.src} alt={img.alt} width={60} height={60} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
