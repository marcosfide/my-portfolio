"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return ( 
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-8 py-40 md:py-20 md:flex justify-around mt-4 md:mt-0">
                <Image 
                    src="/foto-profile.PNG" 
                    priority 
                    width={200} 
                    height={200} 
                    quality={100} 
                    alt="Profile-pic" 
                    className="hidden md:block relative -bottom-16 "
                />
                
                <div className="flex flex-col justify-center max-w-lg mx-auto md:mx-1">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Desarrollador en Full Stack Junior
                        <TypeAnimation
                            sequence={[
                                "Desarrollador Full Stack Junior",
                                1000,
                                "MERN Stack (MongoDB, Express, React, Node)",
                                1000,
                                "Con experiencia en bases de datos SQL (MySQL)",
                                1000,
                                "Apasionado por la tecnología y la optimización de procesos",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block font-bold text-yellow-600"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-lg md:text-xl md:mx-o md:mb-8">
                    Desarrollador Full Stack Junior con experiencia en tecnologías <strong>MERN</strong> (MongoDB, Express, React, Node.js)y amplios conocimiento en bases de datos SQL y <strong>MySQL</strong>. Me apasiona crear soluciones que optimicen los procesos y mejoren la experiencia de usuario. Siempre busco desafíos que me permitan aprender nuevas herramientas para mejorar mis habilidades como desarrollador web.
                    </p>

                    <div className="flex item-center gap-3 md:justify-start md:gap-10">
                        <Link 
                            href="/portfolio" 
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/20">
                            Ver proyectos
                        </Link>
                        <Link 
                            href="/contact-me" 
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-yellow-600 border-yellow-600 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-yellow-600/20">
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
