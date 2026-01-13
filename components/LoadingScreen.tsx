import React, { useEffect, useState } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const testimonials = [
  {
    name: "Juliana Mendes",
    handle: "@ju_mendes_oficial",
    text: "Menina do céu! Eu não acreditava muito, mas testei ontem a noite e meu marido ficou LOUCO. Ele disse que eu tava diferente... mal sabe ele o segredo kkkk",
  },
  {
    name: "Carla Souza",
    handle: "@carla.souza.fit",
    text: "Obrigada Ana Julia! O Manual salvou meu casamento. A gente vivia brigando, agora é só amor e carinho o dia todo. A posição 12 é surreal!",
  },
  {
    name: "Patrícia Lima",
    handle: "@paty_lima90",
    text: "Eu achava que sabia tudo, mas descobri que não sabia nada. O efeito cachorrinho é REAL. Ele tá comendo na minha mão.",
  }
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const duration = 6000; // 6 seconds total
    const interval = 60; // Update every 60ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete();
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(testimonialTimer);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center animate-fade-in">
      <div className="w-full max-w-md space-y-8">
        
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent animate-spin"
          ></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-red-600">
            {Math.round(progress)}%
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          Preparando seu acesso..
        </h2>

        {/* Dynamic Testimonial Card */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 transform">
          <div className="flex items-center gap-2 mb-3 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
            "{testimonials[currentTestimonial].text}"
          </p>
          <div className="flex items-center justify-center gap-3">
             <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
               {testimonials[currentTestimonial].name.charAt(0)}
             </div>
             <div className="text-left">
               <p className="font-bold text-sm text-gray-900">{testimonials[currentTestimonial].name}</p>
               <p className="text-xs text-gray-500">{testimonials[currentTestimonial].handle}</p>
             </div>
             <CheckCircle2 size={16} className="text-blue-500 ml-1" />
          </div>
        </div>

        <p className="text-gray-400 text-xs animate-pulse">
          Verificando disponibilidade de vagas...
        </p>
      </div>
    </div>
  );
};