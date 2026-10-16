import Image from "next/image";
import AnimateIn from "./AnimateIn";

const stats = [
  { num: "100%", label: "Vers bereid" },
  { num: "5+", label: "Jaar ervaring" },
  { num: "4,6", label: "Google score" },
];

export default function About() {
  return (
    <section id="over-ons" className="py-16 md:py-28 px-4 sm:px-6 bg-[#0a0a0a]">
      <AnimateIn className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p data-animate="fade-left" className="text-[#f0a500] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
              Over ons
            </p>
            <h2 data-animate="fade-left" data-delay="100" className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 sm:mb-6">
              Vietnamese smaken,<br />
              <span className="text-[#c8102e]">waar jij bent</span>
            </h2>
            <p data-animate="fade-left" data-delay="200" className="text-white/50 leading-relaxed mb-4 text-sm">
              VAN-VU staat voor Vietnamese loempia&apos;s van topkwaliteit. Met onze mobiele kraam brengen we de authentieke smaken van Vietnam rechtstreeks naar markten, festivals en evenementen door de regio.
            </p>
            <p data-animate="fade-left" data-delay="300" className="text-white/50 leading-relaxed mb-8 md:mb-10 text-sm">
              Onze loempia&apos;s worden vers bereid met zorgvuldig geselecteerde ingrediënten en zelfgemaakte sauzen. Of je nu kiest voor de klassieke loempia of onze vegan variant — elk hapje is een smaakexplosie.
            </p>

            <div data-animate="fade-left" data-delay="400" className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl sm:text-2xl font-black text-[#f0a500]">{s.num}</div>
                  <div className="text-white/35 text-xs mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div data-animate="scale-up" className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/kraam-4.png"
                alt="VAN-VU kraam met publiek"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div
              data-animate="fade-up"
              data-delay="300"
              className="absolute -bottom-5 -left-5 rounded-xl overflow-hidden w-32 h-24 sm:w-36 sm:h-28 border-2 border-[#0a0a0a] shadow-2xl hidden md:block"
            >
              <Image
                src="/images/kraam-2.png"
                alt="VAN-VU by night"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#c8102e]/20 hidden md:block" />
            <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full border border-[#c8102e]/15 hidden md:block" />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
