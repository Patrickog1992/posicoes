import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Check, ShieldCheck, Lock, Star, AlertTriangle, ChevronDown, ChevronUp, HelpCircle, Bell } from 'lucide-react';

const mockupSlides = [
  { 
    img: "https://static1.minhavida.com.br/articles/0a/38/77/3a/9-posicao-sexual-article_m-1.jpg", 
    title: "Posição: O Abraço da Deusa", 
    desc: "Intimidade profunda e conexão visual." 
  },
  { 
    img: "https://i0.statig.com.br/bancodeimagens/el/8r/9q/el8r9qfvthpdr6usg7c4h1tsp.jpg", 
    title: "Posição: O Trono de Prazer", 
    desc: "Dominação suave com máximo estímulo." 
  },
  { 
    img: "https://static1.minhavida.com.br/articles/49/ba/93/e0/5-posicao-sexual-article-1.jpg", 
    title: "Posição: A Fusão Profunda", 
    desc: "Para sentir cada centímetro dele." 
  }
];

const faqs = [
  {
    question: "Como vou receber o acesso?",
    answer: "O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento. Você receberá um link exclusivo, login e senha para acessar nossa área de membros segura."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim, 100% seguro. Utilizamos processadores de pagamento com criptografia de ponta (a mesma usada por grandes bancos) para proteger seus dados financeiros."
  },
  {
    question: "Aparece algo comprometedor na fatura do cartão?",
    answer: "Não! Sua privacidade é nossa prioridade. Na fatura do cartão aparecerá apenas um nome genérico da plataforma de pagamentos, sem qualquer menção ao conteúdo adulto ou ao nome do produto."
  },
  {
    question: "E se eu não gostar ou não funcionar para mim?",
    answer: "Você tem 30 dias de garantia incondicional. Se você aplicar as técnicas e não ver resultados, ou simplesmente não gostar do conteúdo, devolvemos 100% do seu dinheiro. Sem perguntas."
  },
  {
    question: "Serve para quem está solteira?",
    answer: "Com certeza! O manual vai te dar um poder de sedução magnético. Você terá a escolha de quem quer levar para a cama e deixará qualquer homem viciado em você na primeira noite."
  }
];

const popupNames = ["Bruna", "Fernanda", "Júlia", "Mariana", "Patrícia", "Aline", "Camila", "Larissa", "Vanessa", "Paula"];
const popupCities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador", "Brasília", "Fortaleza", "Recife", "Goiânia", "Campinas"];

