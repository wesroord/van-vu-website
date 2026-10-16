"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/images/kraam-1.png", alt: "VAN-VU loempiakraam bij festival" },
  { src: "/images/kraam-2.png", alt: "VAN-VU loempia verlicht in de avond" },
  { src: "/images/kraam-3.png", alt: "VAN-VU kraam met loempia letters" },
  { src: "/images/kraam-4.png", alt: "Drukte bij VAN-VU loempiakraam" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), 5000);
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => { clearInterval(timer); clearTimeout(timeout); };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden wave-pattern">
      {/* Parallax background */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1500 ${i === current ? "opacity-100" : "opacity-0"}`}
          style={{ transform: `translateY(${scrollY * 0.35}px)`, willChange: "transform" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto w-full">
        <p
          className={`text-[#f0a500] text-[10px] sm:text-xs font-semibold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-5 sm:mb-8 title-glow transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          Authentieke Vietnamese streetfood
        </p>

        <h1
          className={`font-black leading-none mb-4 sm:mb-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <span className="block text-white text-[clamp(3rem,13vw,10rem)] tracking-tight">VAN</span>
          <span
            className="block text-[#c8102e] text-[clamp(3rem,13vw,10rem)] tracking-tight"
            style={{ textShadow: "0 0 60px rgba(200,16,46,0.4)" }}
          >
            -VU-
          </span>
        </h1>

        <p
          className={`text-white/60 text-base sm:text-xl font-light italic mb-8 sm:mb-12 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          Vietnamese loempia&apos;s
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <a
            href="#agenda"
            className="px-7 py-3.5 sm:px-8 sm:py-4 bg-[#c8102e] text-white font-semibold text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[#a00d25] hover:scale-105 hover:shadow-[0_8px_30px_rgba(200,16,46,0.4)]"
          >
            Waar staan wij?
          </a>
          <a
            href="#menu"
            className="px-7 py-3.5 sm:px-8 sm:py-4 border border-white/25 text-white/80 font-semibold text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:border-white/60 hover:text-white hover:bg-white/8"
          >
            Bekijk het menu
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${i === current ? "w-8 h-1 bg-[#c8102e]" : "w-1 h-1 bg-white/30 hover:bg-white/60"}`}
            aria-label={`Afbeelding ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator — desktop only */}
      <div
        className={`hidden sm:flex absolute bottom-10 right-8 flex-col items-center gap-2 transition-all duration-1000 ${loaded ? "opacity-40" : "opacity-0"}`}
        style={{ transitionDelay: "1.2s" }}
      >
        <span className="text-white text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/60 animate-pulse" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
    </section>
  );
}
