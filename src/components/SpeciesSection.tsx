import { useEffect } from "react";

const SpeciesSection = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in-up");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    }
                });
            },
            { threshold: 0.2 }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="especies"
            className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 scroll-mt-20"
        >
            <div className="max-w-6xl mx-auto px-6 space-y-24">
                {/* Título */}
                <div className="text-center fade-in-up opacity-0 translate-y-6 transition-all duration-700">
                    <h2 className="text-4xl font-extrabold text-emerald-400 mb-4 tracking-wide">
                        Alimentos Más Destacados
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Una mirada a los productos agrícolas y alimentarios que definen la riqueza y el sabor
                        del Norte de Santander. Desde las montañas frías hasta los valles cálidos,
                        cada alimento refleja la diversidad de sus pisos térmicos.
                    </p>
                </div>

                {/* Durazno */}
                <div className="grid md:grid-cols-2 gap-10 items-center fade-in-up opacity-0 translate-y-6 transition-all duration-700">
                    <div>
                        <h3 className="text-2xl font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                            🍑 El Durazno
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Fruta emblemática cultivada principalmente en{" "}
                            <strong>Cácota, Chitagá, Silos</strong> y <strong>Pamplona</strong>.
                            Sus variedades <strong>Jarillo</strong> y <strong>Gran Jarillo</strong> se destacan por su
                            dulzura y calidad, convirtiéndose en un símbolo agrícola con
                            potencial de exportación y orgullo regional.
                        </p>
                    </div>
                    <img
                        src="/images/durazno.jpg"
                        alt="Durazno"
                        className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>

                {/* Trucha */}
                <div className="grid md:grid-cols-2 gap-10 items-center fade-in-up opacity-0 translate-y-6 transition-all duration-700">
                    <img
                        src="/images/trucha.webp"
                        alt="Trucha"
                        className="rounded-2xl shadow-xl order-2 md:order-1 hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                            🐟 La Trucha
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Criada en las aguas frías y puras de{" "}
                            <strong>Mutiscua, Pamplona, Cácota</strong> y <strong>Chitagá</strong>,
                            la trucha es uno de los productos más reconocidos del departamento.
                            Su frescura y sabor la convierten en una joya gastronómica de la región andina.
                        </p>
                    </div>
                </div>

                {/* Café */}
                <div className="grid md:grid-cols-2 gap-10 items-center fade-in-up opacity-0 translate-y-6 transition-all duration-700">
                    <div>
                        <h3 className="text-2xl font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                            ☕ El Café
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            En las montañas de <strong>Toledo, Cácota</strong> y <strong>Labateca</strong> florecen los cafetales
                            que producen granos de calidad excepcional, apreciados por su aroma intenso y sabor equilibrado.
                            Este café representa el esfuerzo de los caficultores que mantienen viva
                            la tradición agrícola y cultural del norte santandereano.
                        </p>
                    </div>
                    <img
                        src="/images/cafe.jpg"
                        alt="Café"
                        className="rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>

                {/* Línea decorativa final */}
                <div className="text-center fade-in-up opacity-0 translate-y-6 transition-all duration-700">
                    <div className="w-24 h-1 mx-auto bg-emerald-400 rounded-full mb-6"></div>
                    <p className="text-sm text-gray-400 max-w-md mx-auto">
                        🌿 Cada uno de estos alimentos es testimonio del equilibrio entre naturaleza,
                        tradición y progreso que caracteriza a Norte de Santander.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SpeciesSection;
