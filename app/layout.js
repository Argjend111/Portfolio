import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  title: "Argjend Bytyci | Software Engineer",
  description:
"I'm Argjend Bytyci, a Software Engineer from Kosovo building scalable, high-performance systems across web, desktop, and backend technologies.",
  keywords: [
    "Argjend Bytyci",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "PHP Developer",
    "Kosovo Developer Portfolio",
    "Web Developer Portfolio",
  ],
  creator: "Argjend Bytyci",
  siteName: "Argjend Bytyci Portfolio",
  locale: "en_US",
  type: "website",
  publisher: "Argjend Bytyci",
  authors: [
    {
      name: "Argjend Bytyci",
      url: "https://www.linkedin.com/in/argjend-byty%C3%A7i-485328270",
    },
  ],
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} min-h-screen overflow-x-hidden bg-slate-50 font-[family-name:var(--font-outfit)] text-slate-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
