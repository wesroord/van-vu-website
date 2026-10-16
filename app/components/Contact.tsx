"use client";
import { useState } from "react";
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
    label: "E-mail",
    value: "info@van-vu.nl",
    href: "mailto:info@van-vu.nl",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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

const subjects = [
  "Festival of evenement",
  "Bedrijfsevenement",
  "Privé-evenement (bruiloft, verjaardag, etc.)",
  "Sporttoernooi",
  "Weekmarkt of braderie",
  "Anders",
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    naam: "", email: "", telefoon: "", onderwerp: "", bericht: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@van-vu.nl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Naam: form.naam,
          "E-mail": form.email,
          Telefoon: form.telefoon || "—",
          Onderwerp: form.onderwerp,
          Bericht: form.bericht,
          _subject: `Nieuwe aanvraag via website: ${form.onderwerp}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ naam: "", email: "", telefoon: "", onderwerp: "", bericht: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#c8102e]/60 focus:bg-white/[0.06] transition-all duration-200";

  return (
    <section id="contact" className="py-16 md:py-28 px-4 sm:px-6 wave-pattern">
      <AnimateIn className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p data-animate="fade-up" className="text-[#f0a500] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Contact
          </p>
          <h2 data-animate="fade-up" data-delay="100" className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Neem contact op
          </h2>
          <p data-animate="fade-up" data-delay="200" className="text-white/45 mt-5 max-w-lg mx-auto text-sm leading-relaxed">
            Wil je ons boeken voor een evenement of heb je een vraag? Stuur een bericht of neem direct contact op.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Contact links */}
          <div data-animate="fade-left" className="md:col-span-2 space-y-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-hover flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:p-5 group"
              >
                <span className="text-white/30 group-hover:text-[#c8102e] transition-colors duration-300 flex-shrink-0">
                  {c.icon}
                </span>
                <div className="min-w-0">
                  <div className="text-white/30 text-xs tracking-wide">{c.label}</div>
                  <div className="text-white font-semibold text-sm mt-0.5 group-hover:text-[#f0a500] transition-colors duration-300 truncate">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}

            <a
              href="https://wa.me/31611601486?text=Hallo%20VAN-VU%2C%20ik%20heb%20een%20vraag..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full mt-2 px-6 py-3.5 bg-[#c8102e] text-white font-semibold text-sm tracking-wide rounded-full hover:bg-[#a00d25] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(200,16,46,0.35)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.528 5.845L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.76.986 1.003-3.654-.234-.376A9.782 9.782 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Direct WhatsApp
            </a>
          </div>

          {/* Contact form */}
          <div data-animate="fade-right" data-delay="100" className="md:col-span-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:p-8">
              {status === "success" ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="w-14 h-14 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 flex items-center justify-center mx-auto mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#c8102e]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Bericht verstuurd</h3>
                  <p className="text-white/45 text-sm">We nemen zo snel mogelijk contact met je op.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-[#f0a500]/70 hover:text-[#f0a500] text-sm transition-colors"
                  >
                    Nieuw bericht sturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs tracking-wide mb-1.5">Naam *</label>
                      <input name="naam" value={form.naam} onChange={handleChange} required placeholder="Jan de Vries" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs tracking-wide mb-1.5">E-mailadres *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jan@voorbeeld.nl" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs tracking-wide mb-1.5">Telefoonnummer</label>
                      <input name="telefoon" type="tel" value={form.telefoon} onChange={handleChange} placeholder="06 – 00 00 00 00" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs tracking-wide mb-1.5">Onderwerp *</label>
                      <select name="onderwerp" value={form.onderwerp} onChange={handleChange} required className={inputClass + " cursor-pointer"}>
                        <option value="" disabled>Selecteer een onderwerp</option>
                        {subjects.map((s) => (
                          <option key={s} value={s} className="bg-[#1a1a1a]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs tracking-wide mb-1.5">Bericht *</label>
                    <textarea
                      name="bericht" value={form.bericht} onChange={handleChange} required rows={5}
                      placeholder="Vertel ons over uw evenement: datum, locatie, verwacht aantal bezoekers..."
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[#c8102e] text-xs">
                      Er ging iets mis. Probeer het opnieuw of mail direct naar info@van-vu.nl.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 bg-[#c8102e] text-white font-semibold text-sm tracking-wide rounded-full hover:bg-[#a00d25] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,16,46,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Verzenden..." : "Bericht versturen"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
