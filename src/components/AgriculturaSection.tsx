const pisos = [
    {
        title: "Piso Cálido",
        rango: "0 a 1.000 m.s.n.m.",
        icon: "🌴",
        clima: "Clima cálido y húmedo, con temperaturas que suelen estar entre 24 °C y 32 °C.",
        cultivosResumen: "Palma de aceite, arroz, cacao, plátano, yuca y caña panelera.",
        descripcion:
            "En este piso se concentran gran parte de los cultivos comerciales e industriales del departamento. Los valles y zonas del Catatumbo permiten grandes extensiones agrícolas y sistemas de riego.",
        municipios:
            "Región del Catatumbo, Tibú, El Tarra, Convención, Teorama, El Carmen y zonas bajas de Cúcuta y Ocaña.",
        productosClave: [
            "Palma de aceite: Base para la industria de aceites y biocombustibles.",
            "Arroz: Cultivo de importancia básica en la seguridad alimentaria regional.",
            "Cacao: Materia prima para chocolates artesanales e industriales.",
            "Plátano y yuca: Alimentos fundamentales en la dieta diaria y en mercados locales."
        ]
    },
    {
        title: "Piso Templado",
        rango: "1.000 a 2.000 m.s.n.m.",
        icon: "🌿",
        clima: "Clima templado, con temperaturas moderadas entre 18 °C y 24 °C, ideales para cultivos de alto valor.",
        cultivosResumen: "Café (principal), aguacate Hass y caña de azúcar.",
        descripcion:
            "Este piso térmico se caracteriza por su producción de café de excelente calidad y frutales de exportación. Las laderas y montañas templadas favorecen sistemas agroforestales y cultivos asociados.",
        municipios:
            "Toledo, Cácota, Labateca, Bochalema, Chinácota, Herrán y Ragonvalia.",
        productosClave: [
            "Café: Uno de los productos emblemáticos del departamento, con aromas y perfiles de taza diferenciados.",
            "Aguacate Hass: Cultivo en expansión con gran potencial de exportación.",
            "Caña de azúcar: Usada para panela, mieles y productos artesanales."
        ]
    },
    {
        title: "Piso Frío",
        rango: "2.000 a 3.000 m.s.n.m.",
        icon: "🏔️",
        clima: "Clima frío, con temperaturas que pueden estar entre 10 °C y 18 °C, ideal para hortalizas y tubérculos.",
        cultivosResumen: "Papa, cebolla, hortalizas y frutales como fresa y uchuva.",
        descripcion:
            "En las zonas altas se desarrollan cultivos de clima frío que abastecen plazas de mercado locales y regionales. Los suelos de montaña permiten una agricultura diversificada y de gran importancia para la seguridad alimentaria.",
        municipios:
            "Pamplona, Cácota, Chitagá, Mutiscua, Silos y zonas cercanas al páramo de Santurbán.",
        productosClave: [
            "Papa: Uno de los principales alimentos producidos en la zona fría.",
            "Cebolla y hortalizas: Base de la oferta de verduras frescas para la región.",
            "Fresa y uchuva: Frutales andinos con potencial para transformación y comercialización."
        ]
    }
];

const AgriculturalSection = () => {
    return (
        <section
            id="agricultura"
            className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-100"
        >
            <div className="max-w-5xl mx-auto px-6">
                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4 text-emerald-400 tracking-wide">
                        Riquezas Agrícolas
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base">
                        La diversidad de pisos térmicos en Norte de Santander permite una amplia
                        variedad de cultivos, desde productos tropicales en las tierras bajas
                        hasta hortalizas y frutales andinos en las zonas frías.
                    </p>
                </div>

                {/* Tarjetas por piso (una debajo de otra) */}
                <div className="space-y-10">
                    {pisos.map((piso) => (
                        <div
                            key={piso.title}
                            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-800 border border-emerald-500/10 shadow-xl
                                       hover:-translate-y-2 hover:border-emerald-400/60 hover:shadow-emerald-500/40 transition-all duration-300"
                        >
                            {/* Decoración */}
                            <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />

                            <div className="relative p-6 flex flex-col h-full">
                                {/* Título */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-emerald-300">
                                        {piso.icon} {piso.title}
                                    </h3>
                                </div>

                                {/* Altitud */}
                                <span className="inline-block text-xs font-medium px-3 py-1 mb-3 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                                    Altitud: {piso.rango}
                                </span>

                                {/* Clima */}
                                <p className="text-gray-300 text-sm mb-3">
                                    <span className="font-semibold text-gray-100">Clima: </span>
                                    {piso.clima}
                                </p>

                                {/* Descripción */}
                                <p className="text-gray-300 text-sm mb-3">
                                    {piso.descripcion}
                                </p>

                                {/* Municipios */}
                                <p className="text-gray-400 text-xs mb-3">
                                    <span className="font-semibold text-gray-100">📍 Municipios destacados: </span>
                                    {piso.municipios}
                                </p>

                                {/* Cultivos */}
                                <p className="text-gray-300 text-sm mb-2">
                                    <span className="font-semibold text-gray-100">🌱 Cultivos principales: </span>
                                    {piso.cultivosResumen}
                                </p>

                                {/* Productos clave */}
                                <ul className="mt-2 space-y-1 text-xs text-gray-300">
                                    {piso.productosClave.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leyenda final */}
                <div className="mt-12 text-center text-gray-400 text-sm max-w-3xl mx-auto">
                    <p>
                        🌾 <span className="text-emerald-300 font-medium">De las tierras calientes a las montañas frías</span>,
                        la agricultura en Norte de Santander se adapta a cada piso térmico,
                        dando origen a una oferta de alimentos que fortalece tanto la economía
                        como la identidad cultural del departamento.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AgriculturalSection;
