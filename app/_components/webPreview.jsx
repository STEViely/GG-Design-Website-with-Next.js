import WebContainer from "./webContainer";
import Web1 from "@/public/webPreview/web1.jpg";
import Web2 from "@/public/webPreview/web2.jpg";
import Web4 from "@/public/webPreview/web4.jpg";
import ChatRealtime from "@/public/webPreview/RealtimeChat.jpg";
import Responsive from "@/public/webPreview/resposive.jpg";
import WebApplication from "@/public/webPreview/WebApplication.jpg";
import Port from "@/public/webPreview/port.jpg";
import SocialNetwork from "@/public/webPreview/SocialNetwork.jpg";
export default function WebPreview() {
  const info = [
    {
      id: 1,
      title: "Static Website",
      content:
        "เหมาะสำหรับเว็บไซต์ที่ต้องการนำเสนอข้อมูลของบริษัท หรือ องค์กร เพื่อสร้างตัวตน เเละทำให้คุณเป็นที่รู้จัก",
      img: Web1,
    },
    {
      id: 2,
      title: "Dynamic Website",
      content:
        "เป็นเว็บไซต์ที่คุณสามารถเพิ่มลด หรือ แก้ไขเนื้อหาภายในเว็บไซต์เองได้ ",
      img: Web2,
    },

    {
      id: 3,
      title: "E-commerce",
      content:
        "เว็บไซต์ที่เน้นการขายสินค้าออนไลน์ มีฟีเจอร์ตะกร้าสินค้า ระบบชำระเงินออนไลน์ และการจัดการคำสั่งซื้อ",
      img: Web4,
    },
    {
      id: 4,
      title: "Portfolio",
      content:
        "สำหรับแสดงผลงานหรือโปรไฟล์ส่วนตัว เช่น การนำเสนอผลงาน การออกแบบ ",
      img: Port,
    },
    {
      id: 5,
      title: "Web Application",
      content: "เว็บที่มีฟังก์ชันซับซ้อน คล้ายกับแอปพลิเคชัน ",
      img: WebApplication,
    },
    {
      id: 6,
      title: "Social Network",
      content:
        "เป็นเว็บไซต์ที่ให้ผู้ใช้สามารถสร้างเนื้อหาและโต้ตอบกันได้ เช่น Facebook, Instagram",
      img: SocialNetwork,
    },

    {
      id: 7,
      title: "Realtime Chat",
      content: "ระบบแชทที่สามารถพูดคุยโต้ตอบได้เเบบเรียลไทม์",
      img: ChatRealtime,
    },
    {
      id: 8,
      title: "Responsive",
      content:
        "เว็บไซต์ของคุณจะสามารถทำงานได้บนทุกอุปกรณ์ได้อย่างสวยงามตามความต้องการของคุณ",
      img: Responsive,
    },
  ];

  return (
    <div>
      {info.map((el, index) => (
        <WebContainer
          key={el.id}
          title={el.title}
          content={el.content}
          img={el.img}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
