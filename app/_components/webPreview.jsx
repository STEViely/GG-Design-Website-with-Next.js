import WebContainer from "./webContainer";
import Web1 from "@/public/webPreview/web1.jpg";
import Web2 from "@/public/webPreview/web2.jpg";
import Web3 from "@/public/webPreview/web3.jpg";
import Web4 from "@/public/webPreview/web4.jpg";

export default function WebPreview() {
  const info = [
    {
      id: 1,
      text: "Static Website",
      content:
        "เหมาะสำหรับเว็บไซต์ที่ต้องการนำเสนอข้อมูลของบริษัท หรือ องค์กร เพื่อสร้างตัวตน เเละทำให้คุณเป็นที่รู้จัก",
      img: Web1,
    },
    {
      id: 2,
      text: "Dynamic Website",
      content:
        "เป็นเว็บไซต์ที่คุณสามารถเพิ่มลด หรือ แก้ไขเนื้อหาภายในเว็บไซต์เองได้ ",
      img: Web2,
    },
    {
      id: 3,
      text: "Responsive",
      content: "สามารถเเสดงได้บนทุกอุปกรณ์ได้อย่างสวยงามตามความต้องการของคุณ",
      img: Web3,
    },
    {
      id: 4,
      text: "E-commerce",
      content:
        "เว็บไซต์ที่เน้นการขายสินค้าออนไลน์ มีฟีเจอร์ตะกร้าสินค้า ระบบชำระเงินออนไลน์ และการจัดการคำสั่งซื้อ",
      img: Web4,
    },
  ];

  return (
    <div className="">
      {info.map((el, index) => (
        <WebContainer
          key={el.id}
          text={el.text}
          content={el.content}
          img={el.img}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
