import { reviews } from "../data/locations";
import AnimateIn from "./AnimateIn";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          className={`w-3.5 h-3.5 ${i < rating ? "star-filled" : "star-empty"}`}
          fill="currentColor"
        >
          <path d="M8 .25l1.93 3.91 4.32.63-3.12 3.04.74 4.3L8 10.02l-3.87 2.04.74-4.3L1.75 4.79l4.32-.63z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 px-6 wave-pattern overflow-hidden">
      <AnimateIn className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p data-animate="fade-up" className="text-[#f0a500] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Wat klanten zeggen
          </p>
          <h2 data-animate="fade-up" data-delay="100" className="text-4xl md:text-5xl font-black text-white">
            Reviews
          </h2>
          <div data-animate="fade-up" data-delay="200" className="flex items-center justify-center gap-3 mt-5">
            <Stars rating={5} />
            <span className="text-white font-bold text-lg">4,6</span>
            <span className="text-white/35 text-sm">op Google</span>
          </div>
        </div>

        {/* Scrolling marquee row */}
        <div data-animate="fade-up" data-delay="200" className="overflow-hidden -mx-6">
          <div className="marquee-track flex gap-5 px-6" style={{ width: "max-content" }}>
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="w-80 flex-shrink-0 rounded-2xl border border-white/8 bg-white/[0.02] p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white font-semibold text-sm">{review.author}</p>
                    {review.isLocalGuide && (
                      <p className="text-white/35 text-[10px] tracking-wide mt-0.5">Local Guide</p>
                    )}
                  </div>
                  <Stars rating={review.rating} />
                </div>
                <p className="text-white/55 text-sm leading-relaxed line-clamp-4">{review.text}</p>
                <p className="text-white/20 text-xs mt-4">{review.timeAgo}</p>
              </div>
            ))}
          </div>
        </div>

        <p data-animate="fade-up" className="text-center text-white/25 text-xs mt-10 tracking-wide">
          Beoordeeld via{" "}
          <a
            href="https://www.google.com/maps/place/Vietnamese+Loempia's+Speciaal+Van-Vu/@52.2613788,7.0058154,17z/data=!4m16!1m9!3m8!1s0x47b83d8aa20f7389:0x53f39e506b6abc0b!2sVietnamese+Loempia's+Speciaal+Van-Vu!8m2!3d52.2613755!4d7.0083903!9m1!1b1!16s%2Fg%2F11c4_tlm69!3m5!1s0x47b83d8aa20f7389:0x53f39e506b6abc0b!8m2!3d52.2613755!4d7.0083903!16s%2Fg%2F11c4_tlm69?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0a500]/70 hover:text-[#f0a500] transition-colors underline underline-offset-2"
          >
            Google Maps
          </a>
        </p>
      </AnimateIn>
    </section>
  );
}
