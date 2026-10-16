export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#f0a500] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            VAN-VU boeken?
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto">
            Organiseer jij een festival, markt of bedrijfsevenement? We komen graag naar jou toe met onze kraam vol Vietnamese loempia&apos;s.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              {
                icon: "📱",
                label: "Telefoon / WhatsApp",
                value: "06 - 11 60 14 86",
                href: "tel:+31611601486",
              },
              {
                icon: "🌐",
                label: "Website",
                value: "www.van-vu.nl",
                href: "https://www.van-vu.nl",
              },
              {
                icon: "📸",
                label: "Instagram",
                value: "@van_vu_loempia",
                href: "https://www.instagram.com/van_vu_loempia/",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 hover:border-[#c8102e]/40 hover:bg-[#c8102e]/5 transition-all group"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="text-white/40 text-xs">{c.label}</div>
                  <div className="text-white font-semibold group-hover:text-[#f0a500] transition-colors">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-[#c8102e]/20 bg-gradient-to-br from-[#c8102e]/10 to-transparent p-8 flex flex-col justify-center">
            <div className="text-4xl mb-4">🎪</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Evenement organisator?
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We zijn beschikbaar voor festivals, markten, bedrijfsfeesten en andere evenementen. Neem vrijblijvend contact op voor de mogelijkheden en beschikbaarheid.
            </p>
            <a
              href="https://wa.me/31611601486?text=Hallo%20VAN-VU%2C%20ik%20wil%20jullie%20graag%20boeken%20voor..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c8102e] text-white font-bold text-sm rounded-full hover:bg-[#a00d25] transition-all hover:scale-105"
            >
              💬 Stuur een WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
