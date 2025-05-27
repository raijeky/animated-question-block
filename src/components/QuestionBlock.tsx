
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
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="text-center space-y-6">
          {/* Titolo con parte variabile */}
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {currentStarter} "
            <span className="text-green-100 relative">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
            "?
          </h2>

          {/* Risposta */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mx-auto max-w-md">
            <p className="text-lg text-green-50 font-medium">
              Ogni azienda ha le sue esigenze, le nostre soluzioni si adattano alle tue.
            </p>
          </div>

          {/* Testo aggiuntivo prima della CTA */}
          <div className="pt-2">
            <p className="text-sm text-green-100">
              Qual è la soluzione più indicata per te? Scopriamolo insieme!
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={currentCTA.href}
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-full shadow-lg hover:bg-green-50 hover:scale-110 transform transition-all duration-300 hover:shadow-xl group"
            >
              {currentCTA.text}
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
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
