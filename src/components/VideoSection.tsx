const VideoSection = () => {
    return (
        <section
            id="video"
            className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-100"
        >
            <div className="max-w-5xl mx-auto px-6">
                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4 text-emerald-400 tracking-wide">
                        Video Informativo
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base">
                        Conoce mejor la riqueza natural, cultural y productiva del Norte de Santander
                        a través de este video informativo.
                    </p>
                </div>

                {/* Contenedor del video con estilo similar a las tarjetas */}
                <div className="flex justify-center">
                    <div
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-gray-800 
                                   border border-emerald-500/10 shadow-xl w-full max-w-3xl
                                   hover:-translate-y-2 hover:border-emerald-400/60 hover:shadow-emerald-500/40 
                                   transition-all duration-300"
                    >
                        {/* Decoración estilo AgriculturalSection */}
                        <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />

                        {/* Contenedor 16:9 responsivo */}
                        <div className="relative p-4">
                            <div className="relative pt-[56.25%] rounded-xl overflow-hidden">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/XfBAkCQU5Dw"
                                    title="Video informativo Norte de Santander"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Texto inferior opcional */}
                <div className="mt-10 text-center text-gray-400 text-sm max-w-3xl mx-auto">
                    <p>
                        🎥 Este material audiovisual complementa la información presentada en las
                        secciones sobre agricultura, minerales y biodiversidad del departamento.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
