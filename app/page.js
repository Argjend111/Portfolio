"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import StickySocialBar from "./components/StickySocialBar";
import Skills from "./components/Skills";
import LanguageInterest from "./components/LanguageInterest";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (typeof window !== "undefined" && isLoading) {
    setTimeout(() => setIsLoading(false), 1500);
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <Header />
          <About />
          <Services />
          <Work />
          <Skills />
          <LanguageInterest />
          <Contact />
          <StickySocialBar />
          <Footer />
        </>
      )}
    </>
  );
}