export const SalesPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({ name: '', city: '' });

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockupSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Popup effect
  useEffect(() => {
    const schedulePopup = () => {
      const delay = Math.random() * 10000 + 5000; // 5-15 seconds delay
      setTimeout(() => {
        setPopupData({
          name: popupNames[Math.floor(Math.random() * popupNames.length)],
          city: popupCities[Math.floor(Math.random() * popupCities.length)]
        });
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          schedulePopup();
        }, 4000); // Show for 4 seconds
      }, delay);
    };

    const initialTimeout = setTimeout(schedulePopup, 2000);
    return () => clearTimeout(initialTimeout);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToCheckout = () => {
    const element = document.getElementById('pricing-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans pb-24 relative">
      
      {/* Sales Popup Notification */}
      {showPopup && (
        <div className="fixed top-14 right-2 z-[60] bg-white rounded-lg shadow-xl p-2 flex items-center gap-2 border-l-4 border-green-500 max-w-[220px] animate-[pulse_0.5s_ease-in-out]">
           <div className="bg-green-100 p-1.5 rounded-full text-green-600 flex-shrink-0">
              <Check size={14} />
           </div>
           <div className="text-xs text-left">
              <p className="font-bold text-gray-800 leading-tight">{popupData.name} de {popupData.city}</p>
              <p className="text-green-600 font-bold text-[10px] mt-0.5">recebeu as posições secretas</p>
           </div>
        </div>
      )}

      {/* Countdown Top Bar */}
      <div className="bg-red-600 text-white text-center py-3 px-4 text-sm font-medium sticky top-0 z-50 shadow-md">
        Você acabou de ganhar 80% de desconto que vão expirar em : <span className="text-yellow-300 font-bold text-base ml-1">{formatTime(timeLeft)}</span>
      </div>

      {/* Header / Hero */}
      <header className="bg-red-600 text-white p-6 text-center pt-2">
        <h1 className="text-2xl font-bold uppercase tracking-wide mb-2 animate-bounce">
          SEU MANUAL COM AS 50 POSIÇÕES SECRETAS ESTÁ PRONTO !
        </h1>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-12">
        
        {/* Mockup Section with Carousel */}
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[300px] shadow-2xl">
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[472px] bg-white dark:bg-gray-800 relative">
                
                {/* Mockup Content Carousel */}
                <div className="h-full flex flex-col bg-gray-900">
                  <div className="bg-red-600 text-white p-4 text-center z-10 shadow-md">
                    <h3 className="font-bold text-lg">Manual Aberto</h3>
                  </div>
                  
                  <div className="flex-1 relative overflow-hidden">
                    {mockupSlides.map((slide, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <img 
                          src={slide.img} 
                          alt={slide.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12 text-white">
                          <p className="font-bold text-lg text-red-400 mb-1">{slide.title}</p>
                          <p className="text-sm text-gray-200">{slide.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress Indicators */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20 pb-2">
                    {mockupSlides.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-red-500' : 'w-1.5 bg-gray-500'}`}
                      />
                    ))}
                  </div>
                </div>

            </div>
        </div>

        {/* What's Inside */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Dentro desse manual, você terá acesso a:
          </h2>

          <div className="space-y-6">
            <FeatureItem 
              title="As 50 Posições Matadoras"
              desc="Posições secretas que ativam prazer físico intenso e criam apego emocional, deixando ele completamente viciado em você"
            />
            <FeatureItem 
              title="Frases que Alteram a Química Cerebral"
              desc="O que dizer antes, durante e depois de cada posição para potencializar o desejo e fazer ele pensar em você o tempo todo"
            />
            <FeatureItem 
              title="Aulas Práticas comigo, Vanessa de Oliveira"
              desc="Demonstrações reais de como executar cada posição, mesmo sendo iniciante"
            />
            <FeatureItem 
              title="Técnicas de Dominação Silenciosa"
              desc="Como assumir o controle na cama sem parecer forçada, criando uma experiência inesquecível que ele vai querer repetir"
            />
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded text-sm font-medium text-gray-700">
            Tudo 100% em vídeo e com conteúdo direto ao ponto, tão claro que qualquer mulher consegue aplicar na mesma noite.
          </div>
        </section>

        {/* Urgency Block */}
        <section className="bg-gray-900 text-white p-6 rounded-xl text-center space-y-4 shadow-xl">
          <AlertTriangle className="mx-auto text-yellow-400" size={40} />
          <h3 className="text-xl font-bold uppercase text-yellow-400">
            SOMENTE 4 VAGAS RESTANTES
          </h3>
          <p className="text-gray-300">
            GARANTA SUA VAGA HOJE E RECEBA VÁRIOS BÔNUS TOTALMENTE ESPECIAIS QUE VAI TE TORNAR UMA PROFISSIONAL NA CAMA
          </p>
        </section>

        {/* Bonuses */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-red-600 text-center uppercase border-b-2 border-red-100 pb-4">
            🎁 BÔNUS EXCLUSIVOS DO MANUAL DAS POSIÇÕES SECRETAS
          </h2>
          
          <div className="space-y-4">
            <BonusCard title="BÔNUS 1 — Frases que Criam Desejo Imediato" value="R$47,00" desc="O que dizer antes, durante e depois do momento íntimo para ativar desejo, conexão emocional e fazer ele pensar em você mesmo quando estiver longe." />
            <BonusCard title="BÔNUS 2 — Linguagem Corporal Feminina Irresistível" value="R$67,00" desc="Gestos, posturas e movimentos simples que aumentam sua presença, confiança e poder de atração sem precisar falar nada." />
            <BonusCard title="BÔNUS 3 — Técnicas de Dominação Silenciosa" value="R$97,00" desc="Como conduzir a experiência de forma natural, feminina e elegante, criando uma sensação de intensidade e exclusividade que ele vai querer repetir." />
            <BonusCard title="BÔNUS 4 — O Guia da Mulher Inesquecível" value="R$57,00" desc="Os comportamentos e atitudes que fazem um homem associar você a prazer, conforto e admiração — evitando que ele perca o interesse com o tempo." />
            <BonusCard title="BÔNUS 5 — Como Reacender o Desejo em Relacionamentos Mornos" value="R$77,00" desc="Estratégias práticas para quebrar a rotina, recuperar a tensão e fazer ele voltar a te olhar com o mesmo desejo do início." />
            <BonusCard title="BÔNUS 6 — Perfumes e Gatilhos Sensoriais" value="R$37,00" desc="Como usar aromas, ambientes e estímulos sutis para criar associações emocionais profundas e aumentar a atração." />
            <BonusCard title="BÔNUS 7 — Grupo VIP de Alunas" value="R$97,00" desc="Acesso a um grupo fechado com dicas extras, conteúdos complementares e suporte para acelerar seus resultados." />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg text-center mt-6">
             <p className="text-gray-500 line-through text-lg">VALOR TOTAL DOS BÔNUS: R$479,00</p>
             <p className="font-bold text-green-600 text-lg mt-2">
               Mas hoje, você vai receber TODOS esses bônus TOTALMENTE GRÁTIS ao garantir seu acesso ao MANUAL DAS POSIÇÕES SECRETAS.
             </p>
             <p className="text-sm text-gray-600 mt-2">Nenhum custo adicional. Nenhuma pegadinha. É só entrar agora e aproveitar. 😈🔥</p>
          </div>
        </section>

        {/* Pricing Section - Green Theme */}
        <section id="pricing-section" className="bg-gradient-to-b from-white to-green-50 p-8 rounded-2xl border-4 border-green-500 shadow-2xl text-center space-y-6 relative overflow-hidden transform scale-105">
          <div className="absolute top-0 left-0 w-full bg-green-600 text-white text-xs font-bold py-2 uppercase tracking-wider shadow-md">
            Condição Especial Liberada Somente Nessa Página
          </div>
          
          <div className="mt-8">
            <h3 className="text-gray-600 font-medium">TENHA ACESSO AO MANUAL + 7 BÔNUS INÉDITOS POR APENAS:</h3>
            <div className="flex flex-col items-center justify-center my-4">
               <span className="text-5xl font-extrabold text-green-600 tracking-tight">R$ 37,00</span>
               <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full mt-3 font-bold border border-green-200">
                 R$442,00 DE DESCONTO
               </span>
            </div>
            <p className="text-gray-600 text-sm mb-6 max-w-xs mx-auto">
              Você está recebendo R$442,00 de desconto pra ter acesso ao conteúdo mais poderoso pra transformar sua vida sexual.
            </p>
          </div>

          <Button 
            variant="pulse" 
            onClick={() => window.location.href = '#checkout'} 
            className="text-xl py-6 w-full shadow-green-500/40"
          >
            QUERO O MEU ACESSO AO MANUAL
            <span className="block text-xs font-normal mt-1 opacity-90">(teste hoje mesmo)</span>
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <Lock size={12} className="text-green-600" /> Pagamento 100% Seguro
          </div>
        </section>

        {/* Scarcity / Fear of Loss */}
        <section className="space-y-4 text-center">
          <h3 className="font-bold text-red-600 text-lg">SE VOCÊ NÃO FIZER ISSO AINDA HOJE, OUTRA VAI FAZER EM SEU LUGAR! 💔</h3>
          <p className="text-gray-700 italic">Enquanto você tenta ser a certinha… ele deseja Outra Mulher que sabe ser PUTA na hora CERTA. 😈</p>
          
          <div className="space-y-4 text-left bg-white p-6 rounded-xl shadow-sm">
            <p>Se você deseja salvar seu relacionamento e fazer ele te olhar com o mesmo desejo de quando se conheceram, você precisa muito desse manual…</p>
            <p>Seu homem nunca mais vai sentir desejo por nenhuma outra mulher além de você.... Você será para ele a Rainha das Rainhas...</p>
            <p>E se você é solteira, com essas posições você vai deixar os homens comendo na sua mão,</p>
            <p>Eles não vão parar de te procurar, dizendo que precisam te ver de novo…</p>
            <p>Você vai ter tantos homens aos seus pés que vai poder escolher qualquer homem que você quiser pra se relacionar…</p>
          </div>
          
          <Button onClick={scrollToCheckout} variant="pulse">QUERO SER ÚNICA</Button>
        </section>

        {/* Hard Truth */}
        <section className="bg-gray-900 text-white p-8 rounded-xl space-y-4">
          <h3 className="text-xl font-bold text-red-500">A verdade é dura:</h3>
          <p className="font-medium text-lg">Homens esquecem mulheres comuns todos os dias.</p>
          <p className="text-gray-300">Mas eles nunca esquecem uma mulher que sabe fazer as 5 Posições Matadoras.</p>
          <p className="text-gray-300">Essas mulheres dominam algo que a maioria nunca aprende: transformar prazer em vício.</p>
          <p className="text-gray-300">É como uma droga invisível: quanto mais ele prova, mais precisa.</p>
          <p className="text-gray-300">Enquanto você sofre por atenção, outras estão usando esses segredos para prender homens poderosos, receber presentes, viagens e fidelidade absoluta.</p>
          
          <div className="border-t border-gray-700 pt-4 mt-4">
             <p className="italic text-yellow-400">💋 Faça essas posições matadoras hoje mesmo… antes que outra mais “esperta” roube o que você chama de “seu homem”. 😉💋</p>
          </div>
        </section>

        {/* Bullet Benefits */}
        <section className="space-y-3">
          <BenefitItem text='Torne Ele Um "Víciado" pela sua Buceta.' />
          <BenefitItem text="Faça Ele Nunca Mais Querer Outra Mulher." />
          <BenefitItem text='Salve Seu Relacionamento "morno".' />
          <BenefitItem text="Faça ele pensar em você e querer te agradar o Tempo todo." />
          
          <div className="pt-4">
            <Button onClick={scrollToCheckout} variant="pulse">QUERO DEIXAR ELE VICIADO EM MIM</Button>
          </div>
        </section>

        {/* Guarantee */}
        <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">GARANTIA TOTAL</h3>
          <h4 className="font-bold text-gray-700">Blindagem de 30 Dias</h4>
          <p className="text-gray-600 leading-relaxed">
            Eu confio tanto no poder transformador do Manual das Posições Secretas que vou assumir todo o risco por você.
            <br/><br/>
            Você tem <strong>30 dias</strong> para testar todas as técnicas. Se por qualquer motivo você achar que não valeu a pena, se você não ver a mudança no olhar dele, ou se simplesmente não gostar do conteúdo, basta me enviar um único e-mail.
            <br/><br/>
            Eu devolverei <strong>100% do seu dinheiro</strong>, sem perguntas, sem letras miúdas e continuamos amigas.
            <br/><br/>
            O risco é todo meu. Sua satisfação é garantida ou seu dinheiro de volta.
          </p>
          <Button onClick={scrollToCheckout} variant="outline" className="text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white mt-4">
            QUERO COMPRAR SEM RISCOS
          </Button>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center flex items-center justify-center gap-2">
            <HelpCircle className="text-green-600" />
            Perguntas Frequentes
          </h3>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-bold text-gray-800 hover:bg-gray-100 transition-colors"
                >
                  {faq.question}
                  {openFaq === index ? <ChevronUp size={20} className="text-green-600" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed bg-gray-100 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
      
      {/* Sticky Bottom Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] md:hidden z-50">
        <Button onClick={scrollToCheckout} variant="pulse" className="shadow-none">QUERO O MANUAL AGORA</Button>
      </div>

    </div>
  );
};

const FeatureItem: React.FC<{title: string, desc: string}> = ({title, desc}) => (
  <div className="flex gap-3">
    <div className="mt-1">
      <Star className="text-yellow-500 fill-yellow-500" size={20} />
    </div>
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

const BonusCard: React.FC<{title: string, value: string, desc: string}> = ({title, value, desc}) => (
  <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-red-600 text-sm flex-1 mr-2">{title}</h4>
      <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 whitespace-nowrap">Valor: {value}</span>
    </div>
    <p className="text-xs text-gray-600">{desc}</p>
  </div>
);

const BenefitItem: React.FC<{text: string}> = ({text}) => (
  <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg">
    <div className="bg-red-200 p-1 rounded-full">
      <Check size={14} className="text-red-700" />
    </div>
    <p className="font-bold text-gray-800 text-sm">{text}</p>
  </div>
);
