import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const salesData = [
    { name: "Mariana S.", city: "São Paulo" },
    { name: "Ana P.", city: "Rio de Janeiro" },
    { name: "Carla M.", city: "Belo Horizonte" },
    { name: "Julia R.", city: "Curitiba" },
    { name: "Fernanda L.", city: "Porto Alegre" },
    { name: "Patricia C.", city: "Salvador" },
    { name: "Larissa B.", city: "Brasília" },
    { name: "Amanda T.", city: "Recife" },
];

export const SalesNotification: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Atraso inicial para a primeira notificação
        const initialTimeout = setTimeout(() => setIsVisible(true), 4000);

        // Lógica do ciclo de mostrar/esconder
        const cycleInterval = setInterval(() => {
            setIsVisible(false); // Esconde
            
            // Espera a animação de saída terminar para trocar os dados e mostrar de novo
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % salesData.length);
                setIsVisible(true);
            }, 1000); 

        }, 7000); // Tempo total do ciclo (visível + intervalo)

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(cycleInterval);
        };
    }, []);

    const currentSale = salesData[currentIndex];

    return (
        <div 
            className={`fixed top-[10px] right-2 z-[60] transition-all duration-500 ease-in-out transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'
            }`}
        >
            <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-lg p-2.5 border-l-4 border-green-500 flex items-center gap-3 max-w-[240px]">
                <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                    <ShoppingBag size={14} />
                </div>
                <div className="flex flex-col">
                    <p className="text-[10px] text-gray-500 leading-tight">
                        <span className="font-bold text-gray-900">{currentSale.name}</span> de {currentSale.city}
                    </p>
                    <p className="text-[10px] font-bold text-green-600 leading-tight mt-0.5">
                        comprou o MANUAL
                    </p>
                </div>
            </div>
        </div>
    );
};