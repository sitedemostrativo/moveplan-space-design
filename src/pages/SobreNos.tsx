
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const SobreNos = () => {
  // Valores da empresa
  const values = [
    {
      id: 1,
      title: "Qualidade",
      description: "Utilizamos materiais premium e técnicas avançadas para garantir móveis duráveis e bonitos.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Inovação",
      description: "Estamos sempre atualizados com as últimas tendências de design e tecnologias do setor.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Personalização",
      description: "Cada projeto é único, adaptado às necessidades e preferências específicas de cada cliente.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Compromisso",
      description: "Cumprimos prazos e trabalhamos com transparência e respeito a cada etapa do projeto.",
      icon: (
        <svg className="w-12 h-12 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Conheça nossa história e os valores que guiam o nosso trabalho há 16 anos.
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

      {/* Nossa História */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1887&auto=format&fit=crop"
                alt="História da Moveplan"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-moveplan-primary text-white p-6 rounded-lg hidden md:block">
                <div className="text-4xl font-bold">16+</div>
                <div className="text-sm">Anos de história</div>
              </div>
            </div>

            <div className="text-left">
              <span className="text-moveplan-primary font-semibold">Nossa História</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Uma Jornada de Excelência em Móveis Planejados</h2>
              <p className="text-gray-600 mb-4">
                Fundada há 16 anos, a Moveplan nasceu do sonho de transformar ambientes através de móveis planejados que combinam beleza, funcionalidade e durabilidade. Começamos como uma pequena marcenaria em São Luís - MA, e com dedicação, crescemos para nos tornar referência no setor de móveis planejados.
              </p>
              <p className="text-gray-600 mb-4">
                Ao longo desses anos, investimos constantemente em tecnologia, materiais de qualidade e capacitação da nossa equipe, sempre com o objetivo de oferecer o melhor aos nossos clientes. Cada projeto executado é uma história de sucesso que construímos com nossos clientes.
              </p>
              <p className="text-gray-600 mb-4">
                Hoje, a Moveplan se orgulha de ter transformado milhares de ambientes, sempre mantendo o compromisso com a qualidade e a satisfação dos clientes que confiaram em nosso trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-moveplan-primary font-semibold">Nossos Princípios</span>
            <h2 className="section-title">Missão, Visão e Valores</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Conheça os princípios que norteiam nossas ações e definem quem somos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-moveplan-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-moveplan-primary">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções personalizadas em móveis planejados que transformem ambientes e proporcionem conforto, funcionalidade e beleza, superando as expectativas de nossos clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-moveplan-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-moveplan-primary">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como referência em móveis planejados no Maranhão, destacando-se pela excelência, inovação e compromisso com a satisfação dos clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-moveplan-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-moveplan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-moveplan-primary">Valores</h3>
              <p className="text-gray-600">
                Qualidade, inovação, compromisso, ética, respeito, transparência e valorização das pessoas são os pilares que sustentam nossa atuação diária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <span className="text-moveplan-primary font-semibold">O Que Nos Define</span>
          <h2 className="section-title">Nossos Valores</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Estes são os princípios que guiam nossas ações e decisões em cada projeto que realizamos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {values.map(value => (
              <div key={value.id} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  {value.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-moveplan-primary section-padding">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Transformar Seu Espaço</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos criar móveis planejados que atendam às suas necessidades e desejos.
          </p>
          <a
            href="https://wa.me/559891323451"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-moveplan-accent text-moveplan-primary hover:bg-yellow-400 font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Converse com um Consultor
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobreNos;
