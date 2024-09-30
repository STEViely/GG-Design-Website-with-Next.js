import "@/app/globals.css";
import Header from "./_components/header";
import { ibmThai } from "./_ui/font";
import Footer from "./_components/footer";

export const metadata = {
  title: {
    template: "GG Design | %s",
    default: "GG Design",
  },
  description:
    "รับออกเเบบโลโก้, รับออกเเบบเว็บไซต์, รับสร้างเว็บไซต์, logo design, website design, web building, รับทำเว็บไซต์, ทำโลโก้, ทำLogo, รับทำเว็บไซต์, รับเขียนwebsite, ออกแบบ, gg design, GG Design, ราคาประหยัด",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://ggdesign-graphic.com/",
    title: "GG Design",
    description:
      "รับออกเเบบโลโก้, รับออกเเบบเว็บไซต์, รับสร้างเว็บไซต์, logo design, website design, web building",
    images: [
      {
        url: "https://ggdesign-graphic.com/cover.jpg", // URL ของรูปภาพที่ใส่ใน public folder
        width: 1200,
        height: 630,
        alt: "GG Design - รับออกแบบเว็บไซต์และโลโก้",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={ibmThai.className}>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-grow">{children}</main>

          <Footer className="w-full z-10" />
        </div>
      </body>
    </html>
  );
}
