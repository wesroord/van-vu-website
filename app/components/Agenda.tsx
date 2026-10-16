"use client";
import { useState, useEffect } from "react";
import { upcomingLocations, type Location } from "../data/locations";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function AgendaItems({ upcoming }: { upcoming: Location[] }) {
  if (upcoming.length === 0) {
    return (
      <div className="text-center py-16 text-white/40">
        <p className="text-5xl mb-4">🥟</p>
        <p>Momenteel geen evenementen gepland. Volg ons op Instagram voor updates!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {upcoming.map((loc, i) => (
        <div
          key={loc.id}
          className={`group relative rounded-2xl border transition-all hover:border-[#c8102e]/50 hover:bg-[#c8102e]/5 ${
            i === 0
              ? "border-[#f0a500]/40 bg-[#f0a500]/5"
              : "border-white/10 bg-white/3"
          } p-6`}
        >
          {i === 0 && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-[#f0a500] text-black text-xs font-bold rounded-full">
              Eerstvolgende
            </span>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-shrink-0 text-center sm:text-left sm:w-32">
              <div className={`text-2xl font-black ${i === 0 ? "text-[#f0a500]" : "text-[#c8102e]"}`}>
                {new Date(loc.date).getDate()}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wide">
                {new Date(loc.date).toLocaleDateString("nl-NL", { month: "short" })}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-white">{loc.event}</h3>
              <p className="text-white/60 text-sm mt-1">📍 {loc.address}</p>
              {loc.description && (
                <p className="text-white/40 text-sm mt-1">{loc.description}</p>
              )}
            </div>

            <div className="text-right flex-shrink-0">
              <div className="text-white font-semibold text-sm">{loc.time}</div>
              <div className="text-white/40 text-xs capitalize mt-1">
                {formatDate(loc.date).split(",")[0]}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Agenda() {
  const [upcoming, setUpcoming] = useState<Location[]>([]);

  useEffect(() => {
    const today = new Date(new Date().toDateString());
    const sorted = [...upcomingLocations]
      .filter((l) => new Date(l.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    setUpcoming(sorted);
  }, []);

  return (
    <section id="agenda" className="py-24 px-6 wave-pattern">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#f0a500] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Agenda
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Waar vind je ons?
          </h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto">
            We staan altijd op een andere locatie. Hier zie je waar je ons de komende tijd kunt vinden.
          </p>
        </div>

        <AgendaItems upcoming={upcoming} />

        <p className="text-center text-white/30 text-sm mt-8">
          Agenda niet compleet? Volg ons op{" "}
          <a
            href="https://www.instagram.com/van_vu_loempia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0a500] hover:text-white transition-colors"
          >
            Instagram
          </a>{" "}
          voor de laatste updates.
        </p>
      </div>
    </section>
  );
}
