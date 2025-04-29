
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';

const Servicos = () => {
  // Lista de serviços
  const services = [
    {
      id: 1,
      title: "Cozinhas Planejadas",
      description: "Transformamos sua cozinha em um ambiente funcional e acolhedor, com móveis planejados que otimizam o espaço e facilitam o dia a dia. Nossos projetos incluem armários, bancadas, ilhas e muito mais, sempre respeitando o seu estilo e necessidades.",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Aproveitamento máximo do espaço",
        "Materiais resistentes à umidade",
        "Sistemas de organização internos",
        "Designs modernos e funcionais"
      ]
    },
    {
      id: 2,
      title: "Dormitórios",
      description: "Criamos dormitórios que unem conforto e elegância, com móveis planejados que transformam seu quarto em um refúgio tranquilo. Nossos projetos incluem guarda-roupas, cabeceiras, cômodas e muito mais.",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
      features: [
        "Guarda-roupas com divisórias personalizadas",
        "Cabeceiras estofadas ou em madeira",
        "Criados-mudos com design exclusivo",
        "Sistemas de iluminação integrados"
      ]
    },
    {
      id: 3,
      title: "Salas de Estar e Jantar",
      description: "Desenvolvemos salas que são perfeitas para receber amigos e familiares, com móveis planejados que combinam beleza e praticidade. Oferecemos painéis para TV, racks, mesas, cadeiras e muito mais.",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Painéis para TV com passagem de cabos",
        "Racks com gavetas e prateleiras",
        "Mesas de jantar sob medida",
        "Buffets e cristaleiras"
      ]
    },
    {
      id: 4,
      title: "Home Office",
      description: "Projetamos espaços de trabalho funcionais e inspiradores, com móveis planejados que aumentam a produtividade e o bem-estar. Nossos projetos incluem mesas de trabalho, estantes, nichos e soluções para organização.",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1935&auto=format&fit=crop",
      features: [
        "Bancadas ergonômicas",
        "Sistemas de organização para documentos",
        "Soluções para equipamentos eletrônicos",
        "Aproveitamento de cantos e nichos"
      ]
    },
    {
      id: 5,
      title: "Banheiros e Lavabos",
      description: "Transformamos banheiros e lavabos em espaços funcionais e elegantes, com móveis planejados que resistem à umidade e proporcionam organização. Oferecemos gabinetes, armários, bancadas e muito mais.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Materiais resistentes à água",
        "Gavetas com sistemas soft-close",
        "Nichos para organização",
        "Iluminação integrada"
      ]
    },
    {
      id: 6,
      title: "Closets",
      description: "Desenvolvemos closets que são o sonho de qualquer pessoa, com móveis planejados que organizam suas roupas e acessórios de forma prática e elegante. Nossos projetos incluem araras, gavetas, prateleiras e soluções para sapatos e acessórios.",
      image: "https://images.unsplash.com/photo-1631553575981-583d58bb3b60?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Divisórias personalizadas",
        "Iluminação especial",
        "Sapateiras e gaveteiros",
        "Portas com espelho"
      ]
    },
  ];

  // Processo de trabalho
  const workProcess = [
    {
      id: 1,
      title: "Consultoria Inicial",
      description: "Conversamos para entender suas necessidades, preferências e o espaço disponível.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Projeto e Design",
      description: "Criamos um projeto detalhado, com modelos 3D para visualização realista do resultado final.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Orçamento Transparente",
      description: "Apresentamos um orçamento detalhado com todas as especificações e materiais incluídos.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Fabricação",
      description: "Produzimos seus móveis com materiais de alta qualidade e tecnologia avançada.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Instalação",
      description: "Nossa equipe especializada realiza a montagem com cuidado e precisão.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-moveplan-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Soluções personalizadas em móveis planejados para todos os ambientes da sua casa ou empresa.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-12"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-moveplan-primary font-semibold">Especialistas em Móveis Planejados</span>
            <h2 className="section-title">Transformando Ambientes Há 16 Anos</h2>
            <p className="text-lg text-gray-600 mt-4">
              Na Moveplan, cada projeto é único e desenvolvido de acordo com as necessidades específicas de cada cliente. Nossa equipe de designers e marceneiros trabalha com dedicação para criar móveis que combinam beleza, funcionalidade e durabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <span className="text-moveplan-primary font-semibold">Nossos Serviços</span>
          <h2 className="section-title">Soluções para Cada Ambiente</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Conheça nossas soluções em móveis planejados para todos os ambientes da sua casa ou empresa.
          </p>

          <div className="mt-12 space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-lg shadow-md overflow-hidden`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Características:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-moveplan-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/orcamento"
                    className="bg-moveplan-primary hover:bg-moveplan-secondary text-white font-medium py-2 px-6 rounded-md inline-flex items-center transition-colors w-fit"
                  >
                    Solicitar Orçamento
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <span className="text-moveplan-primary font-semibold">Como Trabalhamos</span>
          <h2 className="section-title">Nosso Processo</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Conheça o passo a passo do nosso trabalho, desde a consultoria inicial até a entrega do seu projeto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
            {workProcess.map((step, index) => (
              <div key={step.id} className="relative text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-moveplan-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connector (except for the last item) */}
                {index < workProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-moveplan-primary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-moveplan-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seus Ambientes?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/orcamento"
              className="bg-moveplan-accent text-moveplan-primary hover:bg-yellow-400 font-bold py-3 px-8 rounded-md inline-block transition-colors"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/559891323451"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicos;
