
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Galeria = () => {
  // Lista de categorias
  const categories = ["Todos", "Cozinhas", "Dormitórios", "Salas", "Home Office", "Banheiros", "Closets"];
  
  // Estado para filtro ativo
  const [activeFilter, setActiveFilter] = useState("Todos");
  
  // Lista de projetos
  const projects: Project[] = [
    {
      id: 1,
      title: "Cozinha Moderna",
      category: "Cozinhas",
      image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1935&auto=format&fit=crop",
      description: "Cozinha planejada com design moderno e funcional, maximizando o espaço disponível."
    },
    {
      id: 2,
      title: "Cozinha Americana",
      category: "Cozinhas",
      image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?q=80&w=2070&auto=format&fit=crop",
      description: "Cozinha integrada com sala de jantar, perfeita para receber amigos e família."
    },
    {
      id: 3,
      title: "Quarto de Casal",
      category: "Dormitórios",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1780&auto=format&fit=crop",
      description: "Dormitório planejado com guarda-roupa amplo e cabeceira estofada."
    },
    {
      id: 4,
      title: "Quarto Infantil",
      category: "Dormitórios",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
      description: "Quarto infantil com móveis coloridos e funcionais, garantindo espaço para brincar e estudar."
    },
    {
      id: 5,
      title: "Sala de Estar",
      category: "Salas",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2070&auto=format&fit=crop",
      description: "Sala de estar moderna com painel para TV e rack com gavetas."
    },
    {
      id: 6,
      title: "Sala de Jantar",
      category: "Salas",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1932&auto=format&fit=crop",
      description: "Sala de jantar com mesa retangular e buffet planejado."
    },
    {
      id: 7,
      title: "Home Office Compacto",
      category: "Home Office",
      image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?q=80&w=1936&auto=format&fit=crop",
      description: "Escritório doméstico compacto e funcional, perfeito para espaços menores."
    },
    {
      id: 8,
      title: "Escritório Executivo",
      category: "Home Office",
      image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=1974&auto=format&fit=crop",
      description: "Home office espaçoso com estantes e bancada ampla para maior produtividade."
    },
    {
      id: 9,
      title: "Banheiro Social",
      category: "Banheiros",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      description: "Banheiro com gabinete sob medida e armário para toalhas."
    },
    {
      id: 10,
      title: "Suíte Master",
      category: "Banheiros",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1887&auto=format&fit=crop",
      description: "Banheiro da suíte master com bancada dupla e armários amplos."
    },
    {
      id: 11,
      title: "Closet Feminino",
      category: "Closets",
      image: "https://images.unsplash.com/photo-1631553575981-583d58bb3b60?q=80&w=2070&auto=format&fit=crop",
      description: "Closet planejado com iluminação especial e organização para roupas e acessórios."
    },
    {
      id: 12,
      title: "Closet Masculino",
      category: "Closets",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1887&auto=format&fit=crop",
      description: "Closet masculino com nichos para sapatos e compartimentos para acessórios."
    },
  ];

  // Filtra projetos com base na categoria selecionada
  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-moveplan-primary">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria de Projetos</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Conheça alguns dos nossos projetos e inspire-se para transformar seus ambientes.
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

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? 'bg-moveplan-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="gallery-item rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="gallery-overlay h-full flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <p className="text-white text-sm">{project.category}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-600 text-left text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quer Um Projeto Como Esses?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e transforme seus ambientes com móveis planejados de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/orcamento"
              className="bg-moveplan-primary hover:bg-moveplan-secondary text-white font-bold py-3 px-8 rounded-md inline-block transition-colors"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/559891323451"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-moveplan-accent text-moveplan-primary hover:bg-yellow-400 font-bold py-3 px-8 rounded-md inline-flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Galeria;
