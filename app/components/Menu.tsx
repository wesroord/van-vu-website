import { menuItems } from "../data/locations";
import AnimateIn from "./AnimateIn";

export default function Menu() {
  return (
    <section id="menu" className="py-28 px-6 bg-[#0a0a0a]">
      <AnimateIn className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p data-animate="fade-up" className="text-[#f0a500] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Ons aanbod
          </p>
          <h2 data-animate="fade-up" data-delay="100" className="text-4xl md:text-5xl font-black text-white">
            Menu
          </h2>
          <p data-animate="fade-up" data-delay="200" className="text-white/45 mt-5 max-w-md mx-auto text-sm leading-relaxed">
            Alles vers bereid op locatie, met authentieke Vietnamese smaken en zelfgemaakte sauzen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              data-animate="fade-up"
              data-delay={String(i * 150)}
              className="card-hover rounded-2xl border border-white/8 bg-white/[0.02] p-8"
            >
              <h3 className="text-xl font-black text-white mb-3">{item.name}</h3>
              <p className="text-white/45 text-sm mb-7 leading-relaxed">{item.description}</p>

              <div className="space-y-0">
                {item.variants.map((v, vi) => (
                  <div
                    key={v.label}
                    className={`flex justify-between items-center py-3 ${vi < item.variants.length - 1 ? "border-b border-white/6" : ""}`}
                  >
                    <span className="text-white/70 text-sm">{v.label}</span>
                    <span className="text-[#f0a500] font-bold text-sm">{v.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          data-animate="fade-up"
          data-delay="300"
          className="mt-6 rounded-2xl border border-white/6 bg-white/[0.015] p-5 text-center"
        >
          <p className="text-white/35 text-xs tracking-wide leading-relaxed">
            Geserveerd met verse zelfgemaakte sauzen &nbsp;·&nbsp; Vegan opties beschikbaar &nbsp;·&nbsp; Vers bereid op locatie
          </p>
        </div>
      </AnimateIn>
    </section>
  );
}
