import React, { useState } from 'react';

const NavLinks = () => (
    <>
        <a href="#inicio" className="text-brand-dark hover:text-brand-pink transition-colors duration-300">Início</a>
        <a href="#cardapio" className="text-brand-dark hover:text-brand-pink transition-colors duration-300">Cardápio</a>
        <a href="#sobre" className="text-brand-dark hover:text-brand-pink transition-colors duration-300">Sobre</a>
        <a href="#galeria" className="text-brand-dark hover:text-brand-pink transition-colors duration-300">Galeria</a>
        <a href="#encomendar" className="text-brand-dark hover:text-brand-pink transition-colors duration-300">Encomendar</a>
    </>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-brand-light/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#inicio" className="font-serif text-2xl font-bold text-brand-pink">Delícias da Gi</a>
                <nav className="hidden md:flex space-x-8 items-center">
                    <NavLinks />
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-brand-light shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4" onClick={() => setIsOpen(false)}>
                        <NavLinks />
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;