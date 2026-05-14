export const metadata = {
  title: "Impressum | Büroassist",
  description: "Impressum und rechtliche Angaben der Büroassist GmbH.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F0]/95 backdrop-blur border-b border-[#E8E2D9]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-x-3">
            <div className="w-10 h-10 bg-[#2C3E2D] rounded-2xl flex items-center justify-center"><span className="text-[#F8F5F0] text-2xl font-bold">B</span></div>
            <div><div className="font-semibold text-2xl tracking-tight">Büroassist</div></div>
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 max-w-3xl mx-auto px-6">
        <h1 className="heading-font text-5xl md:text-6xl tracking-tight mb-10">Impressum</h1>

        <div className="space-y-8 text-[#5C6B5E] leading-relaxed">
          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">Angaben gemäss Schweizer Recht</h2>
            <p>Büroassist GmbH</p>
            <p>Seestrasse 42</p>
            <p>8800 Thalwil</p>
            <p>Schweiz</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">Kontakt</h2>
            <p>E-Mail: <a href="mailto:hello@bueroassist.ch" className="text-[#C9A87C] hover:underline">hello@bueroassist.ch</a></p>
            <p>Telefon: <a href="tel:+41445551234" className="text-[#C9A87C] hover:underline">+41 44 555 12 34</a></p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">Vertretungsberechtigte Person</h2>
            <p>[Name der Geschäftsführerin]</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">Handelsregistereintrag</h2>
            <p>[Handelsregisternummer, falls vorhanden]</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">UID / MWST-Nummer</h2>
            <p>[UID-Nummer, falls vorhanden]</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">Haftungsausschluss</h2>
            <p>Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Website erfolgt auf eigene Gefahr.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C3E2D] text-[#D4D0C8] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>© 2026 Büroassist GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </main>
  );
}
