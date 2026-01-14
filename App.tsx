import React, { useState, useEffect } from 'react';
import { QuizStep } from './components/QuizStep';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';
import { LoadingScreen } from './components/LoadingScreen';
import { SalesPage } from './components/SalesPage';
import { StepType } from './types';
import { Check, Star } from 'lucide-react';

// Lista de todas as imagens para carregar em background
const imagesToPreload = [
  "https://i.imgur.com/zG4MT7C.jpeg", // Autora
  "https://quentesecarentes.com.br/wp-content/uploads/2019/10/banner29112016-009.jpg", // Banner Sales
  "https://static1.minhavida.com.br/articles/0a/38/77/3a/9-posicao-sexual-article_m-1.jpg", // Slide 1
  "https://i0.statig.com.br/bancodeimagens/el/8r/9q/el8r9qfvthpdr6usg7c4h1tsp.jpg", // Slide 2
  "https://static1.minhavida.com.br/articles/49/ba/93/e0/5-posicao-sexual-article-1.jpg", // Slide 3
  "https://i.imgur.com/xQjj8N5.png" // Logo
];

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, any>>({});

  // Disparar o Pixel PageView ao carregar o App
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  // Preload images on mount
  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentStep]);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleOptionSelect = (stepIndex: number, option: string) => {
    setSelectedOptions(prev => ({ ...prev, [stepIndex]: option }));
    nextStep(); // Auto advance for single select
  };

  const handleMultiSelect = (stepIndex: number, option: string) => {
    const current = selectedOptions[stepIndex] || [];
    const updated = current.includes(option)
      ? current.filter((item: string) => item !== option)
      : [...current, option];
    
    setSelectedOptions(prev => ({ ...prev, [stepIndex]: updated }));
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <QuizStep onNext={nextStep}>
            <div className="space-y-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                Surpreenda seu parceiro inovando com posições nunca vistas antes
              </h1>
              {/* Imagem com prioridade alta de carregamento */}
              <img 
                src="https://i.imgur.com/Fgw1OG5.jpeg" 
                alt="Intro" 
                className="w-full rounded-2xl shadow-lg" 
                width="400"
                height="300"
                style={{ contentVisibility: 'auto' }}
              />
              <div className="space-y-4 text-left">
                <p className="text-gray-800 text-lg font-medium">😈 Essas 50 posições secretas vão fazer ele esquecer todas as outras mulheres e desejar apenas você</p>
                <p className="text-gray-800 text-lg font-medium">🔥 Ele vai implorar pela sua atenção e pensar em você 24h por dia</p>
                <p className="text-gray-800 text-lg font-medium">🤫 Você nunca mais vai ser ignorada, trocada ou se sentir insegura porque ele não te procura mais…</p>
              </div>
            </div>
          </QuizStep>
        );

      case 1:
        return (
          <QuizStep onNext={nextStep}>
            <div className="space-y-6 text-center">
              <h2 className="text-xl font-bold text-gray-900">Conheça sua professora: Ana Julia <br/><span className="text-red-600 font-normal text-base">Criadora do MANUAL DAS POSIÇÕES SECRETAS</span></h2>
              <img src="https://i.imgur.com/zG4MT7C.jpeg" alt="Ana Julia" className="w-full rounded-2xl shadow-lg" loading="eager" />
              <p className="text-gray-700">Uma sexóloga que se tornou uma das profissionais mais reconhecidas e respeitadas do país.</p>
              <div className="bg-red-50 p-4 rounded-xl">
                 <p className="font-bold text-red-700">Sexóloga e especialista em sexualidade feminina</p>
              </div>
              <p className="text-gray-700">Já ajudou mais de 73 mil mulheres a dominarem a mente masculina se tornarem inesquecíveis na cama</p>
            </div>
          </QuizStep>
        );

      case 2:
        return (
          <QuizStep onNext={nextStep} showButton={false}>
            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-600 text-sm mb-2">Antes de liberar o seu acesso ao Manual das Posições Matadoras, preciso saber:</p>
                <h2 className="text-xl font-bold text-gray-900">Em qual momento da sua vida amorosa você está nesse momento</h2>
              </div>
              <div className="space-y-3">
                {["💍 Estou em um relacionamento", "💘 Estou vivendo um romance mas ainda não é oficial", "💃 Sou solteira e estou livre", "🤔 Minha situação é complicada…"].map((opt) => (
                  <Button key={opt} variant="secondary" onClick={() => handleOptionSelect(2, opt)} className="text-left py-4 px-4 text-base font-medium">
                    {opt}
                  </Button>
                ))}
              </div>
            </div>
          </QuizStep>
        );

      case 3:
        return (
          <QuizStep onNext={nextStep} showButton={false}>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 text-center">Quando o assunto é sexo, como você se classifica?</h2>
              <div className="space-y-3">
                {["🙈 Sou iniciante total, preciso aprender do zero", "😕 Dou pro gasto, mas fico insegura em algumas situações", "😏 Mando bem, mas falta variedade", "😈 Eu arraso, mas quero novas técnicas"].map((opt) => (
                  <Button key={opt} variant="secondary" onClick={() => handleOptionSelect(3, opt)} className="text-left py-4 px-4 text-base font-medium">
                    {opt}
                  </Button>
                ))}
              </div>
            </div>
          </QuizStep>
        );

      case 4:
        return (
          <QuizStep onNext={nextStep} showButton={false}>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 text-center">Qual sua maior dificuldade na hora do sexo?</h2>
              <div className="space-y-3">
                {["😶 Não conseguir surpreender de verdade", "👀 Fico sem graça de testar novas técnicas e acabo indo no básico", "🥱 Cansar rápido e perder o ritmo", "🥹 Não saber variar as técnicas"].map((opt) => (
                  <Button key={opt} variant="secondary" onClick={() => handleOptionSelect(4, opt)} className="text-left py-4 px-4 text-base font-medium">
                    {opt}
                  </Button>
                ))}
              </div>
            </div>
          </QuizStep>
        );

      case 5:
        return (
          <QuizStep onNext={nextStep}>
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900">O que você quer que aconteça depois de aplicar as 50 POSIÇÕES SECRETAS?</h2>
                <p className="text-sm text-gray-500 mt-2">Pode selecionar mais de uma opção</p>
              </div>
              <div className="space-y-3">
                {["🔥 Ver ele gemendo e perdendo o controle", "💦 Fazer ele gozar muito e tremer de prazer", "😈 Sentir que ele nunca vai me esquecer", "🤲 Sentir que ele está totalmente nas minhas mãos", "👑 Ouvir dele que eu sou a melhor que ele já teve"].map((opt) => {
                  const isSelected = (selectedOptions[5] || []).includes(opt);
                  return (
                    <div 
                      key={opt} 
                      onClick={() => handleMultiSelect(5, opt)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${isSelected ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 bg-white text-gray-700'}`}
                    >
                      <span className="font-medium text-sm sm:text-base">{opt}</span>
                      {isSelected && <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white"><Check size={14}/></div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </QuizStep>
        );

      case 6: // Carousel
        return (
          <QuizStep onNext={nextStep}>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 text-center">Veja o relato de algumas alunas que já aplicaram a técnica das posições secretas…</h2>
              
              <div className="bg-gray-50 p-6 rounded-2xl shadow-inner space-y-4">
                 <div className="flex gap-1 text-yellow-400 justify-center"><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/></div>
                 <p className="text-center italic text-gray-700">"Meu Deus, nunca imaginei que uma simples mudança de posição faria ele ficar tão obcecado. Ele me mandou flores hoje de manhã!"</p>
                 <p className="text-center font-bold text-sm">- Fernanda S.</p>
              </div>
               <div className="bg-gray-50 p-6 rounded-2xl shadow-inner space-y-4 hidden sm:block">
                 <div className="flex gap-1 text-yellow-400 justify-center"><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/></div>
                 <p className="text-center italic text-gray-700">"Achava que meu casamento tinha esfriado, mas depois do módulo 2, parece que estamos em lua de mel de novo."</p>
                 <p className="text-center font-bold text-sm">- Claudia M.</p>
              </div>
               <div className="bg-gray-50 p-6 rounded-2xl shadow-inner space-y-4">
                 <div className="flex gap-1 text-yellow-400 justify-center"><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/><Star className="fill-current"/></div>
                 <p className="text-center italic text-gray-700">"Simplesmente funciona. Eu era tímida, agora me sinto uma deusa na cama."</p>
                 <p className="text-center font-bold text-sm">- Renata L.</p>
              </div>
            </div>
          </QuizStep>
        );

      case 7:
        return (
          <QuizStep onNext={nextStep}>
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-black text-red-600 uppercase">SE VOCÊ NÃO FAZ ESSAS 50 POSIÇÕES, OUTRA FARÁ POR VOCÊ.</h2>
              <img src="https://quentesecarentes.com.br/wp-content/uploads/2019/10/banner29112016-009.jpg" alt="Casal na cama" className="w-full rounded-2xl shadow-lg" loading="eager" />
              <p className="text-gray-800 font-bold bg-yellow-100 p-2 rounded">Enquanto você tenta ser a certinha… ele deseja Outra Mulher que sabe ser PUTA na hora CERTA</p>
            </div>
          </QuizStep>
        );

      case 8:
        return (
          <QuizStep onNext={nextStep}>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 text-center">Sua vida Sexual vai mudar da água pro vinho 🍷</h2>
              <ul className="space-y-4">
                <li className="flex gap-3 text-left">
                  <div className="text-green-500 mt-1"><Check size={20} /></div>
                  <p className="text-gray-700">Você vai descobrir os pontos ocultos de prazer do seu corpo e conseguir chegar ao orgasmo em qualquer relação - mesmo que o homem seja ruim de cama…</p>
                </li>
                <li className="flex gap-3 text-left">
                  <div className="text-green-500 mt-1"><Check size={20} /></div>
                  <p className="text-gray-700">Vai eliminar suas inseguranças e se tornar uma mulher mais confiante, sensual e desejada na cama…</p>
                </li>
                <li className="flex gap-3 text-left">
                  <div className="text-green-500 mt-1"><Check size={20} /></div>
                  <p className="text-gray-700">Vai surpreender na cama e fazer ele esquecer de todas as mulheres que já passaram pela vida dele…</p>
                </li>
              </ul>
              <div className="bg-gray-900 text-white p-4 rounded-xl text-center">
                <p>Depois de aplicar essa técnica, se ele OUSAR a ir pra cama com outra mulher, vai perceber que elas não chegam aos seus pés…</p>
              </div>
            </div>
          </QuizStep>
        );

      case 9:
        return (
          <QuizStep onNext={nextStep} buttonText="Sim, quero isso!">
             <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 text-center">Ao liberar acesso ao Manual das Posições você vai descobrir como:</h2>
              <ul className="space-y-3">
                {[
                  "Fazer qualquer homem gozar implorando o seu nome.",
                  "Trazer de volta o tesão do seu parceiro (mesmo que ele esteja distante).",
                  "Deixar homens desesperados por mais uma noite com você.",
                  "Usar técnicas secretas que criam dependência sexual imediata.",
                  "Virar aquela mulher que entra no quarto e faz todas as outras parecerem amadoras.",
                  "Ser a única capaz de dar a ele a sensação de prazer total!"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-left items-start">
                     <div className="min-w-[20px] text-green-600 mt-1">✅</div>
                     <p className="text-gray-800 text-sm font-medium">{item}</p>
                  </li>
                ))}
              </ul>
             </div>
          </QuizStep>
        );

      case 10:
        return (
          <QuizStep onNext={nextStep}>
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900">Qual é a sua maior frustração na cama hoje?</h2>
                <p className="text-sm text-gray-500 mt-2">Pode escolher mais de uma opção</p>
              </div>
              <div className="space-y-3">
                {["Me sinto insegura por que não consigo fazer ele gozar", "Tenho impressão que ele pensa em outra quando está comigo", "Ele parece distante, como se fosse só obrigação", "Nunca me sinto realmente inesquecível", "Ele nem me procura mais..."].map((opt) => {
                  const isSelected = (selectedOptions[10] || []).includes(opt);
                  return (
                    <div 
                      key={opt} 
                      onClick={() => handleMultiSelect(10, opt)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${isSelected ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 bg-white text-gray-700'}`}
                    >
                      <span className="font-medium text-sm">{opt}</span>
                      {isSelected && <div className="min-w-[24px] h-6 bg-red-500 rounded-full flex items-center justify-center text-white ml-2"><Check size={14}/></div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </QuizStep>
        );

      case 11:
         return (
          <QuizStep onNext={nextStep} showButton={false}>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 text-center">Quando foi a última vez que você realmente sentiu um homem louco de tesão por você a ponto de perder o controle?</h2>
              <div className="space-y-3">
                {["Há muito tempo…", "É tão difícil que sinto que não sou boa o suficiente", "Recentemente, mas acho que eu poderia ter sido melhor", "Nunca senti isso de verdade"].map((opt) => (
                  <Button key={opt} variant="secondary" onClick={() => handleOptionSelect(11, opt)} className="text-left py-4 px-4 text-base font-medium">
                    {opt}
                  </Button>
                ))}
              </div>
            </div>
          </QuizStep>
        );

      case 12:
        return (
          <QuizStep onNext={nextStep}>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 text-center">Essas 3 coisas vão acontecer logo na primeira vez que você colocar em prática alguma das posições do Manual...</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                  <h3 className="font-bold text-red-700 text-lg">Ele Vai Pedir "Arrego"</h3>
                  <p className="text-sm text-gray-700 mt-1">Muitas alunas relatam que, na primeira vez, o homem fica tão excitado que não dura muito. Isso é normal. O nível de estímulo é tão alto que ele vai precisar de um tempo para se acostumar com essa nova mulher potente que você se tornou.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                  <h3 className="font-bold text-red-700 text-lg">O Efeito "Cachorrinho"</h3>
                  <p className="text-sm text-gray-700 mt-1">Prepare-se para ele ficar mais carinhoso, mandar mensagens do nada durante o dia e querer dormir abraçado. Isso não é mágica, é a liberação de Ocitocina que as técnicas causam no cérebro masculino.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                  <h3 className="font-bold text-red-700 text-lg">A Inversão de Poder</h3>
                  <p className="text-sm text-gray-700 mt-1">Você vai parar de se perguntar 'será que eu sou boa o suficiente?'. Ao ver ele revirando os olhos, perdendo a fala e ficando totalmente entregue nas suas mãos, sua autoconfiança vai explodir.</p>
                </div>
              </div>
            </div>
          </QuizStep>
        );

      case 13:
        return (
          <QuizStep onNext={() => {}} showButton={false}>
             <div className="space-y-8 text-center pt-10">
                <h2 className="text-2xl font-bold text-gray-900">Você quer ter acesso ao Manual das Posições SECRETAS?</h2>
                <div className="space-y-4">
                  <Button variant="pulse" onClick={nextStep} className="text-xl py-6">✅ Sim, quero muito</Button>
                  <Button variant="secondary" onClick={nextStep} className="text-gray-500">🚫 Não sei...</Button>
                </div>
             </div>
          </QuizStep>
        );

      case 14:
        return <LoadingScreen onComplete={nextStep} />;

      case 15:
        return <SalesPage />;

      default:
        return <div>Error</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans max-w-md mx-auto shadow-2xl relative overflow-hidden sm:border-x sm:border-gray-100">
      {currentStep < 15 && (
         <div className="px-6 pt-6">
           <div className="flex justify-center mb-6">
             <img src="https://i.imgur.com/xQjj8N5.png" alt="Logo" className="w-[100px] h-[100px] object-contain" />
           </div>
           {currentStep < 14 && <ProgressBar progress={((currentStep + 1) / 14) * 100} />}
         </div>
      )}
      <div className={`px-6 pb-6 ${currentStep === 15 ? 'px-0 pb-0' : ''}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;