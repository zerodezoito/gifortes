import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre" className="bg-brand-pink-light py-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                     <div className="w-full max-w-sm h-96 md:w-96 md:h-[480px] rounded-lg overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1606202479951-bf5a35a60980?q=80&w=1887&auto=format&fit=crop" 
                            alt="Chef confeiteira Gi Fortes" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="font-serif text-4xl font-bold text-brand-dark mb-6">Gi Fortes</h2>
                    <p className="text-brand-dark/80 mb-4 leading-relaxed">
                        Apaixonada por doces desde criança, transformei meu amor pela confeitaria em profissão. Acredito que cada bolo e cada sobremesa carregam uma história e têm o poder de transformar momentos em memórias inesquecíveis.
                    </p>
                    <p className="text-brand-dark/80 mb-4 leading-relaxed">
                        Hoje, minha missão é levar mais sabor e carinho para a sua mesa, especialmente em datas tão importantes como as festas de fim de ano. Tudo é feito de forma artesanal, com os melhores ingredientes e uma dose extra de amor.
                    </p>
                    <a 
                        href="#encomendar" 
                        className="inline-block mt-4 bg-brand-pink text-brand-light font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
                    >
                        Fazer minha encomenda
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;