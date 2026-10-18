"use client"

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import CodeCard from "./code-card";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 h-full p-8 py-40 md:py-20 mt-4 md:mt-0 max-w-6xl mx-auto">
                <div className="flex flex-col justify-center max-w-lg">
                    <p className="mb-3 text-sm tracking-widest text-center uppercase md:text-left text-slate-300">
                        Rosario, Argentina · Remoto
                    </p>
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-8">
                        Desarrollador Full Stack
                        <TypeAnimation
                            sequence={[
                                "React · TypeScript · Node.js",
                                1500,
                                "Backends con AdonisJS y MySQL",
                                1500,
                                "Sitios web para negocios",
                                1500,
                                "Sistemas de gestión a medida",
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block font-bold text-yellow-600 min-h-[2.5em] md:min-h-[1.25em]"
                        />
                    </h1>
                    <p className="mx-auto mb-6 text-lg text-center md:text-left md:text-xl md:mx-0 md:mb-8">
                        Desarrollo sistemas web y sitios para negocios. Desde 2023 trabajo en los sistemas internos del <strong>Colegio de Farmacéuticos de Santa Fe</strong> con <strong>React</strong>, <strong>AdonisJS</strong>, <strong>TypeScript</strong> y <strong>MySQL</strong>, y como freelance hago landings, sitios institucionales y tiendas con pedidos por WhatsApp.
                    </p>

                    <div className="flex justify-center gap-3 md:justify-start md:gap-10">
                        <Link
                            href="/portfolio"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/20">
                            Ver proyectos
                        </Link>
                        <Link
                            href="/contact-me"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-yellow-600 border-yellow-600 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-yellow-600/20">
                            Contactame
                        </Link>
                    </div>
                </div>

                <CodeCard />
            </div>
        </div>
    );
}

export default Introduction;
