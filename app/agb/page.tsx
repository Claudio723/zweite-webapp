export const metadata = {
  title: "AGB | Büroassist",
  description: "Allgemeine Geschäftsbedingungen der Büroassist GmbH.",
};

export default function AGBPage() {
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
        <h1 className="heading-font text-5xl md:text-6xl tracking-tight mb-4">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-[#5C6B5E] mb-10">Stand: Mai 2026</p>

        <div className="space-y-8 text-[#5C6B5E] leading-relaxed">
          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">1. Geltungsbereich</h2>
            <p>Diese AGB gelten für sämtliche Dienstleistungen der Büroassist GmbH. Abweichende Vereinbarungen bedürfen der Schriftform.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">2. Vertragsgegenstand</h2>
            <p>Büroassist erbringt Bürodienstleistungen wie Korrespondenz, Buchhaltung, Terminplanung und weitere administrative Unterstützung. Der genaue Leistungsumfang wird individuell vereinbart.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">3. Vergütung</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Die Abrechnung erfolgt nach Aufwand zu einem vorab vereinbarten Stundensatz</li>
              <li>Rechnungen sind innerhalb von 30 Tagen nach Erhalt zahlbar</li>
              <li>Alle Preise verstehen sich in Schweizer Franken (CHF), zuzüglich MWST falls anwendbar</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">4. Mitwirkungspflichten</h2>
            <p>Der Auftraggeber stellt Büroassist alle für die Auftragserfüllung notwendigen Informationen und Unterlagen rechtzeitig zur Verfügung.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">5. Vertraulichkeit</h2>
            <p>Büroassist verpflichtet sich zur strikten Vertraulichkeit über alle Geschäfts- und Betriebsgeheimnisse des Auftraggebers. Diese Verpflichtung gilt auch über die Vertragsdauer hinaus.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">6. Haftung</h2>
            <p>Büroassist haftet nur für Vorsatz und grobe Fahrlässigkeit. Jede weitergehende Haftung ist ausgeschlossen, soweit gesetzlich zulässig.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">7. Kündigung</h2>
            <p>Einzelaufträge können jederzeit eingestellt werden. Laufende Verträge sind mit einer Frist von 30 Tagen auf Ende eines Monats kündbar.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">8. Gerichtsstand</h2>
            <p>Gerichtsstand ist Zürich. Es gilt ausschliesslich Schweizer Recht.</p>
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
