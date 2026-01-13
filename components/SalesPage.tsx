import React, { useState } from 'react';
import { Button } from './Button';
import { Check, ShieldCheck, Lock, Star, ChevronDown, ChevronUp } from 'lucide-react';

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

const clientTestimonials = [
  {
    img: "https://i.imgur.com/Sza1ZfT.png",
    name: "Larissa M.",
    text: "Meninas, só comprem! Meu namorado tá bobo até agora kkkk amei demais as dicas!"
  },
  {
    img: "https://i.imgur.com/GJZpDHa.png",
    name: "Michele S.",
    text: "Amei a posição 12, nunca tinha sentido isso antes. O manual é top e super explicadinho."
  },
  {
    img: "https://i.imgur.com/sqYjS4V.png",
    name: "Fernanda P.",
    text: "Meu marido nem foi trabalhar hoje rsrs. Salvou meu casamento de verdade, obrigada!"
  },
  {
    img: "https://i.imgur.com/oOLHMGS.jpg",
    name: "Bianca R.",
    text: "Super didático e as dicas funcionam mesmo. Me sentindo poderosa e muito mais confiante."
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
    answer: "Com certeza! O manual vai te dar um poder de sedução magnético. Você terá a escolha de quem quiser ter ao seu lado."
  }
];

export const SalesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col animate-fade-in bg-white pb-20">
      {/* Header / Hero */}
      <div className="bg-red-600 text-white p-6 text-center rounded-b-3xl shadow-xl mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Oferta Especial</span>
          <h1 className="text-3xl font-black mb-2 leading-tight">O MANUAL DAS POSIÇÕES SECRETAS</h1>
          <p className="text-red-100 text-sm font-medium">Desbloqueie o prazer absoluto e torne-se inesquecível</p>
        </div>
      </div>

      {/* Video Sales Letter Placeholder / Main Image */}
      <div className="px-6 mb-8">
        <div className="aspect-video bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative group cursor-pointer border-4 border-white">
          <img 
            src="https://quentesecarentes.com.br/wp-content/uploads/2019/10/banner29112016-009.jpg" 
            alt="Capa do Manual" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
          <Lock size={12} /> Vídeo Seguro e Privado
        </p>
      </div>

      {/* Price Anchor */}
      <div className="px-6 mb-10 text-center">
        <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs font-bold mb-4">
          ⚡ DESCONTO DE 80% LIBERADO
        </div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-gray-400 text-lg line-through">R$ 197,00</span>
          <span className="text-4xl font-black text-red-600">R$ 27,90</span>
        </div>
        <Button variant="pulse" onClick={() => window.open('https://pay.kiwify.com.br/placeholder', '_blank')}>
          QUERO ACESSO IMEDIATO
        </Button>
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1"><ShieldCheck size={12}/> Compra Segura</span>
          <span className="flex items-center gap-1"><Check size={12}/> Acesso Imediato</span>
        </div>
      </div>

      {/* What you get */}
      <div className="bg-gray-50 py-10 px-6 mb-10">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">O que você vai receber:</h2>
        <div className="space-y-6">
          {mockupSlides.map((slide, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-4">
              <img src={slide.img} alt={slide.title} className="w-20 h-20 object-cover rounded-lg bg-gray-200" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{slide.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-6 mb-10">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Quem comprou, aprovou!</h2>
        <div className="space-y-4">
          {clientTestimonials.map((t, i) => (
            <div key={i} className="border border-gray-100 p-4 rounded-xl shadow-sm bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" /> 
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="px-6 mb-10">
        <div className="bg-gray-900 text-white p-6 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck size={120} />
          </div>
          <ShieldCheck size={48} className="mx-auto text-green-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Garantia Blindada de 30 Dias</h3>
          <p className="text-gray-300 text-sm mb-6">Se por qualquer motivo você não gostar, nós devolvemos 100% do seu dinheiro. O risco é todo nosso.</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-6 mb-20">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Perguntas Frequentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-4 bg-gray-50 text-left font-medium text-gray-800 text-sm"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openFaq === index && (
                <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50 sm:max-w-md sm:mx-auto">
        <Button variant="primary" onClick={() => window.open('https://pay.kiwify.com.br/placeholder', '_blank')}>
          QUERO MEU ACESSO AGORA
        </Button>
      </div>
    </div>
  );
};
