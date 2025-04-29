
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail } from 'lucide-react';

const Orcamento = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    furniture: '',
    dimensions: '',
    style: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Opções para o campo "Tipo de Móvel"
  const furnitureOptions = [
    "Cozinha",
    "Dormitório",
    "Sala de Estar",
    "Sala de Jantar",
    "Home Office",
    "Banheiro",
    "Closet",
    "Outros"
  ];

  // Opções para o campo "Preferências de Estilo"
  const styleOptions = [
    "Moderno",
    "Clássico",
    "Minimalista",
    "Industrial",
    "Rústico",
    "Contemporâneo",
    "Não tenho preferência definida"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando envio do formulário
    setTimeout(() => {
      // Aqui você implementaria a lógica real de envio do formulário
      toast({
        title: "Orçamento enviado!",
        description: "Obrigado! Seu orçamento foi enviado com sucesso. Entraremos em contato em breve.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        furniture: '',
        dimensions: '',
        style: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-moveplan-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Solicite seu Orçamento</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Preencha o formulário abaixo e receba um orçamento personalizado para o seu projeto.
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

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="furniture" className="block text-gray-700 font-medium mb-2">
                    Tipo de Móvel *
                  </label>
                  <select
                    id="furniture"
                    name="furniture"
                    value={formData.furniture}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    {furnitureOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-1">
                  <label htmlFor="dimensions" className="block text-gray-700 font-medium mb-2">
                    Medidas do Ambiente
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Ex: 3m x 4m"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="style" className="block text-gray-700 font-medium mb-2">
                    Preferências de Estilo
                  </label>
                  <select
                    id="style"
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    {styleOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mensagem Adicional
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-input"
                    placeholder="Descreva detalhes adicionais sobre o seu projeto..."
                  ></textarea>
                </div>

                <div className="col-span-2">
                  <button
                    type="submit"
                    className={`w-full bg-moveplan-primary hover:bg-moveplan-secondary text-white font-bold py-3 px-6 rounded-md transition-colors flex justify-center items-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Solicitação de Orçamento'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Outras Formas de Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="bg-moveplan-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-moveplan-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4 text-center">
                Receba atendimento rápido através do nosso WhatsApp.
              </p>
              <a
                href="https://wa.me/559891323451"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold py-2 px-6 rounded-md inline-flex items-center transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                (98) 9132-3451
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="bg-moveplan-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Mail size={32} className="text-moveplan-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4 text-center">
                Envie um e-mail detalhando seu projeto e necessidades.
              </p>
              <a
                href="mailto:moveplan01@gmail.com"
                className="bg-moveplan-primary hover:bg-moveplan-secondary text-white font-bold py-2 px-6 rounded-md inline-flex items-center transition-colors"
              >
                <Mail size={20} className="mr-2" />
                moveplan01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Orcamento;
