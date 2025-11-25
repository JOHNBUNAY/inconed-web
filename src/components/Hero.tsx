import React from "react";

export default function Hero() {
  return (
    // CAMBIOS CLAVE:
    // 1. min-h-screen: Asegura que nunca se corte en pantallas bajitas.
    // 2. pt-28 y pb-44: Estos valores crean el "marco" perfecto.
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black pt-28 pb-44">
      
      {/* 1. FONDO */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
          alt="Construcción INCONED" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        
        {/* TÍTULO: Bajamos de 7xl a 6xl para dar aire */}
        <h1 className="animate-fade-up font-oswald text-5xl md:text-6xl font-bold text-white mb-6 leading-tight opacity-0">
          CONSTRUIMOS <br />
          <span className="text-inconed-gold">EL FUTURO</span>
        </h1>

        {/* PÁRRAFO */}
        <p className="animate-fade-up-delay font-sans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 opacity-0">
          Desde el anteproyecto hasta la entrega final. Transformamos tu visión en obras funcionales.
        </p>

        {/* BOTONES */}
        <div className="animate-fade-up-delay flex flex-col md:flex-row gap-4 justify-center items-center opacity-0">
          <a 
            href="https://wa.me/593982452634" 
            target="_blank"
            className="bg-inconed-gold text-black font-bold py-4 px-8 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20"
          >
            Agenda una Asesoría
          </a>
          <a 
              href="/proyectos" 
              className="border border-white text-white py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all"
            >
              Ver Portafolio
            </a>
        </div>

      </div>
    </section>
  );
}