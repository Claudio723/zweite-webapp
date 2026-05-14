export const metadata = {
  title: "Datenschutzerklärung | Büroassist",
  description: "Datenschutzerklärung der Büroassist GmbH – wie wir Ihre Daten schützen.",
};

export default function DatenschutzPage() {
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
        <h1 className="heading-font text-5xl md:text-6xl tracking-tight mb-4">Datenschutzerklärung</h1>
        <p className="text-[#5C6B5E] mb-10">Stand: Mai 2026</p>

        <div className="space-y-8 text-[#5C6B5E] leading-relaxed">
          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">1. Verantwortliche Stelle</h2>
            <p>Büroassist GmbH, Seestrasse 42, 8800 Thalwil, Schweiz</p>
            <p>E-Mail: <a href="mailto:hello@bueroassist.ch" className="text-[#C9A87C] hover:underline">hello@bueroassist.ch</a></p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">2. Welche Daten wir erheben</h2>
            <p>Wenn Sie unser Kontaktformular nutzen, speichern wir:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Vorname und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Ihre Nachricht und die gewählte Leistungskategorie</li>
            </ul>
            <p className="mt-3">Beim Besuch der Website werden automatisch technische Daten wie IP-Adresse, Browsertyp und Zugriffszeitpunkt erfasst (Server-Logfiles).</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">3. Zweck der Datenverarbeitung</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bearbeitung Ihrer Kontaktanfrage</li>
              <li>Kundenkommunikation und Angebotserstellung</li>
              <li>Technische Bereitstellung und Sicherheit der Website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">4. Cookies</h2>
            <p>Diese Website verwendet ein technisch notwendiges Cookie zur Speicherung Ihrer Cookie-Präferenz. Darüber hinaus werden keine Tracking- oder Analyse-Cookies eingesetzt.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">5. Hosting</h2>
            <p>Diese Website wird über Netlify gehostet. Netlify kann Zugriffsdaten in Server-Logfiles speichern. Die Datenschutzerklärung von Netlify finden Sie unter <a href="https://www.netlify.com/privacy/" className="text-[#C9A87C] hover:underline" target="_blank" rel="noopener noreferrer">netlify.com/privacy</a>.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">6. Speicherdauer</h2>
            <p>Kontaktanfragen werden für die Dauer der Geschäftsbeziehung und gemäss gesetzlicher Aufbewahrungspflichten (10 Jahre) gespeichert. Server-Logfiles werden nach 30 Tagen gelöscht.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">7. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten (soweit keine gesetzliche Aufbewahrungspflicht besteht)</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p className="mt-3">Kontaktieren Sie uns dafür unter <a href="mailto:hello@bueroassist.ch" className="text-[#C9A87C] hover:underline">hello@bueroassist.ch</a>.</p>
          </div>

          <div>
            <h2 className="text-[#2C3E2D] font-semibold text-lg mb-2">8. Änderungen</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version finden Sie stets auf dieser Seite.</p>
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
