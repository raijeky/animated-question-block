
import QuestionBlock from '@/components/QuestionBlock';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="pt-16 pb-8">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Quiz Interattivo
          </h1>
          <p className="text-xl text-gray-600">
            Scopri le domande che cambiano dinamicamente con animazioni coinvolgenti
          </p>
        </div>
      </div>

      {/* Question Block Section */}
      <div className="flex items-center justify-center py-16 px-4">
        <QuestionBlock />
      </div>

      {/* Target Sections */}
      <div className="space-y-16 px-4 pb-16">
        <section id="design" className="max-w-4xl mx-auto text-center py-16 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Design Responsive</h2>
          <p className="text-gray-600">Sezione dedicata al design responsive e alle migliori pratiche.</p>
        </section>

        <section id="performance" className="max-w-4xl mx-auto text-center py-16 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Performance</h2>
          <p className="text-gray-600">Ottimizzazione delle performance per applicazioni web veloci.</p>
        </section>

        <section id="accessibility" className="max-w-4xl mx-auto text-center py-16 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Accessibilità</h2>
          <p className="text-gray-600">Rendere il web accessibile a tutti gli utenti.</p>
        </section>

        <section id="security" className="max-w-4xl mx-auto text-center py-16 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sicurezza</h2>
          <p className="text-gray-600">Proteggere le applicazioni web da vulnerabilità e attacchi.</p>
        </section>

        <section id="ux" className="max-w-4xl mx-auto text-center py-16 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">User Experience</h2>
          <p className="text-gray-600">Creare esperienze utente memorabili e intuitive.</p>
        </section>
      </div>
    </div>
  );
};

export default Index;
