import React from 'react';

interface ProductCardProps {
    category: string;
    title: string;
    description: string;
    imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ category, title, description, imageSrc }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <span className="text-sm font-bold text-brand-pink uppercase">{category}</span>
            <h3 className="font-serif text-xl font-bold text-brand-dark mt-1 mb-2">{title}</h3>
            <p className="text-brand-dark/80 text-sm flex-grow">{description}</p>
        </div>
    </div>
);


const Menu: React.FC = () => {
    const products = [
        {
            category: "Bolos Festivos",
            title: "Red Velvet com Cream Cheese",
            description: "Um clássico aveludado com cobertura cremosa, perfeito para ser o centro das atenções na sua mesa.",
            imageSrc: "https://images.unsplash.com/photo-1616690710400-a15d7422f741?q=80&w=1887&auto=format&fit=crop"
        },
        {
            category: "Sobremesas Especiais",
            title: "Torta Banoffee",
            description: "Uma combinação irresistível de banana, doce de leite e chantilly sobre uma base de biscoito crocante.",
            imageSrc: "https://images.unsplash.com/photo-1542826438-643292d34a45?q=80&w=1887&auto=format&fit=crop"
        },
        {
            category: "Quiches e Tortas",
            title: "Quiche de Alho Poró",
            description: "Massa leve e recheio cremoso de alho poró. Uma opção salgada deliciosa para sua ceia.",
            imageSrc: "https://images.unsplash.com/photo-1563227812-747653533175?q=80&w=1887&auto=format&fit=crop"
        },
        {
            category: "Clássicos de Natal",
            title: "Chocotone Trufado",
            description: "Nosso chocotone artesanal com um recheio generoso de trufa de chocolate belga. Impossível comer um só.",
            imageSrc: "https://images.unsplash.com/photo-1640206171733-4f1b7f05a109?q=80&w=1887&auto=format&fit=crop"
        }
    ];

    return (
        <section id="cardapio" className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-brand-dark">Nosso Cardápio de Festas</h2>
                    <p className="mt-4 text-brand-dark/80 max-w-2xl mx-auto">Escolha suas delícias favoritas e monte uma ceia inesquecível.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.title} {...product} />
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <a 
                        href="#encomendar" 
                        className="inline-block bg-brand-pink text-brand-light font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
                    >
                        Quero Fazer Minha Encomenda
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Menu;