export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/8 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <div className="font-black text-base">
          <span className="text-[#c8102e]">VAN</span>
          <span className="text-white/50">-</span>
          <span className="text-[#c8102e]">VU</span>
          <span className="ml-2 font-normal text-xs">Vietnamese Loempia&apos;s</span>
        </div>
        <p>© 2026 VAN-VU. Alle rechten voorbehouden.</p>
        <div className="flex gap-5">
          <a
            href="https://www.instagram.com/van_vu_loempia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a href="tel:+31611601486" className="hover:text-white transition-colors">
            Bel ons
          </a>
        </div>
      </div>
    </footer>
  );
}
