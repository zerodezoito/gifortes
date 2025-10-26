import React from 'react';

const Testimonials: React.FC = () => {
    const images = [
        "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1987&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616690710400-a15d7422f741?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1887&auto=format&fit=crop"
    ];

    return (
        <section id="galeria" className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl font-bold text-brand-dark">Galeria de Delícias</h2>
                     <p className="mt-4 text-brand-dark/80 max-w-2xl mx-auto">Um pouco do nosso trabalho, feito com muito carinho.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-lg aspect-square">
                            <img src={src} alt={`Delícia da nossa galeria ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;