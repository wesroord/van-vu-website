import AnimateIn from "./AnimateIn";

const contacts = [
  {
    label: "Telefoon / WhatsApp",
    value: "06 – 11 60 14 86",
    href: "tel:+31611601486",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: "www.van-vu.nl",
    href: "https://www.van-vu.nl",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@van_vu_loempia",
    href: "https://www.instagram.com/van_vu_loempia/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 wave-pattern">
      <AnimateIn className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p data-animate="fade-up" className="text-[#f0a500] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Contact
          </p>
          <h2 data-animate="fade-up" data-delay="100" className="text-4xl md:text-5xl font-black text-white">
            VAN-VU boeken?
          </h2>
          <p data-animate="fade-up" data-delay="200" className="text-white/45 mt-5 max-w-lg mx-auto text-sm leading-relaxed">
            Organiseer jij een festival, markt of bedrijfsevenement? Neem contact op voor de mogelijkheden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                data-animate="fade-left"
                data-delay={String(i * 100)}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-hover flex items-center gap-5 rounded-2xl border border-white/8 bg-white/[0.02] p-5 group"
              >
                <span className="text-white/30 group-hover:text-[#c8102e] transition-colors duration-300">
                  {c.icon}
                </span>
                <div>
                  <div className="text-white/30 text-xs tracking-wide">{c.label}</div>
                  <div className="text-white font-semibold text-sm mt-0.5 group-hover:text-[#f0a500] transition-colors duration-300">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            data-animate="fade-right"
            data-delay="200"
            className="card-hover rounded-2xl border border-[#c8102e]/20 bg-gradient-to-br from-[#c8102e]/8 to-transparent p-8 flex flex-col justify-center"
          >
            <h3 className="text-xl font-black text-white mb-3">
              Evenement organisator?
            </h3>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              We zijn beschikbaar voor festivals, weekmarkten, bedrijfsfeesten en andere evenementen. Neem vrijblijvend contact op via WhatsApp.
            </p>
            <a
              href="https://wa.me/31611601486?text=Hallo%20VAN-VU%2C%20ik%20wil%20jullie%20graag%20boeken%20voor..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#c8102e] text-white font-semibold text-sm tracking-wide rounded-full hover:bg-[#a00d25] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(200,16,46,0.35)] self-start"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.528 5.845L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.76.986 1.003-3.654-.234-.376A9.782 9.782 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Stuur een WhatsApp
            </a>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
