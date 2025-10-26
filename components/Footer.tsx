import React from 'react';

const Footer: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Pedido de orçamento enviado! Entraremos em contato em breve para confirmar os detalhes. Obrigada!');
        e.currentTarget.reset();
    };

    return (
        <footer id="encomendar" className="bg-brand-pink-light">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">Faça sua Encomenda de Fim de Ano</h2>
                <p className="max-w-2xl mx-auto mb-8 text-brand-dark/80">
                    Garanta as delícias da sua ceia! Preencha o formulário abaixo para solicitar um orçamento. As encomendas se encerram em 15 de Dezembro.
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                    <div className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Seu nome" 
                            required 
                            aria-label="Seu nome"
                            className="w-full px-5 py-3 border border-brand-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Seu melhor e-mail para contato" 
                            required 
                            aria-label="Seu melhor e-mail"
                            className="w-full px-5 py-3 border border-brand-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                        />
                         <textarea
                            name="message"
                            placeholder="Descreva seu pedido (ex: 1 Torta Banoffee, 1 Quiche de Alho Poró...)"
                            required
                            aria-label="Descreva seu pedido"
                            rows={4}
                            className="w-full px-5 py-3 border border-brand-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
                        />
                        <button 
                            type="submit"
                            className="w-full bg-brand-pink text-brand-light font-bold py-4 px-10 rounded-lg text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            FAZER MINHA ENCOMENDA
                        </button>
                    </div>
                </form>

                <div className="border-t border-brand-dark/10 pt-8 mt-12">
                    <p className="text-sm text-brand-dark/60">
                        &copy; {new Date().getFullYear()} Delícias da Gi. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;