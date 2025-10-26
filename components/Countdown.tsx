import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
    const calculateTimeLeft = () => {
        // Set event date to December 15, 2024
        const eventDate = new Date('2024-12-15T23:59:59');
        const difference = +eventDate - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    
    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <section className="bg-brand-dark text-brand-light">
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-center items-center text-center">
                <h3 className="font-serif text-2xl mb-4 md:mb-0 md:mr-8">Garanta sua encomenda! <br className="md:hidden"/> O prazo termina em:</h3>
                <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-white/10 p-4 rounded-lg">{formatNumber(timeLeft.days)}</div>
                        <div className="text-xs uppercase mt-1">Dias</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-white/10 p-4 rounded-lg">{formatNumber(timeLeft.hours)}</div>
                        <div className="text-xs uppercase mt-1">Horas</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-white/10 p-4 rounded-lg">{formatNumber(timeLeft.minutes)}</div>
                        <div className="text-xs uppercase mt-1">Minutos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-white/10 p-4 rounded-lg">{formatNumber(timeLeft.seconds)}</div>
                        <div className="text-xs uppercase mt-1">Segundos</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;