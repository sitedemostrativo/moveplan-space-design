
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/d214a488-3cc1-47ba-88ae-0f63318f4db2.png" 
              alt="Moveplan" 
              className="h-12 md:h-14 rounded-md" 
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`font-medium transition-colors ${isScrolled ? 'text-moveplan-dark hover:text-moveplan-primary' : 'text-white hover:text-moveplan-accent'}`}>
            Home
          </Link>
          <Link to="/sobre" className={`font-medium transition-colors ${isScrolled ? 'text-moveplan-dark hover:text-moveplan-primary' : 'text-white hover:text-moveplan-accent'}`}>
            Sobre Nós
          </Link>
          <Link to="/servicos" className={`font-medium transition-colors ${isScrolled ? 'text-moveplan-dark hover:text-moveplan-primary' : 'text-white hover:text-moveplan-accent'}`}>
            Serviços
          </Link>
          <Link to="/galeria" className={`font-medium transition-colors ${isScrolled ? 'text-moveplan-dark hover:text-moveplan-primary' : 'text-white hover:text-moveplan-accent'}`}>
            Galeria
          </Link>
          <Link to="/orcamento" className={`font-medium transition-colors ${isScrolled ? 'text-moveplan-dark hover:text-moveplan-primary' : 'text-white hover:text-moveplan-accent'}`}>
            Orçamento
          </Link>
          <Link to="/contato" className={`font-medium transition-colors ${isScrolled ? 'text-moveplan-dark hover:text-moveplan-primary' : 'text-white hover:text-moveplan-accent'}`}>
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            className={`w-6 h-6 ${isScrolled ? 'text-moveplan-dark' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-medium text-moveplan-dark hover:text-moveplan-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/sobre" 
                className="font-medium text-moveplan-dark hover:text-moveplan-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/servicos" 
                className="font-medium text-moveplan-dark hover:text-moveplan-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/galeria" 
                className="font-medium text-moveplan-dark hover:text-moveplan-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galeria
              </Link>
              <Link 
                to="/orcamento" 
                className="font-medium text-moveplan-dark hover:text-moveplan-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Orçamento
              </Link>
              <Link 
                to="/contato" 
                className="font-medium text-moveplan-dark hover:text-moveplan-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
