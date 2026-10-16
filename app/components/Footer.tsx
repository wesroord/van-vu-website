export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/6 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60">
          <div className="font-black text-base">
            <span className="text-[#c8102e]">VAN</span>
            <span className="text-white/50">-</span>
            <span className="text-[#c8102e]">VU</span>
            <span className="ml-2 font-light text-xs text-white/40">Vietnamese Loempia&apos;s</span>
          </div>

          <p className="tracking-wide text-white/60">© 2026 VAN-VU. Alle rechten voorbehouden.</p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/van_vu_loempia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a href="tel:+31611601486" className="text-white/60 hover:text-white transition-colors">
                Bel ons
              </a>
            </div>
            <span className="hidden sm:block text-white/15">|</span>
            <a
              href="https://www.conneqtai.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              Webdesign: <span className="text-white font-semibold">ConneqtAI</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
