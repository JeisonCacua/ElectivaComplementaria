const minerals = [
    {
        name: "Carbón",
        icon: "⛏️",
        floor: "Piso Cálido de 0 a 1.000 m.s.n.m.",
        desc: "Es el principal recurso del piso cálido, donde el calor y la vegetación densa favorecen la formación de yacimientos carboníferos.",
        locations: "Ocaña, Sardinata, El Zulia y la región del Catatumbo.",
        uses: "Generación de energía, producción de cemento y combustibles industriales."
    },
    {
        name: "Caliza y Yeso",
        icon: "🏗️",
        floor: "Piso Templado de 1.000 a 2.000 m.s.n.m.",
        desc: "Rocas sedimentarias ampliamente utilizadas para la industria de la construcción y producción de cemento.",
        locations: "Zonas cercanas a Cúcuta, Los Patios y Bochalema.",
        uses: "Elaboración de cemento, bloques, cal y yeso industrial."
    },
    {
        name: "Oro",
        icon: "🪙",
        floor: "Piso Frío de 2.000 a 3.000 m.s.n.m.",
        desc: "Mineral precioso encontrado en vetas hidrotermales de las zonas frías y páramos de la cordillera oriental.",
        locations: "Cercanías del páramo de Santurbán y municipios de Pamplona y Cácota.",
        uses: "Joyería, reservas monetarias y desarrollo de la minería artesanal."
    },
    {
        name: "Cobre",
        icon: "⚙️",
        floor: "Zonas Montañosas de más de 3.000 m.s.n.m.",
        desc: "Metal esencial presente en vetas polimetálicas junto a oro y plata, originado por antiguas actividades volcánicas.",
        locations: "Áreas elevadas de la cordillera Oriental y sectores cercanos al páramo.",
        uses: "Fabricación de conductores eléctricos, componentes electrónicos y aleaciones industriales."
    }
];

const MineralSection = () => {
    return (
        <section
            id="minerales"
            className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-emerald-400 mb-4 tracking-wide">
                        Riquezas Minerales
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base">
                        Los diferentes pisos térmicos de Norte de Santander albergan una gran variedad de minerales
                        que impulsan la economía, la industria y el desarrollo sostenible del departamento.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {minerals.map((mineral) => (
                        <div
                            key={mineral.name}
                            className="group bg-gradient-to-br from-gray-900/80 to-gray-800 rounded-2xl p-6 border border-gray-800 shadow-xl
                                       hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-emerald-500/40 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-semibold text-emerald-300">{mineral.name}</h3>
                                <span className="text-3xl">{mineral.icon}</span>
                            </div>

                            <span className="inline-block text-xs font-medium px-3 py-1 mb-3 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                                {mineral.floor}
                            </span>

                            <p className="text-gray-300 text-sm mb-3">{mineral.desc}</p>
                            <p className="text-gray-400 text-xs mb-2">
                                <span className="font-semibold text-gray-200">📍 Ubicación principal:</span> {mineral.locations}
                            </p>
                            <p className="text-gray-400 text-xs">
                                <span className="font-semibold text-gray-200">💡 Usos:</span> {mineral.uses}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Leyenda */}
                <div className="mt-12 text-center text-gray-400 text-sm">
                    <p>
                        🌡️ <span className="text-emerald-300 font-medium">Pisos térmicos</span>:
                        desde el <strong>Piso Cálido</strong> (0–1.000 m s. n. m.) hasta las
                        <strong> Zonas Montañosas</strong> (más de 3.000 m s. n. m.), donde se concentran los minerales que fortalecen la identidad económica del Norte de Santander.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MineralSection;
