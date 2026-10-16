import { menuItems } from "../data/locations";

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#f0a500] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Ons aanbod
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Menu</h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto">
            Alles vers bereid op locatie, met authentieke Vietnamese smaken.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/3 p-8 hover:border-[#c8102e]/30 transition-colors"
            >
              <div className="text-5xl mb-5">{item.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">{item.description}</p>

              <div className="space-y-2">
                {item.variants.map((v) => (
                  <div
                    key={v.label}
                    className="flex justify-between items-center py-2 border-b border-white/8"
                  >
                    <span className="text-white/80 text-sm">{v.label}</span>
                    <span className="text-[#f0a500] font-bold">{v.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#c8102e]/20 bg-[#c8102e]/5 p-6 text-center">
          <p className="text-white/60 text-sm">
            🌶️ Geserveerd met verse zoete chilisaus · Vegan opties beschikbaar · Alles gemaakt van verse ingrediënten
          </p>
        </div>
      </div>
    </section>
  );
}
