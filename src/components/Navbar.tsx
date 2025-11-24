import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Función para desplazamiento suave
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const section = document.querySelector(targetId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setOpen(false); // cerrar el menú móvil después de hacer clic
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/80 text-white shadow-lg border-b border-emerald-500/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Título */}
                <h1
                    className="text-2xl font-extrabold tracking-wide text-emerald-400 drop-shadow-sm cursor-pointer hover:text-emerald-300 transition"
                    onClick={(e) => handleSmoothScroll(e as any, "#hero")}
                >
                    NORTE DE SANTANDER
                </h1>

                {/* Botón hamburguesa móvil */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-full border border-emerald-500/50 bg-gray-900/70 hover:bg-gray-800 transition"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    <span
                        className={`block h-0.5 w-5 bg-emerald-400 rounded transition-transform duration-200 ${open ? "translate-y-1.5 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-emerald-400 rounded transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-emerald-400 rounded transition-transform duration-200 ${open ? "-translate-y-1.5 -rotate-45" : ""
                            }`}
                    />
                </button>

                {/* Menú principal */}
                <ul
                    className={`md:flex md:space-x-6 md:static md:w-auto md:bg-transparent md:shadow-none md:rounded-none
                        absolute left-0 top-full w-full bg-gray-900/95 shadow-lg rounded-b-2xl
                        md:opacity-100 md:translate-y-0 md:pointer-events-auto
                        transition-all duration-300 ease-in-out
                        ${open
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-3 pointer-events-none"
                        }`}
                >
                    <li className="md:mb-0 mb-4 text-center md:text-left">
                        <a
                            href="#hero"
                            onClick={(e) => handleSmoothScroll(e, "#hero")}
                            className="group relative inline-block font-semibold text-gray-200 hover:text-emerald-400 transition"
                        >
                            Inicio
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
                        </a>
                    </li>
                    <li className="md:mb-0 mb-4 text-center md:text-left">
                        <a
                            href="#video"
                            onClick={(e) => handleSmoothScroll(e, "#video")}
                            className="group relative inline-block font-semibold text-gray-200 hover:text-emerald-400 transition"
                        >
                            Video informativo
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
                        </a>
                    </li>
                    <li className="md:mb-0 mb-4 text-center md:text-left">
                        <a
                            href="#minerales"
                            onClick={(e) => handleSmoothScroll(e, "#minerales")}
                            className="group relative inline-block font-semibold text-gray-200 hover:text-emerald-400 transition"
                        >
                            Minerales
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
                        </a>
                    </li>
                    <li className="md:mb-0 mb-2 text-center md:text-left">
                        <a
                            href="#agricultura"
                            onClick={(e) => handleSmoothScroll(e, "#agricultura")}
                            className="group relative inline-block font-semibold text-gray-200 hover:text-emerald-400 transition"
                        >
                            Agricultura
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
