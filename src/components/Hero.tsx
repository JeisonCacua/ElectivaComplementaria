import React from "react";

const Hero = () => {
    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.querySelector("#especies");
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section
            id="hero"
            className="relative h-[100vh] text-white flex items-center justify-center overflow-hidden scroll-mt-24"
        >
            {/* Imagen de fondo */}
            <img
                src="/images/mapa.png"
                alt="Mapa de Norte de Santander"
                className="absolute inset-0 w-full h-full object-cover scale-105"
            />

            {/* Capa oscura y degradado */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

            {/* Contenido */}
            <div className="relative z-10 max-w-3xl px-6 text-center">
                <p className="text-xs md:text-sm tracking-[0.25em] text-emerald-300 mb-3 uppercase">
                    Región Andina · Colombia
                </p>

                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    NORTE DE SANTANDER
                    <span className="block text-emerald-300 text-2xl md:text-3xl mt-1">
                        POR PISOS TÉRMICOS
                    </span>
                </h1>

                <p className="mb-8 text-base md:text-lg text-gray-200">
                    Descubra cómo los diferentes pisos térmicos de Norte de Santander impulsan
                    una rica diversidad económica: desde los recursos minerales que fortalecen
                    la industria, hasta los cultivos y alimentos que dan vida al campo y a las
                    tradiciones del norte colombiano.
                </p>

                {/* Botón principal */}
                <a
                    href="#especies"
                    onClick={handleScrollToSection}
                    className="group inline-flex items-center gap-2 px-8 py-3 rounded-full
                               bg-emerald-500/90 text-gray-900 font-semibold text-sm md:text-base
                               border border-emerald-300/70 shadow-lg shadow-emerald-500/40
                               hover:bg-emerald-400 hover:shadow-emerald-400/60
                               hover:-translate-y-0.5 active:translate-y-0 active:scale-95
                               transition-all duration-200"
                >
                    <span>Explora los alimentos más destacados</span>
                    <span className="text-lg transform transition-transform duration-200 group-hover:translate-x-1">
                        ↗
                    </span>
                </a>

                {/* Texto pequeño debajo del botón */}
                <p className="mt-3 text-xs md:text-sm text-gray-300">
                    Deslice hacia abajo para conocer minerales, cultivos y productos emblemáticos.
                </p>
            </div>
        </section>
    );
};

export default Hero;
