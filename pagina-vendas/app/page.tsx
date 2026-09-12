'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { 
  ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, 
  Lock, Eye, HelpCircle, FileText, XCircle, CheckSquare,
  Brain, GraduationCap, UserCheck, BookOpen, Award, Clock, Sparkles, Flame, MessageCircle, Gift
} from 'lucide-react';

export default function SalesPage() {
  const whatsappPrints = [
    '/1 (1).png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/6.png',
    '/7.png',
    '/8.png',
    '/9.png',
    '/10.png',
    '/11.png',
    '/12.png',
    '/13.png',
    '/14.png',
  ];

  const [activePrintIndex, setActivePrintIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePrintIndex((prevIndex) => (prevIndex + 1) % whatsappPrints.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [whatsappPrints.length]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-red-600 selection:text-white antialiased">
      
      <Script id="tracking-scripts" strategy="afterInteractive">
        {`// Scripts de rastreamento (Pixel, UTMify, Kirvano, etc)`}
      </Script>

      {/* BLOCO 1 — HEADLINE / SUB-HEADLINE / GATILHO DE EXCLUSIVIDADE */}
      <section className="relative pt-16 pb-28 px-4 md:pt-24 md:pb-36 max-w-5xl mx-auto flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-red-600/40 shadow-[0_0_30px_rgba(220,38,38,0.3)] mb-6 bg-zinc-900 flex items-center justify-center p-1.5">
          <img src="/logo.jpg" alt="Logo Investigação Criminal" className="w-full h-full object-cover rounded-xl" />
        </div>

        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-500 font-semibold px-4 py-1.5 rounded-full text-xs md:text-sm tracking-wide uppercase mb-6 shadow-sm">
          <Flame className="w-4 h-4 text-red-500 animate-pulse" />
          Promoção Relâmpago · Vagas Limitadas Hoje
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 max-w-4xl">
          O Método Que O <span className="text-red-500">F.B.I.</span> Usa Para Decifrar A Mente De Um Criminoso Agora Cabe Num <span className="underline decoration-red-600 underline-offset-8">Curso De Extensão</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mb-10 leading-relaxed font-normal">
          Sem precisar de faculdade de Direito, Psicologia ou Medicina. Domine a arte de <strong className="text-white underline decoration-red-500 underline-offset-4">ler pessoas</strong>, identificar segundas intenções e aplicar técnicas de perfilamento comportamental em investigações reais.
        </p>
        
        <div className="bg-zinc-900/90 border border-zinc-800 py-3.5 px-8 rounded-2xl mb-12 shadow-xl backdrop-blur-sm">
          <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest block mb-1">Oferta Especial de Lançamento</span>
          <span className="text-green-400 font-extrabold text-lg md:text-xl">Desconto exclusivo por tempo limitado</span>
        </div>

        <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(220,38,38,0.2)] relative opacity-95">
          <img src="/hero-desk-DVe24-vm.jpg" alt="Mesa de investigação" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
        </div>
      </section>

      {/* BLOCO 2 — IDENTIFICAÇÃO + PROMESSA / PROBLEMA + SOLUÇÃO / BOTÃO ANCORAGEM */}
      <section className="bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950 py-24 px-4 border-t border-zinc-800/80">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12 rounded-3xl border border-zinc-800/80 shadow-2xl space-y-6">
            <p className="text-zinc-200 text-lg md:text-xl leading-relaxed">
              Com este e-book, você vai aprender a acessar um nível de percepção que a maioria das pessoas nunca desenvolve. Você não vai mais apenas ouvir o que dizem… vai começar a entender o que está por trás.
            </p>

            <div className="py-4 space-y-3">
              {[
                "confundiu atenção com interesse?",
                "ignorou sinais claros e depois se arrependeu?",
                "sentiu que a pessoa dizia uma coisa… mas demonstrava outra?",
                "perdeu atração ou conexão sem entender o porquê?",
                "quis transmitir mais confiança, mas não soube como?"
              ].map((pergunta, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-300 text-base md:text-lg">
                  <span className="text-red-500 font-bold">➤</span>
                  <span>{pergunta}</span>
                </div>
              ))}
            </div>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-center space-y-2">
              <p className="text-red-400 font-black text-lg md:text-xl">👉 O problema nunca foi falta de sinais.</p>
              <p className="text-zinc-200 font-semibold text-base">Foi não saber interpretar.</p>
            </div>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Ao longo da leitura, você vai descobrir como usar a linguagem corporal a seu favor e desenvolver uma percepção muito mais apurada sobre as pessoas e sobre você mesmo.
            </p>

            <div className="pt-2">
              <span className="text-white font-bold block mb-3 text-base">Você vai aprender a:</span>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-zinc-200 text-sm font-medium">Ler sinais do corpo e identificar intenções ocultas</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-zinc-200 text-sm font-medium">Decifrar microexpressões com precisão</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-zinc-900/90 border border-red-950/60 p-8 rounded-3xl shadow-xl space-y-4">
              <span className="text-red-500 font-extrabold uppercase text-xs tracking-widest flex items-center gap-2">
                <XCircle className="w-4 h-4" /> O Problema
              </span>
              <p className="text-zinc-300 text-lg">Você tenta entender o comportamento alheio, mas sem método, acaba julgando pelas aparências e se enganando.</p>
              <img src="/transferir (5).jpg" alt="Cena do crime" className="rounded-2xl w-full h-44 object-cover border border-red-900/40 shadow-md mt-4 opacity-85" />
            </div>
            
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-green-600/30 p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-center h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl pointer-events-none"></div>
              <span className="text-green-400 font-extrabold block mb-3 uppercase text-xs tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> A Solução
              </span>
              <p className="text-zinc-100 text-lg font-medium leading-relaxed">O Curso de Extensão ensina o passo a passo científico do perfilamento criminal para você treinar seus olhos e aprender a ler qualquer pessoa com precisão cirúrgica.</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <a href="#oferta" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all">
              Quero aproveitar a promoção de hoje <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* BLOCO 3 — PROVAS / DEPOIMENTOS EM WHATSAPP DINÂMICO (FILINHA) */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-green-600/10 border border-green-600/30 text-green-400 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> Prova Social Real (WhatsApp)
          </span>
          <h2 className="text-2xl md:text-4xl font-black mt-4 uppercase tracking-tight text-zinc-100">
            Veja O Que Nossos Alunos Estão Dizendo No WhatsApp
          </h2>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-md bg-zinc-950 p-3 rounded-2xl border border-zinc-800 shadow-inner flex justify-center">
            <div className="w-full h-[480px] rounded-xl overflow-hidden relative flex items-center justify-center bg-zinc-900">
              {whatsappPrints.map((printSrc, idx) => (
                <img 
                  key={idx}
                  src={printSrc} 
                  alt={`Prova Social WhatsApp ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${idx === activePrintIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-1.5 mt-6">
            {whatsappPrints.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActivePrintIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === activePrintIndex ? 'bg-red-600 w-6' : 'bg-zinc-700'}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-zinc-900/90 p-8 md:p-14 rounded-3xl border border-zinc-800/80 space-y-6 text-zinc-300 text-lg leading-relaxed shadow-xl relative my-12">
          <div className="absolute -top-3 left-10 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow">
            Análise Lógica
          </div>
          <p className="pt-2">Você já assistiu <em>Mindhunter</em> ou documentários de investigação e percebeu como os especialistas parecem ler a mente dos suspeitos com poucas palavras?</p>
          <p>Eles não têm superpoderes. Eles aprenderam a mapear linguagem corporal, tom de voz, desvios de olhar e microexpressões faciais.</p>
          <p>Isso significa que <strong className="text-white">ler pessoas</strong> é uma competência que pode ser estudada, memorizada e aplicada por qualquer pessoa dedicada.</p>
          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 my-4 text-white font-semibold">
            Nossos módulos em E-book entregam exatamente este mapa mental detalhado.
          </div>
          <p className="text-red-400 font-bold text-xl pt-2">Deixe de ser enganado pelas aparências e comece a enxergar o que as pessoas tentam esconder.</p>

          <div className="pt-6">
             <img src="/Fiesta-Cluedo ambientada en los años 20.jpg" alt="Quadro de conexões" className="rounded-2xl w-full border border-zinc-800 shadow-xl opacity-90" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-950/40 via-zinc-900 to-zinc-950 p-8 md:p-12 rounded-3xl border-2 border-red-600/60 shadow-[0_0_50px_rgba(220,38,38,0.25)] relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 blur-3xl pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 border border-red-600/40 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow">
            Mecanismo Único
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight">
            Mapeamento de Modus Operandi
          </h2>

          <p className="text-zinc-200 text-lg md:text-xl leading-relaxed font-normal">
            O curso é mais eficaz porque <strong className="text-white underline decoration-red-500 underline-offset-4">não ensina apenas a caçar mentiras isoladas</strong>, mas sim a mapear o padrão operacional da pessoa. Ao descobrir como o manipulador estrutura a mentira uma vez, o método te dá a lógica exata para prever e neutralizar todas as manipulações futuras antes mesmo de ele abrir a boca.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden border border-red-900/50 shadow-[0_0_40px_rgba(220,38,38,0.25)] bg-zinc-900 p-2">
          <img src="/Hand_opening_investigative_dossier_202609071653.gif" alt="Abrindo o Dossiê Investigativo" className="w-full h-auto rounded-2xl object-cover" />
        </div>
      </section>

      {/* BLOCO 4 — HEADLINE PROMESSA + BULLETS DE DOR + PROVAS + BOTÃO ANCORAGEM */}
      <section className="bg-zinc-900/60 py-24 px-4 border-y border-zinc-800/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-12 text-center uppercase tracking-tight text-zinc-100 leading-snug">
            O Segredo Definitivo Para Ler Pessoas E Mapear Perfis Com Precisão
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-4">
              {[
                "Descubra como ler pessoas através da análise de microexpressões e postura",
                "Sem precisar fazer faculdade de Direito ou Psicologia para entender comportamento humano",
                "Identifique sinais de manipulação, falsidade e intenções ocultas em segundos",
                "Funciona perfeitamente na vida profissional, pessoal e em investigações",
                "Inclui simulação real de cena de crime pra testar sua habilidade analítica"
              ].map((bullet, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/>
                  <span className="text-zinc-200 text-sm md:text-base font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <img src="/My dream job is to be a CSI agent!.jpg" alt="Perfilador Criminal" className="rounded-3xl w-full max-w-sm shadow-2xl border border-zinc-800" />
            </div>
          </div>

          <div className="mb-16 w-full max-w-3xl mx-auto rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img src="/transferir (10).jpg" alt="Análise de dados investigativos" className="w-full h-72 object-cover opacity-90" />
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl grid md:grid-cols-3 gap-8 items-center mb-16">
            <div className="md:col-span-1 flex justify-center">
              <img src="/Image-FX-2026-09-06 (1).jpg" alt="Matheus O. Silva" className="rounded-2xl w-full max-w-[240px] md:max-w-none object-cover border-2 border-zinc-700 shadow-xl" />
            </div>
            <div className="md:col-span-2 space-y-3">
              <span className="text-blue-400 font-extrabold uppercase text-xs tracking-widest block">Professor Titular</span>
              <h3 className="text-2xl md:text-3xl font-black text-white">Matheus O. Silva (CRP 06/143151)</h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
                Mestrando em Psicologia Forense, pós-graduado em Avaliação Psicológica, especialista em Psicologia Jurídica e em Psicologia Investigativa e Criminal Profiling. Psicólogo e neuropsicólogo formado pelo Instituto de Psiquiatria do Hospital das Clínicas da Faculdade de Medicina – USP, perito forense pela UNAERP, psicólogo forense e perito técnico criminal assistente. Coordenador e docente de cursos de análise psicológica e pós-graduação, proprietário do Instituto de Especialização em Psicologia Jurídica, Ciências Forenses, Perícia Criminal e Investigação Forense, e consultor em Psicologia Forense, Criminal e Investigativa.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="#oferta" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all">
              Quero garantir meu acesso promocional agora <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* BLOCO 5 — HEADLINE EXCLUSIVIDADE + 3-5 PROBLEMAS + PROVAS + BOTÃO */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-4 text-center uppercase tracking-tight text-zinc-100 leading-snug">
          Resultado da sua avaliação. Suas respostas indicam que você pode estar passando por:
        </h2>
        <p className="text-zinc-400 text-center mb-12 text-sm">Identificamos os pontos críticos que travam sua percepção das pessoas.</p>

        <div className="space-y-4 mb-12">
          {[
            "Você confunde intuição vazia com técnica real de leitura comportamental.",
            "Você não sabe quais indícios físicos e verbais analisar quando alguém está mentindo ou escondendo algo.",
            "Você sente que falta um método estruturado para decifrar a mente humana sem achismos.",
            "Você consome conteúdos rasos sobre psicologia que não ensinam a aplicação prática no dia a dia.",
            "Você quer dominar a habilidade de ler pessoas como um perito forense de elite."
          ].map((prob, idx) => (
            <div key={idx} className="flex gap-4 items-start bg-zinc-900/80 p-5 md:p-6 rounded-2xl border border-zinc-800 shadow-sm">
              <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5"/>
              <span className="text-zinc-300 text-base md:text-lg">{prob}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#oferta" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all">
            Quero resolver isso hoje na promoção <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* BLOCO 6 — HEADLINE PROMESSA + PROMESSA DOR & SOLUÇÃO */}
      <section className="bg-zinc-900/60 py-24 px-4 border-y border-zinc-800/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-12 text-center uppercase tracking-tight text-zinc-100 leading-snug">
            Acabe Com Toda Insegurança De Leitura Em Poucas Semanas Com O Método De Extensão
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 p-7 rounded-2xl border border-zinc-800/80 shadow-xl hover:border-zinc-700 transition-colors">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Aprenda a ler pessoas na prática
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Domine métodos reais de perfilamento (F.B.I., A.E.C., C.A.P.) focados em identificar traços de personalidade e intenções ocultas.</p>
            </div>
            <div className="bg-zinc-950 p-7 rounded-2xl border border-zinc-800/80 shadow-xl hover:border-zinc-700 transition-colors">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Separe achismo de evidência real
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Pare de adivinhar o que os outros pensam e passe a analisar padrões comportamentais validados pela ciência forense.</p>
            </div>
            <div className="bg-zinc-950 p-7 rounded-2xl border border-zinc-800/80 shadow-xl hover:border-zinc-700 transition-colors">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Estude no seu ritmo com E-books
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">30 módulos completos em E-book estruturado para você absorver a arte de ler pessoas no seu próprio tempo.</p>
            </div>
            <div className="bg-zinc-950 p-7 rounded-2xl border border-zinc-800/80 shadow-xl hover:border-zinc-700 transition-colors">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Certificação oficial inclusa
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Certificado digital de 20h para coroar seu novo repertório em análise comportamental e perfilamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 7 — COMO FUNCIONA (PASSOS + BENEFÍCIOS FUTUROS) */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-16 text-center uppercase tracking-tight text-zinc-100">
          Como Funciona o Treinamento Passo a Passo
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16 items-center">
          <img src="/transferir (7).jpg" alt="Investigação" className="rounded-2xl w-full h-48 object-cover border border-zinc-800 opacity-80 shadow" />
          <div className="flex justify-center p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800">
            <img src="/transferir (9).jpg" alt="Lupa investigativa" className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.3)] animate-pulse" />
          </div>
          <img src="/transferir (6).jpg" alt="Perito" className="rounded-2xl w-full h-48 object-cover border border-zinc-800 opacity-80 object-top shadow" />
        </div>

        <div className="space-y-6">
          <div className="flex gap-6 items-start bg-zinc-900/90 p-7 md:p-8 rounded-2xl border border-zinc-800 shadow-xl">
            <span className="bg-red-600 text-white font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">1</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Trilha de Leitura Comportamental em E-books</h3>
              <p className="text-zinc-300 text-base leading-relaxed">Você estuda os módulos passo a passo, aprendendo a técnica exata de como ler pessoas e desvendar perfis mentais complexos.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-zinc-900/90 p-7 md:p-8 rounded-2xl border border-zinc-800 shadow-xl">
            <span className="bg-red-600 text-white font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">2</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Métodos Aplicados</h3>
              <p className="text-zinc-300 text-base leading-relaxed">Domine protocolos investigativos reais (F.B.I., A.E.C., C.A.P.) adaptados para a leitura comportamental no cotidiano e em investigações.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-zinc-900/90 p-7 md:p-8 rounded-2xl border border-zinc-800 shadow-xl">
            <span className="bg-red-600 text-white font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">3</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Simulação Prática</h3>
              <p className="text-zinc-300 text-base leading-relaxed">Coloque seu poder de leitura à prova na simulação virtual interativa &quot;O Perito é Você&quot;.</p>
            </div>
          </div>

          <div className="flex gap-6 items-start bg-zinc-900/90 p-7 md:p-8 rounded-2xl border border-zinc-800 shadow-xl">
            <span className="bg-red-600 text-white font-black text-xl w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">4</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Certificação Oficial</h3>
              <p className="text-zinc-300 text-base leading-relaxed">Receba seu certificado digital de 20h ao concluir o treinamento completo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 8 — ENTREGÁVEIS + 5 BÔNUS EXCLUSIVOS DE LEITURA CORPORAL */}
      <section className="bg-zinc-900/60 py-24 px-4 border-y border-zinc-800/80">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-16 text-center uppercase tracking-tight text-zinc-100">
            O Que Você Vai Receber + Bônus Exclusivos
          </h2>

          <div className="mb-16 flex justify-center">
            <img src="/transferir (8).jpg" alt="Mesa de Evidências" className="rounded-3xl w-full max-w-3xl border border-zinc-800 shadow-2xl opacity-90" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex gap-4 items-center shadow">
              <BookOpen className="w-8 h-8 text-red-500 shrink-0"/>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">Treinamento completo para ler pessoas (30 E-books)</span>
            </div>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex gap-4 items-center shadow">
              <Eye className="w-8 h-8 text-red-500 shrink-0"/>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">Simulação Virtual: &quot;O Perito é Você&quot;</span>
            </div>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex gap-4 items-center shadow">
              <FileText className="w-8 h-8 text-red-500 shrink-0"/>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">Apostila digital + guias de leitura corporal</span>
            </div>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex gap-4 items-center shadow">
              <BookOpen className="w-8 h-8 text-red-500 shrink-0"/>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">15 Conteúdos Extras em E-book</span>
            </div>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex gap-4 items-center shadow">
              <UserCheck className="w-8 h-8 text-red-500 shrink-0"/>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">Grupo de estudantes e analistas no WhatsApp</span>
            </div>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex gap-4 items-center shadow">
              <Clock className="w-8 h-8 text-red-500 shrink-0"/>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">Acesso vitalício ao material</span>
            </div>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex gap-4 items-center shadow">
              <Award className="w-8 h-8 text-red-500 shrink-0"/>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">Certificado digital de 20h</span>
            </div>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex gap-4 items-center shadow md:col-span-2">
              <GraduationCap className="w-8 h-8 text-red-500 shrink-0"/>
              <span className="font-semibold text-zinc-200 text-sm md:text-base">100% em E-book, estude de onde quiser com total liberdade</span>
            </div>
          </div>

          {/* 5 BÔNUS EXCLUSIVOS COM PERSUASÃO DE PROMOÇÃO */}
          <div className="space-y-6">
            <div className="text-center mb-10">
              <span className="bg-red-600 text-white font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-wider">Pacote de Presentes Especiais</span>
              <h3 className="text-2xl md:text-3xl font-black mt-3 text-white uppercase">Leve Também 5 Bônus Exclusivos de Leitura Corporal</h3>
              <p className="text-zinc-400 text-sm mt-1">Garantindo sua vaga hoje, você não paga absolutamente nada por estes materiais extras.</p>
            </div>

            {/* Bônus 1 */}
            <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 md:p-8 rounded-3xl border border-red-600/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-2xl border border-red-600/40 text-red-500 shrink-0 mt-1">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-red-400 font-bold text-xs uppercase tracking-wider block mb-1">Bônus Exclusivo 01</span>
                  <h4 className="text-white text-lg md:text-xl font-bold mb-1">Técnica da Sobrancelha em Pé</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Descubra como identificar microexpressões faciais rápidas de surpresa e desconfiança genuína em frações de segundo.</p>
                </div>
              </div>
              <div className="text-center md:text-right shrink-0 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 w-full md:w-auto">
                <span className="text-zinc-500 text-xs line-through block font-bold">De R$ 237,67</span>
                <span className="text-green-400 font-black text-xl md:text-2xl">Por R$ 0</span>
                <span className="text-xs text-zinc-400 block mt-0.5 uppercase font-semibold">Apenas hoje</span>
              </div>
            </div>

            {/* Bônus 2 */}
            <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 md:p-8 rounded-3xl border border-red-600/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-2xl border border-red-600/40 text-red-500 shrink-0 mt-1">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-red-400 font-bold text-xs uppercase tracking-wider block mb-1">Bônus Exclusivo 02</span>
                  <h4 className="text-white text-lg md:text-xl font-bold mb-1">Manual de Desvios Oculares e Mentira</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">O guia definitivo para rastrear o movimento dos olhos e saber exatamente quando alguém está inventando uma história.</p>
                </div>
              </div>
              <div className="text-center md:text-right shrink-0 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 w-full md:w-auto">
                <span className="text-zinc-500 text-xs line-through block font-bold">De R$ 197,90</span>
                <span className="text-green-400 font-black text-xl md:text-2xl">Por R$ 0</span>
                <span className="text-xs text-zinc-400 block mt-0.5 uppercase font-semibold">Apenas hoje</span>
              </div>
            </div>

            {/* Bônus 3 */}
            <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 md:p-8 rounded-3xl border border-red-600/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-2xl border border-red-600/40 text-red-500 shrink-0 mt-1">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-red-400 font-bold text-xs uppercase tracking-wider block mb-1">Bônus Exclusivo 03</span>
                  <h4 className="text-white text-lg md:text-xl font-bold mb-1">Leitura de Postura Defensiva e Ataque</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Aprenda a decodificar braços cruzados, barreiras físicas e sinais corporais de hostilidade oculta antes que se manifestem.</p>
                </div>
              </div>
              <div className="text-center md:text-right shrink-0 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 w-full md:w-auto">
                <span className="text-zinc-500 text-xs line-through block font-bold">De R$ 149,90</span>
                <span className="text-green-400 font-black text-xl md:text-2xl">Por R$ 0</span>
                <span className="text-xs text-zinc-400 block mt-0.5 uppercase font-semibold">Apenas hoje</span>
              </div>
            </div>

            {/* Bônus 4 */}
            <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 md:p-8 rounded-3xl border border-red-600/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-2xl border border-red-600/40 text-red-500 shrink-0 mt-1">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-red-400 font-bold text-xs uppercase tracking-wider block mb-1">Bônus Exclusivo 04</span>
                  <h4 className="text-white text-lg md:text-xl font-bold mb-1">Decifrando Microgestos de Mãos e Pés</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Descubra o que a ansiedade nos dedos, batidas de pé e gestos involuntários revelam sobre o verdadeiro estado mental da pessoa.</p>
                </div>
              </div>
              <div className="text-center md:text-right shrink-0 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 w-full md:w-auto">
                <span className="text-zinc-500 text-xs line-through block font-bold">De R$ 189,00</span>
                <span className="text-green-400 font-black text-xl md:text-2xl">Por R$ 0</span>
                <span className="text-xs text-zinc-400 block mt-0.5 uppercase font-semibold">Apenas hoje</span>
              </div>
            </div>

            {/* Bônus 5 */}
            <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 md:p-8 rounded-3xl border border-red-600/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-2xl border border-red-600/40 text-red-500 shrink-0 mt-1">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-red-400 font-bold text-xs uppercase tracking-wider block mb-1">Bônus Exclusivo 05</span>
                  <h4 className="text-white text-lg md:text-xl font-bold mb-1">Protocolo de Neutralização de Manipuladores</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">Ferramentas avançadas de inteligência emocional para desarmar pessoas tóxicas usando apenas postura e tom de voz.</p>
                </div>
              </div>
              <div className="text-center md:text-right shrink-0 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 w-full md:w-auto">
                <span className="text-zinc-500 text-xs line-through block font-bold">De R$ 215,50</span>
                <span className="text-green-400 font-black text-xl md:text-2xl">Por R$ 0</span>
                <span className="text-xs text-zinc-400 block mt-0.5 uppercase font-semibold">Apenas hoje</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BLOCO 9 — PROVAS SOCIAIS (GALERIA / DEPOIMENTOS EM WHATSAPP) */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-green-600/10 border border-green-600/30 text-green-400 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> Provas Sociais Oficiais
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 uppercase tracking-tight text-zinc-100">
            O Que Nossos Alunos Estão Dizendo
          </h2>
          <p className="text-zinc-400 text-base mt-2">Veja os prints reais enviados por quem já domina a leitura corporal.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsappPrints.map((printSrc, idx) => (
            <div key={idx} className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-3xl shadow-xl flex flex-col items-center justify-center">
              <div className="w-full bg-zinc-950 p-2 rounded-2xl border border-zinc-800 flex justify-center">
                <img src={printSrc} alt={`Print WhatsApp ${idx + 1}`} className="w-full h-auto max-h-[400px] object-contain rounded-xl" />
              </div>
              <span className="text-zinc-500 text-xs mt-3 font-semibold">Aluno Verificado · WhatsApp</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO 10 — VANTAGENS DO PRODUTO (BULLETS) */}
      <section className="bg-zinc-900/60 py-24 px-4 border-y border-zinc-800/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-16 text-center uppercase tracking-tight text-zinc-100">
            Por Que Escolher Este Curso?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Aprenda a ler pessoas de qualquer lugar, sem sair de casa",
              "Sem pré-requisito de faculdade ou concurso",
              "Estude no seu tempo, sem cronograma fixo",
              "Métodos usados por peritos reais para decifrar comportamentos",
              "Simulação prática pra testar suas novas habilidades",
              "Certificado digital pra reforçar seu currículo",
              "Grupo de discussão com outros entusiastas da área",
              "Acesso vitalício garantido"
            ].map((vant, idx) => (
              <div key={idx} className="flex gap-3.5 items-center bg-zinc-950 p-5 rounded-2xl border border-zinc-800 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0"/>
                <span className="text-zinc-200 font-medium text-sm md:text-base">{vant}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PÚBLICO-ALVO (COMPLEMENTO) */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-xl space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            Para Quem É Este Treinamento?
          </h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            O treinamento é destinado a estudantes, profissionais e demais interessados em ampliar seus conhecimentos sobre psicologia e comportamento humano. É indicado para pessoas que desejam compreender melhor as relações humanas, desenvolver habilidades de comunicação, fortalecer a inteligência emocional e aprimorar competências que podem ser aplicadas tanto na vida pessoal quanto no ambiente profissional.
          </p>
        </div>
      </section>

      {/* BLOCO 11 — OFERTA IRRESISTÍVEL (COM LINK DO CHECKOUT KIWIFY) */}
      <section id="oferta" className="py-28 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-red-600/80 rounded-3xl p-8 md:p-14 shadow-[0_0_80px_rgba(220,38,38,0.2)] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 blur-3xl pointer-events-none"></div>
            
            <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-5 rounded-full mb-8 inline-block shadow">Promoção Relâmpago Válida Apenas Hoje</span>
            
            <div className="flex flex-col items-center justify-center mb-10">
              <span className="text-zinc-500 text-xl line-through mb-1 font-bold">De R$ 197,90</span>
              <span className="text-zinc-300 text-sm uppercase tracking-wider mb-2 font-semibold">Por apenas:</span>
              <div className="flex items-baseline justify-center text-red-500 gap-1.5">
                <span className="text-6xl md:text-8xl font-black tracking-tighter">R$ 47,90</span>
              </div>
              <span className="text-zinc-400 text-base mt-2 font-medium">Pagamento único · Acesso vitalício imediato</span>
            </div>

            <a 
              href="https://pay.kiwify.com.br/6y4KJo5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full inline-block bg-green-600 hover:bg-green-500 text-white font-black text-xl md:text-2xl py-6 rounded-2xl shadow-[0_0_50px_rgba(22,163,74,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 mb-5 text-center"
            >
              Sim, quero garantir meu acesso por R$ 47,90
            </a>
            
            <p className="text-zinc-400 text-sm flex items-center justify-center gap-2 font-medium">
              <Lock className="w-4 h-4 text-zinc-500"/> Acesso imediato após a confirmação do pagamento.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 12 — GARANTIA FATAL + FAQ */}
      <section className="bg-zinc-900/60 py-24 px-4 border-t border-zinc-800/80">
        <div className="max-w-4xl mx-auto space-y-20">
          
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl pointer-events-none"></div>
            
            <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 flex items-center justify-center">
              <img src="/PSD, PNG, Vetores, Flyers e Mockups Editáveis.jpg" alt="Selo de Garantia 30 Dias" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]" />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black mb-3 uppercase tracking-tight text-white">Garantia Fatal Incondicional De 15 Dias</h3>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-normal">
                Damos 15 dias completos para você testar, ler os módulos e aplicar as técnicas de leitura comportamental. Se por qualquer motivo você não tiver resultados ou achar que o método não é para você, devolveremos 100% do seu dinheiro sem burocracia.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black text-center mb-12 uppercase tracking-tight">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {[
                { q: 'O curso realmente ensina a ler pessoas?', a: 'Sim! O treinamento foca em técnicas de perfilamento comportamental e análise de microexpressões usadas por peritos para decifrar intenções e comportamentos.' },
                { q: 'Preciso ter faculdade de Direito ou Psicologia?', a: 'Não! O treinamento foi desenhado para iniciantes e entusiastas, sem exigir nenhum pré-requisito acadêmico.' },
                { q: 'Quando vou ter acesso?', a: 'O acesso é liberado de forma imediata após a confirmação do pagamento no seu e-mail.' },
                { q: 'Por quanto tempo posso ler o material?', a: 'Você terá acesso vitalício a todo o conteúdo e atualizações.' },
                { q: 'Quais as formas de pagamento?', a: 'Você pode pagar via cartão de crédito em até 10x, PIX ou boleto bancário à vista.' },
                { q: 'E se eu não gostar do treinamento?', a: 'Basta solicitar o reembolso dentro do prazo de 15 dias e devolveremos 100% do seu dinheiro, sem burocracia.' }
              ].map((faq, idx) => (
                <div key={idx} className="bg-zinc-950 p-6 md:p-7 rounded-2xl border border-zinc-800 shadow-md">
                  <strong className="text-white block mb-2 text-base md:text-lg font-bold flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-red-500 shrink-0"/> {faq.q}
                  </strong>
                  <span className="text-zinc-400 text-sm md:text-base leading-relaxed">{faq.a}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}