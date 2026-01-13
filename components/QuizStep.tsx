import React, { useEffect, useRef } from 'react';
import { Button } from './Button';

interface QuizStepProps {
  onNext: () => void;
  children: React.ReactNode;
  showButton?: boolean;
  buttonText?: string;
}

export const QuizStep: React.FC<QuizStepProps> = ({ 
  onNext, 
  children, 
  showButton = true, 
  buttonText = "Continuar" 
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Força o scroll para o topo do container interno
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    // Garante também o scroll da janela
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <div className="flex flex-col h-full min-h-[60vh] justify-between animate-fade-in">
      <div ref={contentRef} className="flex-1 overflow-y-auto custom-scrollbar">
        {children}
      </div>
      
      {showButton && (
        <div className="mt-6 pt-4 border-t border-gray-100 sticky bottom-0 bg-white/95 backdrop-blur pb-2">
          <Button onClick={onNext}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};