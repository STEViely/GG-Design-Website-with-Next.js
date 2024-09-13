"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LogoCate from "@/app/_components/logoCate";

export default function Page() {
  const images = [
    { src: "/modern/modern (1).jpg", alt: "modern" },
    { src: "/modern/modern (3).jpg", alt: "modern" },
    { src: "/modern/modern (4).jpg", alt: "modern" },
    { src: "/modern/modern (5).jpg", alt: "modern" },
    { src: "/modern/modern (6).jpg", alt: "modern" },
    { src: "/modern/modern (7).jpg", alt: "modern" },
    { src: "/modern/modern (8).jpg", alt: "modern" },
    { src: "/modern/modern (9).jpg", alt: "modern" },
    { src: "/modern/modern (10).jpg", alt: "modern" },
    { src: "/modern/modern (11).jpg", alt: "modern" },
    { src: "/modern/modern (12).jpg", alt: "modern" },
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
              <Image
                src={img.src}
                alt={img.alt}
                width={20}
                height={20}
                className="w-[150px] md:w-[200px] lg:w-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
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
