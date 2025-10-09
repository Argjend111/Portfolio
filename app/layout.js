import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight:["400","500","600","700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Argjend Bytyci | Software Engineer",
  description:
    "I'm Argjend Bytyçi — a Software Engineer from Kosovo passionate about building scalable, elegant, and high-performance web applications using Next.js, PHP, and modern web technologies.",
  keywords: [
    "Argjend Bytyçi",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "PHP Developer",
    "Kosovo Developer Portfolio",
    "Web Developer Portfolio",
  ],
  creator: "Argjend Bytyçi",
  siteName: "Argjend Bytyçi Portfolio",
  locale: "en_US",
  type: "website",
  publisher: "Argjend Bytyçi",
  authors: [
    {
      name: "Argjend Bytyçi",
      url: "https://www.linkedin.com/in/argjend-byty%C3%A7i-485328270",
    },
  ],
  metadataBase: new URL("https://your-portfolio-domain.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
