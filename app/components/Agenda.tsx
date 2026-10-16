"use client";
import { useState, useEffect } from "react";
import { weeklySchedule } from "../data/locations";
import AnimateIn from "./AnimateIn";

const dayMap: Record<string, number> = {
  monday: 1, tuesday: 2, wednesday: 3, thursday: 4,
  friday: 5, saturday: 6, sunday: 0,
};

function getTodayDay() {
  return new Date().getDay();
}

export default function Agenda() {
  const [today, setToday] = useState(-1);

  useEffect(() => {
    setToday(getTodayDay());
  }, []);

  return (
    <section id="agenda" className="py-28 px-6 wave-pattern">
      <AnimateIn className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p data-animate="fade-up" className="text-[#f0a500] text-xs font-semibold tracking-[0.4em] uppercase mb-4">
            Wekelijks schema
          </p>
          <h2 data-animate="fade-up" data-delay="100" className="text-4xl md:text-5xl font-black text-white underline-reveal inline-block">
            Waar staan wij?
          </h2>
          <p data-animate="fade-up" data-delay="200" className="text-white/45 mt-5 max-w-md mx-auto text-sm leading-relaxed">
            VAN-VU staat wekelijks op vaste locaties door de regio. Kom langs op een markt bij jou in de buurt.
          </p>
        </div>

        <div className="grid gap-4">
          {weeklySchedule.map((day, dayIdx) => {
            const isToday = dayMap[day.day] === today;
            return (
              <div
                key={day.day}
                data-animate="fade-up"
                data-delay={String(dayIdx * 80)}
                className={`card-hover rounded-2xl border p-6 md:p-8 ${
                  isToday
                    ? "border-[#f0a500]/50 bg-[#f0a500]/6"
                    : "border-white/8 bg-white/[0.02]"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-36 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-black ${isToday ? "text-[#f0a500]" : "text-white/30"}`}>
                        {day.dayNl}
                      </span>
                      {isToday && (
                        <span className="px-2 py-0.5 bg-[#f0a500] text-black text-[10px] font-bold tracking-wide rounded-full uppercase">
                          Vandaag
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 grid sm:grid-cols-2 gap-3">
                    {day.locations.map((loc) => (
                      <div
                        key={`${loc.name}-${loc.address}`}
                        className="rounded-xl bg-white/3 border border-white/6 p-4 hover:border-[#c8102e]/30 transition-colors duration-300"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-white font-semibold text-sm">{loc.name}</p>
                            <p className="text-white/45 text-xs mt-0.5">{loc.address}</p>
                          </div>
                          {loc.alternating && (
                            <span className="text-white/30 text-[9px] uppercase tracking-wide border border-white/15 rounded px-1.5 py-0.5 flex-shrink-0">
                              Om de week
                            </span>
                          )}
                        </div>
                        <p className="text-[#f0a500] text-xs font-medium mt-3">{loc.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p data-animate="fade-up" className="text-center text-white/25 text-xs mt-10 tracking-wide">
          Volg ons op{" "}
          <a
            href="https://www.instagram.com/van_vu_loempia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0a500]/70 hover:text-[#f0a500] transition-colors underline underline-offset-2"
          >
            Instagram
          </a>{" "}
          voor actuele updates en speciale locaties.
        </p>
      </AnimateIn>
    </section>
  );
}
