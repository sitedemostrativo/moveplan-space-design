
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contato = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Endereço",
      content: "São Luís - MA",
      icon: <MapPin size={24} className="text-moveplan-primary" />,
    },
    {
      id: 2,
      title: "E-mail",
      content: "moveplan01@gmail.com",
      link: "mailto:moveplan01@gmail.com",
      icon: <Mail size={24} className="text-moveplan-primary" />,
    },
    {
      id: 3,
      title: "WhatsApp",
      content: "(98) 9132-3451",
      link: "https://wa.me/559891323451",
      icon: (
        <svg className="w-6 h-6 text-moveplan-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ];

  // Perguntas frequentes
  const faqs = [
    {
      question: "Quanto tempo leva para fabricar e instalar os móveis?",
      answer: "O tempo de fabricação e instalação varia conforme a complexidade do projeto. Em média, projetos simples levam de 15 a 20 dias, enquanto projetos mais elaborados podem levar de 30 a 45 dias. Durante a aprovação do orçamento, informaremos o prazo específico para o seu projeto."
    },
    {
      question: "Quais são as formas de pagamento disponíveis?",
      answer: "Trabalhamos com diversas formas de pagamento, incluindo dinheiro, transferência bancária, PIX, cartões de crédito (parcelamento em até 10x) e também oferecemos condições especiais de financiamento para projetos maiores."
    },
    {
      question: "Os móveis têm garantia?",
      answer: "Sim, todos os nossos móveis possuem garantia de 5 anos contra defeitos de fabricação, desde que seguidas as orientações de uso e manutenção fornecidas no manual entregue na conclusão da instalação."
    },
    {
      question: "A Moveplan atende em quais regiões?",
      answer: "Atendemos em toda a região metropolitana de São Luís e cidades vizinhas. Para outras localidades, consulte-nos sobre disponibilidade e possíveis custos adicionais de deslocamento."
    },
    {
      question: "Como funciona o processo de desenvolvimento do projeto?",
      answer: "O processo começa com uma consulta inicial para entender suas necessidades. Em seguida, realizamos medições no local, elaboramos o projeto 3D e apresentamos o orçamento. Após a aprovação e pagamento do sinal, iniciamos a fabricação e agendamos a instalação conforme o prazo estabelecido."
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-moveplan-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar seus ambientes.
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

      {/* Contact Info Cards */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-moveplan-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target={item.link.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-moveplan-primary hover:text-moveplan-secondary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar seu Espaço?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Preencha nosso formulário de orçamento e receba uma proposta personalizada para seu projeto.
          </p>
          <Link
            to="/orcamento"
            className="bg-moveplan-primary hover:bg-moveplan-secondary text-white font-bold py-3 px-8 rounded-md inline-block transition-colors"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-moveplan-primary font-semibold">Dúvidas Frequentes</span>
            <h2 className="section-title">Perguntas e Respostas</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Encontre respostas para as perguntas mais frequentes sobre nossos serviços.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <span className="ml-6 flex-shrink-0 text-moveplan-primary group-open:rotate-180 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map or Image Section - Placeholder */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Localização</h2>
          <div className="bg-white rounded-lg shadow-md p-4 max-w-4xl mx-auto">
            {/* Placeholder for a map or image */}
            <div className="bg-gray-200 h-80 w-full rounded flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-moveplan-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">São Luís - MA</h3>
                <p className="text-gray-600">Entre em contato para mais informações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contato;
