"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/kraam-1.png", alt: "VAN-VU loempiakraam bij festival" },
  { src: "/images/kraam-2.png", alt: "VAN-VU loempia verlicht in de avond" },
  { src: "/images/kraam-3.png", alt: "VAN-VU kraam met LOEMPIA letters" },
  { src: "/images/kraam-4.png", alt: "Drukte bij VAN-VU loempiakraam" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden wave-pattern">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0d0d0d]" />
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[#f0a500] text-sm font-semibold tracking-[0.3em] uppercase mb-6 glow-text">
          Authentieke Vietnamese streetfood
        </p>

        <h1 className="font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-4">
          <span className="text-white block">VAN</span>
          <span className="text-[#c8102e] block" style={{ WebkitTextStroke: "1px rgba(200,16,46,0.3)" }}>
            -VU-
          </span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl font-light italic mb-10">
          Vietnamese loempia&apos;s
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#agenda"
            className="px-8 py-4 bg-[#c8102e] text-white font-bold text-sm tracking-wide rounded-full hover:bg-[#a00d25] transition-all hover:scale-105 shadow-lg shadow-[#c8102e]/30"
          >
            Waar zijn we nu? →
          </a>
          <a
            href="#menu"
            className="px-8 py-4 border border-white/30 text-white font-semibold text-sm tracking-wide rounded-full hover:bg-white/10 transition-all"
          >
            Bekijk het menu
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${i === current ? "w-6 h-1.5 bg-[#c8102e]" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Afbeelding ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
    </section>
  );
}
