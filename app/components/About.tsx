import Image from "next/image";

export default function About() {
  return (
    <section id="over-ons" className="py-24 px-6 wave-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-[#f0a500] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Over ons
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Vietnamese smaken,<br />
              <span className="text-[#c8102e]">waar jij bent</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              VAN-VU staat voor Vietnamese Loempia&apos;s van topkwaliteit. Met onze mobiele kraam brengen we de authentieke smaken van Vietnam rechtstreeks naar festivals, markten en evenementen door heel Nederland.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Onze loempia&apos;s worden vers bereid met zorgvuldig geselecteerde ingrediënten. Of je nu kiest voor de klassieke loempia of onze vegan mini-variant — elk hapje is een smaakexplosie.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "100%", label: "Vers bereid" },
                { num: "5+", label: "Jaar ervaring" },
                { num: "★★★★★", label: "Beoordelingen" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black text-[#f0a500]">{s.num}</div>
                  <div className="text-white/40 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/kraam-4.png"
                alt="VAN-VU kraam met publiek"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl overflow-hidden w-36 h-28 border-2 border-[#0d0d0d] shadow-xl hidden md:block">
              <Image
                src="/images/kraam-2.png"
                alt="VAN-VU by night"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
