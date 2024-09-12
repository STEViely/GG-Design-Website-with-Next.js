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
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={ibmThai.className}>
        <div className=" flex flex-col ">
          <Header />

          <main>{children}</main>

          <Footer className="w-full z-10 " />
        </div>
      </body>
    </html>
  );
}
