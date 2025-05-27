
import { useTypewriter } from '@/hooks/useTypewriter';

const QuestionBlock = () => {
  const questions = [
    "l'importanza del design responsive",
    "l'ottimizzazione delle performance",
    "l'accessibilità web",
    "la sicurezza del codice",
    "l'esperienza utente"
  ];

  const questionStarters = [
    "Come possiamo migliorare",
    "Quali sono i vantaggi di",
    "Perché è fondamentale",
    "Come garantire",
    "Come ottimizzare"
  ];

  const ctaButtons = [
    { text: "Scopri il Design", href: "#design" },
    { text: "Migliora le Performance", href: "#performance" },
    { text: "Rendi Accessibile", href: "#accessibility" },
    { text: "Aumenta la Sicurezza", href: "#security" },
    { text: "Ottimizza l'UX", href: "#ux" }
  ];

  const { currentText, currentWordIndex } = useTypewriter({
    words: questions,
    speed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 3000
  });

  const currentCTA = ctaButtons[currentWordIndex];
  const currentStarter = questionStarters[currentWordIndex];

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="relative bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-12 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center">
        {/* Animazione onda di sfondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-wave-1"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-wave-2"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-wave-3"></div>
        </div>
        
        {/* Contenuto principale */}
        <div className="relative z-10 text-left space-y-8">
          {/* Titolo principale con parte variabile */}
          <div className="min-h-[120px] flex items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {currentStarter} "
              <span className="text-green-100 relative">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
              "?
            </h1>
          </div>

          {/* Risposta */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed">
              Ogni azienda ha le sue esigenze, le nostre soluzioni si adattano alle tue.
            </p>
            
            <p className="text-lg text-green-100 leading-relaxed max-w-2xl">
              Sistemi integrati, processi smart, piattaforme intelligenti, per risolvere i problemi di oggi e assicurarti un vantaggio competitivo sul domani.
            </p>
          </div>

          {/* Testo aggiuntivo prima della CTA */}
          <div className="pt-4">
            <p className="text-base text-green-100">
              Qual è la soluzione più indicata per te? Scopriamolo insieme!
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href={currentCTA.href}
              className="inline-flex items-center px-8 py-4 bg-black text-white font-bold text-lg rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 hover:shadow-xl group border-2 border-black"
            >
              {currentCTA.text}
              <svg 
                className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBlock;
