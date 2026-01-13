import React from 'react';
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
  return (
    <div className="flex flex-col h-full min-h-[60vh] justify-between animate-fade-in">
      <div className="flex-1 overflow-y-auto custom-scrollbar">
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