import { useState } from "react";

export default function QandA({ question, ans1, ans2, ans3, ans4, ans5 }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[85%] mx-auto mt-4">
      <div
        className="flex justify-between items-center border p-4 rounded-lg bg-[#CCD0D8] cursor-pointer"
        onClick={toggleAnswer}
      >
        <h1>{question}</h1>
        <button>
          {isOpen ? (
            <span>▲</span> // ปุ่มชี้ขึ้น
          ) : (
            <span>▼</span> // ปุ่มชี้ลง
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-[1px] p-4 rounded-lg bg-white ">
          <p>{ans1}</p>
          <p>{ans2}</p>
          <p>{ans3}</p>
          <p>{ans4}</p>
          <p>{ans5}</p>
        </div>
      )}
    </div>
  );
}
