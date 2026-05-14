"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BueroassistLanding() {
  const [submitted, setSubmitted] = useState(false);

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5F0]/95 backdrop-blur border-b border-[#E8E2D9]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 bg-[#2C3E2D] rounded-2xl flex items-center justify-center"><span className="text-[#F8F5F0] text-2xl font-bold">B</span></div>
            <div><div className="font-semibold text-2xl tracking-tight">Büroassist</div><div className="text-[10px] text-[#5C6B5E] -mt-1">Seit 2018</div></div>
          </div>
          <div className="hidden md:flex items-center gap-x-10 text-sm">
            <a href="#leistungen" className="friendly-hover font-medium">Leistungen</a>
            <a href="#warum" className="friendly-hover font-medium">Warum wir</a>
            <a href="#referenzen" className="friendly-hover font-medium">Referenzen</a>
          </div>
          <a href="#kontakt" className="px-6 py-2.5 bg-[#2C3E2D] hover:bg-[#1f2b20] text-[#F8F5F0] text-sm font-semibold rounded-3xl">Kontakt</a>
        </div>
      </nav>

      <section className="pt-20 min-h-[100dvh] flex items-center warm-gradient subtle-grain">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-x-2 px-4 py-1.5 bg-white/70 backdrop-blur rounded-3xl mb-6 border border-[#E8E2D9]">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#5C6B5E]">Vertraut von 180+ kleinen Unternehmen</span>
            </div>
            <h1 className="heading-font text-7xl md:text-8xl leading-[0.95] tracking-tighter mb-8">Büroarbeit,<br />die sich<br /><span className="text-[#C9A87C]">wie Zuhause</span><br />anfühlt.</h1>
            <p className="max-w-md text-xl text-[#5C6B5E] mb-10 leading-relaxed">Sympathische, zuverlässige Unterstützung für alle Büroaufgaben – damit Sie sich auf das Wesentliche konzentrieren können.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="group inline-flex items-center justify-center gap-x-3 px-9 py-4 bg-[#2C3E2D] hover:bg-[#1f2b20] text-[#F8F5F0] font-semibold rounded-3xl transition-all">Jetzt unverbindlich anfragen <span className="group-active:translate-x-1 transition">→</span></a>
              <a href="#leistungen" className="inline-flex items-center justify-center gap-x-3 px-8 py-4 border border-[#D4C9B8] hover:bg-white/50 font-medium rounded-3xl">Leistungen ansehen</a>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section-padding max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-y-8 md:items-end md:justify-between mb-12">
          <div><div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C] mb-3">WAS WIR MACHEN</div><h2 className="heading-font text-5xl tracking-tight">Alles, was Ihr Büro braucht.</h2></div>
          <p className="max-w-sm text-[#5C6B5E]">Von der täglichen Korrespondenz bis zur kompletten Buchhaltung – wir übernehmen die Aufgaben, die Zeit kosten.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {icon: '📩', title: 'Korrespondenz & E-Mails', desc: 'Professionelle Beantwortung von Kundenanfragen, Terminvereinbarungen und allgemeiner Schriftverkehr – freundlich und zuverlässig.', price: 'Ab 18 € / Stunde'},
            {icon: '📋', title: 'Buchhaltung & Rechnungen', desc: 'Erstellung von Rechnungen, Mahnungen, einfache Buchhaltung und Vorbereitung für den Steuerberater – übersichtlich und pünktlich.', price: 'Ab 22 € / Stunde'},
            {icon: '📅', title: 'Terminplanung & Organisation', desc: 'Terminkoordination, Kalenderpflege, Erinnerungen und Vorbereitung von Meetings – damit nichts mehr untergeht.', price: 'Ab 16 € / Stunde'},
            {icon: '📄', title: 'Dokumentenmanagement', desc: 'Ablage, Digitalisierung, Erstellung von Verträgen und Formularen – alles ordentlich und schnell auffindbar.', price: 'Ab 19 € / Stunde'},
          ].map((s, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay: i*0.08}} className="service-card bg-white p-9 rounded-3xl soft-shadow border border-[#E8E2D9]">
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-3xl font-semibold tracking-tight mb-4">{s.title}</h3>
              <p className="text-[#5C6B5E] leading-relaxed mb-6">{s.desc}</p>
              <div className="text-sm font-medium text-[#C9A87C]">{s.price}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="warum" className="section-padding bg-[#2C3E2D] text-[#F8F5F0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16"><div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C] mb-4">WARUM BÜROASSIST?</div><h2 className="heading-font text-6xl tracking-tight leading-none">Weil gute Büroarbeit<br />mehr ist als nur Erledigen.</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {num:'01', title:'Sympathisch & menschlich', desc:'Wir sind keine anonyme Agentur. Sie sprechen immer mit derselben Person, die Ihre Firma wirklich kennt.'},
              {num:'02', title:'Modern & digital', desc:'Arbeiten mit den Tools, die Sie nutzen – von Google Workspace über DATEV bis hin zu individuellen Systemen.'},
              {num:'03', title:'Einfach & transparent', desc:'Keine versteckten Kosten. Monatliche Abrechnung, flexible Stundenmodelle und monatliche Reports.'},
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur p-8 rounded-3xl border border-white/10">
                <div className="text-[#C9A87C] text-5xl mb-6">{item.num}</div>
                <h4 className="font-semibold text-2xl mb-4">{item.title}</h4>
                <p className="text-[#D4D0C8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-y-12 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C] mb-4">FÜR WEN WIR ARBEITEN</div>
            <h2 className="heading-font text-6xl tracking-tight leading-none mb-8">Kleine Firmen, die groß denken.</h2>
            <div className="space-y-6 text-lg text-[#5C6B5E]">
              {['Handwerksbetriebe & Dienstleister', 'Einzelunternehmer & Freiberufler', 'Kleine Agenturen & Beratungen', 'Familienunternehmen mit 3–25 Mitarbeitern'].map((item, i) => <div key={i} className="flex gap-4"><span className="text-[#C9A87C] mt-1.5">✓</span><div>{item}</div></div>)}
            </div>
          </div>
          <div className="md:col-span-5 bg-white p-10 rounded-3xl soft-shadow border border-[#E8E2D9]">
            <div className="text-center"><div className="text-6xl font-semibold tabular-nums mb-1">98</div><div className="text-[#5C6B5E]">Kundenzufriedenheit</div><div className="h-px bg-[#E8E2D9] my-8"></div><div className="grid grid-cols-3 gap-4 text-center"><div><div className="text-3xl font-semibold">180+</div><div className="text-xs text-[#5C6B5E]">Kunden</div></div><div><div className="text-3xl font-semibold">12k</div><div className="text-xs text-[#5C6B5E]">Stunden/Jahr</div></div><div><div className="text-3xl font-semibold">6</div><div className="text-xs text-[#5C6B5E]">Jahre</div></div></div></div>
          </div>
        </div>
      </section>

      <section id="referenzen" className="section-padding bg-[#F0EBE3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C]">WAS UNSERE KUNDEN SAGEN</div><h2 className="heading-font text-5xl tracking-tight mt-3">Echte Stimmen aus dem Alltag.</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {quote: '„Büroassist hat uns das Leben gerettet. Endlich hat jemand die lästigen Admin-Aufgaben im Griff – und das mit so viel Herz und Verständnis.“', name: 'Sabine K.', role: 'Inhaberin, Blumenhaus am See'},
              {quote: '„Seit wir Büroassist haben, sind unsere Rechnungen pünktlich draußen und die Buchhaltung ist immer auf dem neuesten Stand. Einfach perfekt.“', name: 'Thomas & Lena Weber', role: 'Geschäftsführer, Weber Elektro'},
            ].map((t, i) => (
              <div key={i} className="bg-white p-9 rounded-3xl soft-shadow">
                <div className="flex gap-1 text-[#C9A87C] mb-6">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-xl leading-tight mb-8">{t.quote}</blockquote>
                <div className="flex items-center gap-4"><div className="w-12 h-12 bg-[#E8E2D9] rounded-2xl"></div><div><div className="font-semibold">{t.name}</div><div className="text-sm text-[#5C6B5E]">{t.role}</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-padding max-w-3xl mx-auto px-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C9A87C] mb-4">BEREIT?</div>
          <h2 className="heading-font text-6xl tracking-tight mb-6">Lassen Sie uns reden.</h2>
          <p className="text-[#5C6B5E] mb-10">Erzählen Sie uns von Ihrem Büro-Alltag. Wir finden gemeinsam die beste Lösung – unverbindlich und kostenlos.</p>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-1.5">Vorname</label><input type="text" className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-2xl focus:outline-none focus:border-[#C9A87C]" placeholder="Anna" required /></div>
              <div><label className="block text-sm font-medium mb-1.5">Nachname</label><input type="text" className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-2xl focus:outline-none focus:border-[#C9A87C]" placeholder="Müller" required /></div>
            </div>
            <div><label className="block text-sm font-medium mb-1.5">E-Mail-Adresse</label><input type="email" className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-2xl focus:outline-none focus:border-[#C9A87C]" placeholder="anna@mueller-bau.ch" required /></div>
            <div><label className="block text-sm font-medium mb-1.5">Was brauchen Sie Unterstützung bei?</label><select className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-2xl focus:outline-none focus:border-[#C9A87C] text-[#5C6B5E]"><option>Buchhaltung & Rechnungen</option><option>Korrespondenz & E-Mails</option><option>Terminplanung</option><option>Komplettpaket</option><option>Sonstiges</option></select></div>
            <div><label className="block text-sm font-medium mb-1.5">Nachricht (optional)</label><textarea rows={4} className="w-full px-5 py-3.5 bg-white border border-[#D4C9B8] rounded-3xl focus:outline-none focus:border-[#C9A87C] resize-y" placeholder="Wir haben ca. 8–10 Stunden pro Woche..."></textarea></div>
            <button type="submit" disabled={submitted} className="mt-4 w-full py-4 bg-[#2C3E2D] hover:bg-[#1f2b20] text-[#F8F5F0] font-semibold rounded-3xl transition-all flex items-center justify-center gap-x-3 disabled:opacity-70">{submitted ? 'Wird gesendet...' : 'Anfrage abschicken →'}</button>
            <p className="text-xs text-center text-[#8A8579]">Wir melden uns innerhalb von 24 Stunden.</p>
          </form>
        </div>
      </section>

      <footer className="bg-[#2C3E2D] text-[#D4D0C8] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-y-12">
          <div className="md:col-span-5"><div className="flex items-center gap-x-3 mb-6"><div className="w-9 h-9 bg-[#C9A87C] rounded-2xl flex items-center justify-center"><span className="text-[#2C3E2D] text-xl font-bold">B</span></div><span className="font-semibold text-2xl text-white">Büroassist</span></div><div className="max-w-xs text-sm">Sympathische Bürohilfe für kleine Unternehmen in der Region Zürich und Umgebung.</div></div>
          <div className="md:col-span-3 text-sm"><div className="font-semibold text-white mb-4">Kontakt</div><div className="space-y-1.5"><div>hello@bueroassist.ch</div><div>+41 44 555 12 34</div><div className="pt-2">Seestrasse 42<br />8800 Thalwil</div></div></div>
          <div className="md:col-span-4 text-sm"><div className="font-semibold text-white mb-4">Rechtliches</div><div className="space-y-2"><div>Datenschutz</div><div>AGB</div><div>Impressum</div></div><div className="mt-8 text-xs opacity-60">© 2026 Büroassist. Mit ❤️ gemacht für kleine Firmen.</div></div>
        </div>
      </footer>
    </div>
  );
}