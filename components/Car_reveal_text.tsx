"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CarRevealText = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);
  const box4Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const box = boxRef.current;
      const cover = coverRef.current;

      if (!section || !box || !cover) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Car + black overlay animate from timeline position 0 to 1.
      tl.fromTo(
        box,
        { x: -10 },
        {
          x: () => section.clientWidth - 130,
          duration: 1,
          ease: "none",
        },
        0,
      );

      tl.fromTo(
        cover,
        { x: 80 },
        {
          xPercent: 100,
          duration: 1,
          ease: "none",
        },
        0,
      );

      // Card 1 starts when the car reaches 30%.
      tl.fromTo(
        box1Ref.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.1, ease: "none" },
        0.3,
      );

      // Card 2 starts when the car reaches 50%.
      tl.fromTo(
        box2Ref.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.1, ease: "none" },
        0.5,
      );

      // Card 3 starts when the car reaches 70%.
      tl.fromTo(
        box3Ref.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.1, ease: "none" },
        0.7,
      );

      // Card 4 starts when the car reaches 90%.
      tl.fromTo(
        box4Ref.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 0.7, duration: 0.1, ease: "none" },
        0.9,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden  bg-white"
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        {/* Text background */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-400 ">
          <h1 className="whitespace-nowrap text-center text-5xl font-bold tracking-wider text-black sm:text-7xl lg:text-9xl">
            WELCOME ITZFI
          </h1>
        </div>

        {/* Black overlay */}
        <div ref={coverRef} className="absolute inset-0 z-10 bg-black" />

        {/* Moving car */}
        <div
          ref={boxRef}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2"
        >
          <Image
            src="/bugatti.png"
            alt="Bugatti"
            width={380}
            height={220}
            priority
            className="block h-auto w-[260px] sm:w-[320px] lg:w-[380px]"
          />
        </div>
      </div>
      {/*  card 1 */}
      <div
        className="absolute top-10  right-100 h-40 bg-amber-300 w-80 rounded-2xl px-5 py-5 z-20 opacity-0"
        ref={box1Ref}
      >
        <h1 className="text-7xl font-bold text-black">58 %</h1>
        <p>Increase in pick up point use</p>
      </div>
      {/*  card 2 */}
      <div
        className="absolute top-90  right-130 h-40 bg-[#62e56d] w-80 rounded-2xl px-5 py-5 z-20 opacity-0"
        ref={box2Ref}
      >
        <h1 className="text-7xl font-bold text-black">23 %</h1>
        <p>Decreased in customer phone calls</p>
      </div>
      {/*  card 3 */}
      <div
        className="absolute top-10  right-30 h-40 bg-[#242424] w-80 rounded-2xl px-5 py-5 text-white z-20 opacity-0"
        ref={box3Ref}
      >
        <h1 className="text-7xl font-bold text-white">28 %</h1>
        <p>Increase in pick up point use</p>
      </div>
      {/*  card 4 */}
      <div
        className="absolute top-90 right-60 h-40 bg-[#FF775C] w-80 rounded-2xl px-5 py-5 z-30 opacity-0 "
        ref={box4Ref}
      >
        <h1 className="text-7xl font-bold text-black">40 %</h1>
        <p>Decreased in customer phone calls</p>
      </div>
    </section>
  );
};

export default CarRevealText;
