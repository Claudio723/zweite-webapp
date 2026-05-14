"use client";

import { useState, useEffect } from 'react';

export default function BueroassistLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [cookieMounted, setCookieMounted] = useState(false);

  useEffect(() => {
    setCookieAccepted(localStorage.getItem('cookie-consent') === 'true');
    setCookieMounted(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setCookieAccepted(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert('Vielen Dank! Wir melden uns innerhalb von 24 Stunden.');
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <div className="overflow-x-hidden">
      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F0]/95 backdrop-blur border-b border-[#E8E2D9]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-x-3">
            <div className="w-10 h-10 bg-[#2C3E2D] rounded-2xl flex items-center justify-center"><span className="text-[#F8F5F0] text-2xl font-bold">B</span></div>
            <div><div className="font-semibold text-2xl tracking-tight">Büroassist</div><div className="text-[10px] text-[#5C6B5E] -mt-1">Seit 2018</div></div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-x-10 text-sm">
            <a href="#leistungen" className="friendly-hover font-medium">Leistungen</a>
            <a href="#warum" className="friendly-hover font-medium">Warum wir</a>
            <a href="#referenzen" className="friendly-hover font-medium">Referenzen</a>
          </div>
          <a href="#kontakt" className="hidden md:inline-flex px-6 py-2.5 bg-[#2C3E2D] hover:bg-[#1f2b20] text-[#F8F5F0] text-sm font-semibold rounded-3xl">Kontakt</a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü öffnen"
          >
            <span className={`block w-6 h-0.5 bg-[#2C3E2D] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#2C3E2D] transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#2C3E2D] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-64 border-t border-[#E8E2D9]' : 'max-h-0'}`}>
          <div className="px-6 py-4 space-y-3 bg-[#F8F5F0]">
            <a href="#leistungen" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-lg">Leistungen</a>
            <a href="#warum" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-lg">Warum wir</a>
            <a href="#referenzen" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-lg">Referenzen</a>
            <a href="#kontakt" onClick={() => setMobileOpen(false)} className="block py-2 font-semibold text-lg text-[#C9A87C]">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-20 min-h-[100dvh] flex items-center warm-gradient subtle-grain">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-x-2 px-4 py-1.5 bg-white/70 backdrop-blur rounded-3xl mb-6 border border-[#E8E2D9]">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#5C6B5E]">Vertraut von 180+ kleinen Unternehmen</span>
            </div>
            <h1 className="heading-font text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tighter mb-8">Büroarbeit,<br />die sich<br /><span className="text-[#C9A87C]">wie Zuhause</span><br />anfühlt.</h1>
            <p className="max-w-md text-lg md:text-xl text-[#5C6B5E] mb-10 leading-relaxed">Sympathische, zuverlässige Unterstützung für alle Büroaufgaben – damit Sie sich auf das Wesentliche konzentrieren können.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="group inline-flex items-center justify-center gap-x-3 px-9 py-4 bg-[#2C3E2D] hover:bg-[#1f2b20] text-[#F8F5F0] font-semibold rounded-3xl transition-all">Jetzt unverbindlich anfragen <span className="group-active:translate-x-1 transition">→</span></a>
              <a href="#leistungen" className="inline-flex items-center justify-center gap-x-3 px-8 py-4 border border-[#D4C9B8] hover:bg-white/50 font-medium rounded-3xl">Leistungen ansehen</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEISTUNGEN ===== */}
      <section id="leistungen" className="section-padding max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-y-8 md:items-end md:justify-between mb-12">
          <div><div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C] mb-3">WAS WIR MACHEN</div><h2 className="heading-font text-5xl tracking-tight">Alles, was Ihr Büro braucht.</h2></div>
          <p className="max-w-sm text-[#5C6B5E]">Von der täglichen Korrespondenz bis zur kompletten Buchhaltung – wir übernehmen die Aufgaben, die Zeit kosten.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {icon: '📩', title: 'Korrespondenz & E-Mails', desc: 'Professionelle Beantwortung von Kundenanfragen, Terminvereinbarung, Angebote und Rechnungsversand.'},
            {icon: '📊', title: 'Buchhaltung & Zahlen', desc: 'Einnahmen-Ausgaben-Rechnung, Belegverarbeitung, Offerten und Rechnungen – sauber und pünktlich.'},
            {icon: '📋', title: 'Organisation & Planung', desc: 'Terminkoordination, Reiseplanung, Bestellwesen und digitale Ablage.'},
            {icon: '⭐', title: 'Komplettpaket', desc: 'Alles aus einer Hand: Persönliche Assistenz nach Ihrem Bedarf, stundenweise oder regelmässig.'},
          ].map((s, i) => (
            <div key={i} className="service-card bg-white p-10 rounded-3xl border border-[#E8E2D9] soft-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="heading-font text-2xl tracking-tight mb-2">{s.title}</h3>
              <p className="text-[#5C6B5E] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WARUM WIR ===== */}
      <section id="warum" className="section-padding max-w-6xl mx-auto px-6">
        <div className="max-w-md mb-12">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C] mb-3">WARUM WIR</div>
          <h2 className="heading-font text-5xl tracking-tight">Menschlich. Zuverlässig. Fair.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: '💛', title: 'Sympathisch & persönlich', desc: 'Kein Callcenter, kein Outsourcing. Eine echte Person, die Ihr Business kennt.'},
            {icon: '⚡', title: 'Schnell & flexibel', desc: 'Wir reagieren innerhalb von 24 Stunden und passen uns Ihren Arbeitszeiten an.'},
            {icon: '💰', title: 'Faire & klare Preise', desc: 'Abrechnung nach tatsächlichem Aufwand. Keine Mindestlaufzeit, keine versteckten Kosten.'},
          ].map((w, i) => (
            <div key={i} className="text-center p-8">
              <div className="text-3xl mb-3">{w.icon}</div>
              <h3 className="heading-font text-xl mb-1.5">{w.title}</h3>
              <p className="text-sm text-[#5C6B5E] leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== REFERENZEN ===== */}
      <section id="referenzen" className="section-padding max-w-6xl mx-auto px-6">
        <div className="max-w-md mb-12">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C] mb-3">REFERENZEN</div>
          <h2 className="heading-font text-5xl tracking-tight">Was unsere Kunden sagen.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {quote: '"Endlich wieder Zeit für meine Kunden. Büroassist nimmt mir die ganze Papierarbeit ab – pünktlich und zuverlässig."', name: 'Markus L.', role: 'Treuhandbüro'},
            {quote: '"Seit 3 Jahren unsere stille Power im Hintergrund. Kein Brief bleibt unbeantwortet, keine Rechnung ungestellt."', name: 'Sophie R.', role: 'Architektin'},
            {quote: '"Unglaublich flexibel und dazu noch sympathisch. Hätte nie gedacht, dass externe Unterstützung so reibungslos funktioniert."', name: 'Thomas K.', role: 'IT-Berater'},
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-[#E8E2D9] soft-shadow">
              <p className="text-[#5C6B5E] leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-x-3"><div className="w-8 h-8 bg-[#E8E2D9] rounded-full"></div><div><div className="font-semibold text-sm">{t.name}</div><div className="text-xs text-[#5C6B5E]">{t.role}</div></div></div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== KONTAKT ===== */}
      <section id="kontakt" className="section-padding max-w-3xl mx-auto px-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C] mb-4">BEREIT?</div>
          <h2 className="heading-font text-6xl tracking-tight mb-6">Lassen Sie uns reden.</h2>
          <p className="text-[#5C6B5E] mb-10">Erzählen Sie uns von Ihrem Büro-Alltag. Wir finden gemeinsam die beste Lösung – unverbindlich und kostenlos.</p>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label htmlFor="vorname" className="block text-sm font-medium mb-1.5">Vorname</label><input id="vorname" type="text" className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-2xl focus:outline-none focus:border-[#C9A87C]" placeholder="Anna" required /></div>
              <div><label htmlFor="nachname" className="block text-sm font-medium mb-1.5">Nachname</label><input id="nachname" type="text" className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-2xl focus:outline-none focus:border-[#C9A87C]" placeholder="Müller" required /></div>
            </div>
            <div><label htmlFor="email" className="block text-sm font-medium mb-1.5">E-Mail-Adresse</label><input id="email" type="email" className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-2xl focus:outline-none focus:border-[#C9A87C]" placeholder="anna@mueller-bau.ch" required /></div>
            <div><label htmlFor="thema" className="block text-sm font-medium mb-1.5">Was brauchen Sie Unterstützung bei?</label><select id="thema" className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-2xl focus:outline-none focus:border-[#C9A87C] text-[#5C6B5E]"><option>Buchhaltung & Rechnungen</option><option>Korrespondenz & E-Mails</option><option>Terminplanung</option><option>Komplettpaket</option><option>Sonstiges</option></select></div>
            <div><label htmlFor="nachricht" className="block text-sm font-medium mb-1.5">Nachricht (optional)</label><textarea id="nachricht" rows={4} className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-3xl focus:outline-none focus:border-[#C9A87C] resize-y" placeholder="Wir haben ca. 8–10 Stunden pro Woche..."></textarea></div>
            <button type="submit" disabled={submitted} className="mt-4 w-full py-4 bg-[#2C3E2D] hover:bg-[#1f2b20] text-[#F8F5F0] font-semibold rounded-3xl transition-all flex items-center justify-center gap-x-3 disabled:opacity-70">{submitted ? 'Wird gesendet...' : 'Anfrage abschicken →'}</button>
            <p className="text-xs text-center text-[#8A8579]">Wir melden uns innerhalb von 24 Stunden.</p>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2C3E2D] text-[#D4D0C8] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-y-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-x-3 mb-6">
              <div className="w-9 h-9 bg-[#C9A87C] rounded-2xl flex items-center justify-center"><span className="text-[#2C3E2D] text-xl font-bold">B</span></div>
              <span className="font-semibold text-2xl text-white">Büroassist</span>
            </div>
            <div className="max-w-xs text-sm">Sympathische Bürohilfe für kleine Unternehmen in der Region Zürich und Umgebung.</div>
          </div>
          <div className="md:col-span-3 text-sm">
            <div className="font-semibold text-white mb-4">Kontakt</div>
            <div className="space-y-1.5">
              <div><a href="mailto:hello@bueroassist.ch" className="hover:text-[#C9A87C] transition-colors">hello@bueroassist.ch</a></div>
              <div><a href="tel:+41445551234" className="hover:text-[#C9A87C] transition-colors">+41 44 555 12 34</a></div>
              <div className="pt-2">Seestrasse 42<br />8800 Thalwil</div>
            </div>
          </div>
          <div className="md:col-span-4 text-sm">
            <div className="font-semibold text-white mb-4">Rechtliches</div>
            <div className="space-y-2">
              <div><a href="/datenschutz" className="hover:text-[#C9A87C] transition-colors">Datenschutz</a></div>
              <div><a href="/agb" className="hover:text-[#C9A87C] transition-colors">AGB</a></div>
              <div><a href="/impressum" className="hover:text-[#C9A87C] transition-colors">Impressum</a></div>
            </div>
            <div className="mt-8 text-xs opacity-60">© 2026 Büroassist. Mit ❤️ gemacht für kleine Firmen.</div>
          </div>
        </div>
      </footer>

      {/* ===== COOKIE BANNER ===== */}
      {cookieMounted && !cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E8E2D9] shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#5C6B5E] leading-relaxed max-w-2xl">
              Diese Website verwendet ein technisch notwendiges Cookie zur Speicherung Ihrer Cookie-Präferenz. Kein Tracking, keine Analyse. <a href="/datenschutz" className="underline text-[#C9A87C] hover:text-[#2C3E2D]">Mehr erfahren</a>
            </p>
            <button
              onClick={acceptCookies}
              className="px-6 py-2.5 bg-[#2C3E2D] hover:bg-[#1f2b20] text-[#F8F5F0] text-sm font-semibold rounded-3xl whitespace-nowrap transition-all"
            >
              Verstanden
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
