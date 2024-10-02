import "@/app/globals.css";
import Header from "./_components/header";
import { ibmThai } from "./_ui/font";
import Footer from "./_components/footer";
import Script from "next/script"; // เพิ่ม Script จาก next

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
        url: "https://ggdesign-graphic.com/cover.jpg",
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
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16720705032"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16720705032');
          `}
        </Script>
      </head>
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
