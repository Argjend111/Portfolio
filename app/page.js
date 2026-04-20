"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import LanguageInterest from "./components/LanguageInterest";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import StickySocialBar from "./components/StickySocialBar";
import Work from "./components/Work";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen key="loader" />}</AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Navbar />
          <main className="relative pb-32">
            <Header />
            <Services />
            <Work />
            <About />
            <Skills />
            <LanguageInterest />
            <Contact />
          </main>
          <StickySocialBar />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
