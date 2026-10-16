import Image from "next/image";
import AnimateIn from "./AnimateIn";

const eventTypes = [
  {
    title: "Festivals & markten",
    description:
      "Van buurtfeest tot groot muziekfestival — onze kraam past zich aan elke schaal aan.",
  },
  {
    title: "Bedrijfsevenementen",
    description:
      "Personeelsfeesten, bedrijfsuitjes en jubilea verdienen bijzonder eten. Wij zorgen voor een authentieke beleving.",
  },
  {
    title: "Privé-evenementen",
    description:
      "Bruiloften, verjaardagen en familiereünies. Verrast uw gasten met Vietnamese streetfood.",
  },
  {
    title: "Sporttoernooien",
    description:
      "Snelle bediening voor grote groepen, met vers bereide hapjes die iedereen aanspreken.",
  },
];

const usp = [
  "Moderne foodtruck die voldoet aan alle veiligheidseisen",
  "Volledig zelfvoorzienend — geen externe stroomvoorziening nodig",
  "Vers bereid op locatie met eigen apparatuur",
  "Flexibel inzetbaar voor kleine en grote evenementen",
];

export default function Catering() {
  return (
    <section id="catering" className="py-28 px-6 bg-[#0a0a0a]">
      <AnimateIn className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p data-animate="fade-up" className="text-[#f0a500] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Loempiakraam huren
          </p>
          <h2 data-animate="fade-up" data-delay="100" className="text-4xl md:text-5xl font-black text-white leading-tight">
            Catering &amp; evenementen
          </h2>
          <p data-animate="fade-up" data-delay="200" className="text-white/45 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Organiseert u een evenement en bent u op zoek naar een Vietnamese loempiakraam? Met onze moderne foodtruck brengen we authentieke Vietnamese streetfood rechtstreeks naar uw locatie.
          </p>
        </div>

        {/* Image + USP block */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div data-animate="scale-up" className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/kraam-3.png"
              alt="VAN-VU loempiakraam voor evenementen"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-black text-2xl leading-tight">
                Uw evenement.<br />
                <span className="text-[#c8102e]">Onze loempia&apos;s.</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p data-animate="fade-right" className="text-white/55 text-sm leading-relaxed mb-6">
              Wij beschikken over een moderne, volledig uitgeruste foodtruck die voldoet aan alle benodigde veiligheidseisen. Van kleine privéfeesten tot grote festivals — wij passen ons aan uw wensen aan.
            </p>
            {usp.map((item, i) => (
              <div
                key={item}
                data-animate="fade-right"
                data-delay={String(i * 80)}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 w-4 h-4 rounded-full bg-[#c8102e]/15 border border-[#c8102e]/40 flex-shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-[#c8102e]" fill="currentColor">
                    <path d="M8.5 2.5L4 7 1.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </span>
                <p className="text-white/60 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event types grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {eventTypes.map((type, i) => (
            <div
              key={type.title}
              data-animate="fade-up"
              data-delay={String(i * 80)}
              className="card-hover rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <div className="w-8 h-px bg-[#c8102e] mb-4" />
              <h3 className="text-white font-bold text-base mb-2">{type.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          data-animate="fade-up"
          className="rounded-2xl border border-[#c8102e]/20 bg-gradient-to-br from-[#c8102e]/8 via-transparent to-transparent p-10 text-center"
        >
          <h3 className="text-2xl font-black text-white mb-3">Interesse?</h3>
          <p className="text-white/45 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Neem vrijblijvend contact op. We bespreken graag de mogelijkheden voor uw evenement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31611601486"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#c8102e] text-white font-semibold text-sm tracking-wide rounded-full hover:bg-[#a00d25] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(200,16,46,0.35)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Bel ons
            </a>
            <a
              href="https://wa.me/31611601486?text=Hallo%20VAN-VU%2C%20ik%20wil%20jullie%20graag%20boeken%20voor%20een%20evenement..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/15 text-white/70 font-semibold text-sm tracking-wide rounded-full hover:border-white/40 hover:text-white transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
