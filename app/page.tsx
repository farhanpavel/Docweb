"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Header from "./_components/Header/page";
import Hero from "./Hero/page";
import Footer from "./_components/Footer/page";
import About from "./About/page";
import Works from "./Works/page";
import Service from "./Servic/page";
import Testimonials from "./Testimonials/page";
import Blogs from "./Blogs/page";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      <div className="bg-[#F7FAFF]">
        <Header />
        <div>
          <Hero />
        </div>
      </div>
      <div className="mt-[8%] h-1/4">
        <About />
      </div>
      <div className="mt-[8%] h-1/4">
        <Works />
      </div>
      <div className="mt-[12%] h-1/4">
        <Service />
      </div>
      <div className="mt-[12%] h-1/4">
        <Testimonials />
      </div>
      <div className="mt-[12%] h-1/4">
        <Blogs />
      </div>

      <div className="mt-[8%] h-1/4 p-12 text-center md:text-left bg-white mb-6 border-t-[1px] border-gray-200">
        <Footer />
      </div>

      {showScroll && (
        <button 
          onClick={scrollTop} 
          className="fixed bottom-10 right-10 p-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-gray-900 transition-colors"
        >
          ↑
        </button>
      )}
    </div>
  );
}
