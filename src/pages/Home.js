import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalInfo } from "../data/personalData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
  const { name, tagline, img } = personalInfo;
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const h4Ref = useRef(null);
  const imgRef = useRef(null);

  let tl = gsap.timeline();
  useEffect(() => {
    try {
      tl.from(h1Ref.current, {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut"
      }, "<")
        .from(h2Ref.current, { x: "-100%", delay: 0.5, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
        .from(h3Ref.current, { x: "-100%", delay: 0.4, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
        .from(h4Ref.current, { x: "-100%", delay: 0.3, opacity: 0, duration: 2, ease: "Power3.easeOut" }, "<")
        .from(imgRef.current, { x: "200%", delay: 0.2, opacity: 0, duration: 5, ease: "Power3.easeOut" }, "<");
    } catch (error) {
      console.error("GSAP Animation Error:", error);
    }
  }, []);


  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow flex flex-col justify-center">
          <Hero />
          <div className="flex items-center justify-center">
            {/* Left side with text */}
            <div>
              <h1 ref={h1Ref} className="text-6xl font-bold m-4 text-orange-500">
                Hello 😆, I'm
              </h1>
              <h2 ref={h2Ref} className="text-6xl bg-gradient-to-r from-sky-500 to-indigo-500 inline-block text-transparent bg-clip-text font-bold p-4">
                {name}
              </h2>
              <h2 ref={h3Ref} className="text-5xl p-4 text-gray-400">
                {tagline}
              </h2>
              <h3 ref={h4Ref} className="text-xl p-4 text-purple-400">
                "Write More, Learn More~"
              </h3>
            </div>

            {/* Right side with image */}
            <img ref={imgRef} className="w-64 h-64 object-cover rounded-full ml-4" src={img} alt="" />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
