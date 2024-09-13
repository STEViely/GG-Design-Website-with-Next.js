import { useState, useRef } from "react";
import Image from "next/image";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: "/111.png", alt: "Main Picture" },
    { src: "/222.png", alt: "Main Picture" },
    { src: "/333.png", alt: "Main Picture" },
    { src: "/444.png", alt: "Main Picture" },
    { src: "/555.png", alt: "Main Picture" },
  ];

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
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // ฟังก์ชันตรวจจับการสไลด์
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // สไลด์ไปทางซ้าย (ต่อไปยังรูปถัดไป)
      nextImage();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // สไลด์ไปทางขวา (ย้อนกลับไปยังรูปก่อนหน้า)
      prevImage();
    }
  };

  return (
    <div>
      <button onClick={() => openModal(0)}>Open Modal</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center z-50">
          <div
            className="relative max-w-screen-lg mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeModal}
            >
              ×
            </button>

            <button
              className="absolute left-4 top-1/2 text-white text-3xl"
              onClick={prevImage}
            >
              &lt;
            </button>

            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={500}
              height={500}
              className="object-cover"
            />

            <button
              className="absolute right-4 top-1/2 text-white text-3xl"
              onClick={nextImage}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
