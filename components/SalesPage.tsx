import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Check, Star, ShieldCheck, Lock, AlertTriangle } from 'lucide-react';
import { SalesNotification } from './SalesNotification';

export const SalesPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);

  const testimonials = [
    {
      img: "https://i.imgur.com/Sza1ZfT.png",
      name: "Larissa M.",
      text: "Menina, chocada! Fiz a posição do trono ontem e meu marido ficou doido kkkk amei!",
      time: "há 2 horas"
    },
    {
      img: "https://i.imgur.com/GJZpDHa.png",
      name: "Michele S.",
      text: "Gente, comprem! O manual é direto ao ponto, sem enrolação. Meu namorado nem acredita na minha mudança rsrs",
      time: "há 5 horas"
    },
    {
      img: "https://i.imgur.com/sqYjS4V.png",
      name: "Fernanda P.",
      text: "Eu achava que era bobagem, mas salvou meu casamento. A gente tava super frio, agora é fogo todo dia 🔥",
      time: "há 1 dia"
    },
    {
      img: "https://i.imgur.com/oOLHMGS.jpg",
      name: "Bianca R.",
      text: "Amei demais! Super explicadinho e as dicas de frases funcionam mesmo. Me sentindo poderosa!",
      time: "há 2 dias"
    }
  ];

  const positions = [
    { img: "https://static1.minhavida.com.br/articles/0a/38/77/3a/9-posicao-sexual-article_m-1.jpg", name: "O Trono da Deusa" },
    { img: "https://i0.statig.com.br/bancodeimagens/el/8r/9q/el8r9qfvthpdr6usg7c4h1tsp.jpg", name: "A Submissão Profunda" },
    { img: "https://static1.minhavida.com.br/articles/49/ba/93/e0/5-posicao-sexual-article-1.jpg", name: "O Êxtase Absoluto" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Troca a cada 4 segundos

    const positionInterval = setInterval(() => {
      setCurrentPositionIndex((prev) => (prev + 1) % positions.length);
    }, 3000); // Troca a imagem do celular a cada 3 segundos

    return () => {
      clearInterval(timer);
      clearInterval(testimonialInterval);
      clearInterval(positionInterval);
    };
  }, [positions.length]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const bonuses = [
    { title: "BÔNUS 1 — Frases que Criam Desejo Imediato", price: "R$47,00", desc: "O que dizer antes, durante e depois do momento íntimo para ativar desejo, conexão emocional e fazer ele pensar em você mesmo quando estiver longe." },
    { title: "BÔNUS 2 — Linguagem Corporal Feminina Irresistível", price: "R$67,00", desc: "Gestos, posturas e movimentos simples que aumentam sua presença, confiança e poder de atração sem precisar falar nada." },
    { title: "BÔNUS 3 — Técnicas de Dominação Silenciosa", price: "R$97,00", desc: "Como conduzir a experiência de forma natural, feminina e elegante, criando uma sensação de intensidade e exclusividade que ele vai querer repetir." },
    { title: "BÔNUS 4 — O Guia da Mulher Inesquecível", price: "R$57,00", desc: "Os comportamentos e atitudes que fazem um homem associar você a prazer, conforto e admiração — evitando que ele perca o interesse com o tempo." },
    { title: "BÔNUS 5 — Como Reacender o Desejo em Relacionamentos Mornos", price: "R$77,00", desc: "Estratégias práticas para quebrar a rotina, recuperar a tensão e fazer ele voltar a te olhar com o mesmo desejo do início." },
    { title: "BÔNUS 6 — Perfumes e Gatilhos Sensoriais", price: "R$37,00", desc: "Como usar aromas, ambientes e estímulos sutis para criar associações emocionais profundas e aumentar a atração." },
    { title: "BÔNUS 7 — Grupo VIP de Alunas", price: "R$97,00", desc: "Acesso a um grupo fechado com dicas extras, conteúdos complementares e suporte para acelerar seus resultados." }
  ];

  return (
    <div className="flex flex-col animate-fade-in bg-white pb-12 font-sans relative">
      <SalesNotification />
      
      {/* Sticky Countdown Banner */}
      <div className="sticky top-0 z-50 bg-red-600 text-white p-3 text-center shadow-lg">
        <p className="text-sm font-bold leading-tight">
          Você acabou de ganhar um desconto de 70% que expira em : <span className="text-yellow-300 font-mono text-lg ml-1">{formatTime(timeLeft)}</span>
        </p>
      </div>

      {/* HEADER */}
      <div className="bg-white p-6 text-center mb-4 pt-8">
        <h1 className="text-2xl font-black mb-2 uppercase leading-tight text-red-600">SEU MANUAL COM AS 50 POSIÇÕES SECRETAS ESTÁ PRONTO !</h1>
      </div>

      {/* MOCKUP SECTION - CARROSSEL AUTOMÁTICO */}
      <div className="px-6 mb-10">
        <div className="mx-auto max-w-[280px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-10"></div>
            
            <div className="bg-gray-100 rounded-[2rem] overflow-hidden h-[500px] w-full relative">
                {/* Container que desliza */}
                <div 
                    className="flex h-full transition-transform duration-700 ease-in-out" 
                    style={{ transform: `translateX(-${currentPositionIndex * 100}%)` }}
                >
                    {positions.map((pos, idx) => (
                        <div key={idx} className="min-w-full h-full p-4 pt-12 flex flex-col justify-center items-center">
                            <div className="relative rounded-xl overflow-hidden shadow-lg w-full">
                                <img src={pos.img} alt={pos.name} className="w-full h-auto object-cover aspect-square" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm font-bold p-3 text-center">
                                    {pos.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicadores (Dots) */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {positions.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                idx === currentPositionIndex ? 'bg-red-600 w-4' : 'bg-gray-300'
                            }`} 
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* CONTENT LIST */}
      <div className="px-6 mb-10 space-y-6">
        <h2 className="text-xl font-bold text-gray-900 text-center">Dentro desse manual, você terá acesso a:</h2>
        
        <div className="space-y-4">
            <div className="flex gap-3 items-start">
                <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0"><Star size={18} /></div>
                <div>
                    <h3 className="font-bold text-gray-900">As 50 Posições Matadoras</h3>
                    <p className="text-sm text-gray-600">Posições secretas que ativam prazer físico intenso e criam apego emocional, deixando ele completamente viciado em você</p>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0"><Star size={18} /></div>
                <div>
                    <h3 className="font-bold text-gray-900">Frases que Alteram a Química Cerebral e fazem ele ter 10x mais prazer</h3>
                    <p className="text-sm text-gray-600">O que dizer antes, durante e depois de cada posição para potencializar o desejo e fazer ele pensar em você o tempo todo</p>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0"><Star size={18} /></div>
                <div>
                    <h3 className="font-bold text-gray-900">Aulas Práticas comigo, Vanessa de Oliveira</h3>
                    <p className="text-sm text-gray-600">Demonstrações reais de como executar cada posição, mesmo sendo iniciante</p>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <div className="bg-red-100 p-2 rounded-full text-red-600 shrink-0"><Star size={18} /></div>
                <div>
                    <h3 className="font-bold text-gray-900">Técnicas de Dominação Silenciosa</h3>
                    <p className="text-sm text-gray-600">Como assumir o controle na cama sem parecer forçada, criando uma experiência inesquecível que ele vai querer repetir</p>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="font-medium text-gray-800 text-sm">Tudo 100% em vídeo e com conteúdo direto ao ponto, tão claro que qualquer mulher consegue aplicar na mesma noite.</p>
        </div>
      </div>

      {/* URGENCY & BONUSES & TESTIMONIALS */}
      <div className="px-6 mb-10">
        <div className="bg-red-600 text-white p-4 rounded-xl text-center mb-8 shadow-lg animate-pulse">
            <p className="font-bold text-sm uppercase tracking-wider mb-1">Somente 4 Vagas Restantes</p>
            <p className="font-medium text-xs">GARANTA SUA VAGA HOJE E RECEBA VÁRIOS BÔNUS TOTALMENTE ESPECIAIS QUE VAI TE TORNAR UMA PROFISSIONAL NA CAMA</p>
        </div>

        {/* TESTIMONIAL CAROUSEL */}
        <div className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 text-center mb-4">Veja o que falam algumas de nossas clientes</h2>
            <div className="relative overflow-hidden min-h-[140px]">
                {testimonials.map((t, idx) => (
                    <div 
                        key={idx}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                            idx === currentTestimonial 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 translate-x-10'
                        }`}
                    >
                        <div className="bg-white border border-gray-100 shadow-lg rounded-xl p-4 flex gap-4 items-center">
                            <div className="shrink-0">
                                <img 
                                    src={t.img} 
                                    alt={t.name} 
                                    className="w-14 h-14 rounded-full object-cover border-2 border-red-100" 
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold text-sm text-gray-900">{t.name}</p>
                                    <span className="text-[10px] text-gray-400">{t.time}</span>
                                </div>
                                <div className="flex text-yellow-400 mb-1">
                                    <Star size={10} className="fill-current" />
                                    <Star size={10} className="fill-current" />
                                    <Star size={10} className="fill-current" />
                                    <Star size={10} className="fill-current" />
                                    <Star size={10} className="fill-current" />
                                </div>
                                <p className="text-gray-600 text-xs italic leading-tight">"{t.text}"</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Dots indicators */}
            <div className="flex justify-center gap-1.5 mt-2">
                {testimonials.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentTestimonial ? 'w-6 bg-red-600' : 'w-1.5 bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>

        <h2 className="text-xl font-black text-center text-gray-900 mb-6 uppercase">🎁 BÔNUS EXCLUSIVOS DO MANUAL DAS POSIÇÕES SECRETAS</h2>

        <div className="space-y-4">
            {bonuses.map((bonus, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg">GRÁTIS</div>
                    <h3 className="font-bold text-red-700 mb-1">{bonus.title}</h3>
                    <p className="text-gray-400 text-xs line-through mb-2">Valor: {bonus.price}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{bonus.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* PRICE STACK */}
      <div className="px-6 mb-10 text-center bg-gray-900 text-white py-10 -mx-0 relative">
        <div className="mb-6">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">💎 VALOR TOTAL DOS BÔNUS:</p>
            <p className="text-2xl text-gray-400 line-through">R$479,00</p>
        </div>
        
        <div className="mb-8 px-4">
            <p className="text-gray-300 text-sm mb-1">Mas hoje, você vai receber TODOS esses bônus <span className="text-green-400 font-bold">TOTALMENTE GRÁTIS</span></p>
            <p className="text-gray-300 text-sm">ao garantir seu acesso ao MANUAL DAS POSIÇÕES SECRETAS.</p>
            <p className="text-gray-400 text-xs mt-4">Nenhum custo adicional. Nenhuma pegadinha.<br/>É só entrar agora e aproveitar. 😈🔥</p>
        </div>

        <div className="bg-white text-gray-900 rounded-xl p-6 mx-4 shadow-2xl transform scale-105 border-4 border-green-600">
            <p className="text-xs font-bold text-red-600 uppercase mb-2">CONDIÇÃO ESPECIAL LIBERADA SOMENTE NESSA PÁGINA</p>
            <p className="text-sm font-bold text-gray-700 mb-4">TENHA ACESSO AO MANUAL + 7 BÔNUS INÉDITOS POR APENAS:</p>
            
            <div className="flex flex-col items-center justify-center mb-4">
                <span className="text-5xl font-black text-green-600 tracking-tighter">R$ 37,00</span>
                <span className="text-xs text-gray-400 mt-1">Pagamento Único</span>
            </div>

            <p className="text-xs text-gray-600 mb-6 bg-green-50 p-2 rounded-lg border border-green-100">
                Você está recebendo <span className="font-bold text-green-700">R$442,00 de desconto</span> pra ter acesso ao conteúdo mais poderoso pra transformar sua vida sexual e dominar o poder de deixar qualquer homem aos seus pés
            </p>

            <Button variant="pulse" onClick={() => window.open('https://go.perfectpay.com.br/PPU38CQ6096', '_blank')} className="w-full text-sm py-4">
                QUERO O MEU ACESSO AO MANUAL
                <span className="block text-[10px] font-normal opacity-90 mt-1">(teste hoje mesmo)</span>
            </Button>
        </div>
      </div>

      {/* SCARCITY / WARNING 1 */}
      <div className="px-6 mb-12 text-center">
        <div className="bg-red-50 border-2 border-red-100 p-6 rounded-2xl mb-8">
            <h3 className="font-black text-red-600 text-lg uppercase mb-3 flex items-center justify-center gap-2">
                <AlertTriangle size={24} /> Atenção
            </h3>
            <p className="font-bold text-gray-800 mb-2">SE VOCÊ NÃO FIZER ISSO AINDA HOJE, OUTRA VAI FAZER EM SEU LUGAR! 💔</p>
            <p className="text-gray-600 text-sm italic">Enquanto você tenta ser a certinha… ele deseja Outra Mulher que sabe ser PUTA na hora CERTA. 😈</p>
        </div>

        <div className="space-y-4 text-gray-800 font-medium text-left sm:text-center">
            <p>Se você deseja salvar seu relacionamento e fazer ele te olhar com o mesmo desejo de quando se conheceram, você precisa muito desse manual…</p>
            <p>Seu homem nunca mais vai sentir desejo por nenhuma outra mulher além de você.... Você será para ele a Rainha das Rainhas...</p>
            <p>E se você é solteira, com essas posições você vai deixar os homens comendo na sua mão,</p>
            <p>Eles não vão parar de te procurar, dizendo que precisam te ver de novo…</p>
            <p>Você vai ter tantos homens aos seus pés que vai poder escolher qualquer homem que você quiser pra se relacionar…</p>
        </div>

        <div className="mt-8">
            <Button variant="pulse" onClick={() => window.open('https://go.perfectpay.com.br/PPU38CQ6096', '_blank')}>
                QUERO SER ÚNICA
            </Button>
        </div>
      </div>

      {/* TRUTH SECTION */}
      <div className="px-6 mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">A verdade é dura:</h2>
        <div className="border-l-4 border-gray-900 pl-4 space-y-4 text-gray-700">
            <p>Homens esquecem mulheres comuns todos os dias.</p>
            <p className="font-bold">Mas eles nunca esquecem uma mulher que sabe fazer as 5 Posições Matadoras.</p>
            <p>Essas mulheres dominam algo que a maioria nunca aprende: transformar prazer em vício.</p>
            <p>É como uma droga invisível: quanto mais ele prova, mais precisa.</p>
            <p>Enquanto você sofre por atenção, outras estão usando esses segredos para prender homens poderosos, receber presentes, viagens e fidelidade absoluta.</p>
        </div>
        
        <p className="mt-6 text-center font-bold text-red-700 text-lg">
            💋 Faça essas posições matadoras hoje mesmo… antes que outra mais “esperta” roube o que você chama de “seu homem”. 😉💋
        </p>
      </div>

      {/* BENEFITS BULLETS */}
      <div className="bg-gray-100 py-10 px-6 mb-10">
        <ul className="space-y-3 font-bold text-gray-800">
            <li className="flex items-center gap-2"><Check className="text-red-600 shrink-0" /> 🔥 Torne Ele Um "Víciado" pela sua Buceta.</li>
            <li className="flex items-center gap-2"><Check className="text-red-600 shrink-0" /> 🔥 Faça Ele Nunca Mais Querer Outra Mulher.</li>
            <li className="flex items-center gap-2"><Check className="text-red-600 shrink-0" /> 🔥 Salve Seu Relacionamento "morno".</li>
            <li className="flex items-center gap-2"><Check className="text-red-600 shrink-0" /> 🔥 Faça ele pensar em você e querer te agradar o Tempo todo.</li>
        </ul>
        <div className="mt-8">
            <Button variant="pulse" onClick={() => window.open('https://go.perfectpay.com.br/PPU38CQ6096', '_blank')}>
                QUERO DEIXAR ELE VICIADO EM MIM
            </Button>
        </div>
      </div>

      {/* GUARANTEE */}
      <div className="px-6 mb-12">
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-[-20px] left-[-20px] opacity-5 text-gray-400 rotate-12">
                <ShieldCheck size={150} />
            </div>
            
            <ShieldCheck size={48} className="mx-auto text-green-500 mb-4 relative z-10" />
            <h2 className="text-2xl font-black text-gray-900 mb-2 relative z-10">GARANTIA TOTAL DE 30 DIAS</h2>
            <h3 className="font-bold text-gray-600 mb-4 relative z-10">Risco Zero para Você</h3>
            
            <p className="text-sm text-gray-600 mb-6 leading-relaxed relative z-10">
                Eu confio tanto no poder transformador deste Manual que vou assumir todo o risco.
                <br/><br/>
                Você tem 30 dias inteiros para testar. Se você aplicar as técnicas e não ver seu homem (ou os homens) babando por você, mais carinhoso e viciado na sua presença...
                <br/><br/>
                Ou se você simplesmente não gostar do conteúdo, eu devolvo 100% do seu dinheiro. Sem perguntas chatas, sem burocracia. É só mandar um e-mail.
                <br/><br/>
                A responsabilidade é toda minha. Você não tem nada a perder.
            </p>

            <Button variant="pulse" onClick={() => window.open('https://go.perfectpay.com.br/PPU38CQ6096', '_blank')} className="relative z-10">
                QUERO COMPRAR SEM RISCOS
            </Button>
        </div>
      </div>
      
      {/* Footer simple copyright */}
      <div className="text-center text-gray-400 text-xs pb-8">
        <p>&copy; 2024 Manual das Posições Secretas. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-2 mt-2">
            <Lock size={12} /> Site Seguro
        </div>
      </div>

    </div>
  );
};