
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  // Dados dos serviços
  const services = [
    {
      id: 1,
      title: 'Cozinhas',
      description: 'Cozinhas planejadas que combinam beleza e funcionalidade para o seu dia a dia.',
      image: 'https://images.unsplash.com/photo-1586208958839-06c17cacf2b0?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Dormitórios',
      description: 'Quartos planejados com conforto e elegância para o seu descanso.',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1780&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Salas',
      description: 'Salas de estar e jantar com design moderno e sofisticado.',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2027&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Home Office',
      description: 'Escritórios planejados para otimizar sua produtividade.',
      image: 'https://images.unsplash.com/photo-1593476550610-87baa860004a?q=80&w=1936&auto=format&fit=crop'
    },
  ];

  // Dados dos depoimentos
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      testimonial: 'A Moveplan transformou minha cozinha! O design é perfeito e a qualidade dos móveis é excelente. Super recomendo!',
      rating: 5
    },
    {
      id: 2,
      name: 'João Santos',
      testimonial: 'Contratei a Moveplan para fazer meu closet e fiquei muito satisfeito. Atendimento profissional e entrega no prazo.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Costa',
      testimonial: 'Móveis de excelente qualidade e acabamento impecável. A equipe é muito atenciosa e profissional.',
      rating: 5
    }
  ];

  // Renderiza estrelas com base na avaliação
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600494448655-ae58f58bb945?q=80&w=2070&auto=format&fit=crop)' }}
      >
        <div className="hero-overlay"></div>
        <div className="container mx-auto relative z-10 text-white text-left px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow animate-fade-up">
            Transforme seu espaço com móveis planejados de qualidade
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-shadow animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Há 16 anos criando ambientes sofisticados e funcionais para nossos clientes.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/orcamento"
              className="bg-moveplan-accent hover:bg-yellow-600 text-moveplan-primary font-medium py-3 px-6 rounded-md transition-colors"
            >
              Solicite um Orçamento
            </Link>
            <Link
              to="/galeria"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Ver Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="text-moveplan-primary font-semibold">Sobre Nós</span>
              <h2 className="section-title text-left mb-6">16 Anos de Excelência em Móveis Planejados</h2>
              <p className="text-gray-600 mb-6">
                A Moveplan se especializa em criar móveis planejados que aliam sofisticação e funcionalidade, transformando ambientes e proporcionando conforto aos nossos clientes. Nossa missão é oferecer soluções personalizadas para cada espaço, atendendo suas necessidades com excelência e qualidade.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center text-moveplan-primary hover:text-moveplan-secondary font-medium"
              >
                Conheça Nossa História
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595514535261-508019429459?q=80&w=2070&auto=format&fit=crop"
                alt="Equipe Moveplan"
                className="rounded-lg shadow-xl object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-moveplan-primary text-white p-6 rounded-lg">
                <div className="text-4xl font-bold">16+</div>
                <div className="text-sm">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <span className="text-moveplan-primary font-semibold">Nossos Serviços</span>
          <h2 className="section-title">Soluções para Todos os Ambientes</h2>
          <p className="section-subtitle">
            Nossos móveis planejados são projetados para otimizar espaços e agregar beleza ao seu ambiente.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden service-card">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/servicos"
                    className="text-moveplan-primary hover:text-moveplan-secondary inline-flex items-center font-medium"
                  >
                    Saiba mais
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/servicos"
              className="bg-moveplan-primary hover:bg-moveplan-secondary text-white font-medium py-3 px-8 rounded-md inline-block transition-colors"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-moveplan-primary text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme Seu Espaço com a Moveplan
            </h2>
            <p className="text-lg mb-8">
              Entre em contato conosco para um orçamento personalizado. Nossos especialistas estão prontos para ajudar você a criar o ambiente dos seus sonhos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/559891323451"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-moveplan-accent text-moveplan-primary hover:bg-yellow-400 font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale via WhatsApp
              </a>
              <Link
                to="/orcamento"
                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <span className="text-moveplan-primary font-semibold">Nossos Projetos</span>
          <h2 className="section-title">Galeria de Projetos</h2>
          <p className="section-subtitle">
            Conheça alguns de nossos trabalhos e inspire-se para o seu próximo projeto.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="gallery-item rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1935&auto=format&fit=crop" 
                alt="Cozinha Planejada" 
                className="w-full h-80 object-cover"
              />
              <div className="gallery-overlay">
                <h3 className="text-white font-bold text-lg">Cozinha Moderna</h3>
              </div>
            </div>
            <div className="gallery-item rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop" 
                alt="Dormitório Planejado" 
                className="w-full h-80 object-cover"
              />
              <div className="gallery-overlay">
                <h3 className="text-white font-bold text-lg">Quarto de Casal</h3>
              </div>
            </div>
            <div className="gallery-item rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1633505899118-4ca6bd143043?q=80&w=1932&auto=format&fit=crop" 
                alt="Sala de Estar" 
                className="w-full h-80 object-cover"
              />
              <div className="gallery-overlay">
                <h3 className="text-white font-bold text-lg">Sala de Estar</h3>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/galeria"
              className="bg-moveplan-primary hover:bg-moveplan-secondary text-white font-medium py-3 px-8 rounded-md inline-block transition-colors"
            >
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <span className="text-moveplan-primary font-semibold">O Que Dizem Nossos Clientes</span>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes têm a dizer sobre nossos serviços e produtos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md testimonial-card">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-6 text-left italic">"{testimonial.testimonial}"</p>
                <div className="text-left font-semibold">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
