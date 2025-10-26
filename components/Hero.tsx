import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="bg-brand-pink-light">
            <div className="container mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-brand-pink font-serif text-xl font-bold">CELEBRE COM SABOR</h2>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mt-2 mb-4">
                        Sua Ceia de Fim de Ano mais Doce e Especial
                    </h1>
                    <p className="text-lg text-brand-dark/80 mb-8">
                        Deixe suas festas inesquecíveis com bolos, sobremesas e tortas artesanais. Faça sua encomenda e aproveite os melhores momentos sem se preocupar com a cozinha.
                    </p>
                    <a
                        href="#cardapio"
                        className="inline-block bg-brand-pink text-brand-light font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        VER CARDÁPIO E ENCOMENDAR
                    </a>
                </div>
                <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-sm h-96 md:w-96 md:h-[480px] rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1587383620392-3af5d2156487?q=80&w=1887&auto=format&fit=crop"
                            alt="Confeiteira sorrindo com um bolo decorado"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;