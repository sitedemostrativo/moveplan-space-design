
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold text-moveplan-primary mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Página não encontrada</p>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link
            to="/"
            className="bg-moveplan-primary hover:bg-moveplan-secondary text-white font-medium py-3 px-8 rounded-md inline-block transition-colors"
          >
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
