import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-8 mx-5 mb-32 mt-40 md:my-0 md:mx-20 md:grid-cols-2">
                <div className="max-w-[370px] md:max-w-[450px] z-10">
                    <h1 className="text-3xl leading-tight text-center md:text-4xl md:mb-5">Mis <span className="font-bold text-yellow-600"> servicios.</span></h1>
                    <p className="mb-3 text-lg text-gray-300 md:text-xl">
                        Desarrollo sitios web para negocios y sistemas a medida que combinan buen diseño con funcionalidad real.
                        Trabajo con HTML, CSS, JavaScript, TypeScript, React, Vite, Node.js, AdonisJS y MySQL, y me ocupo de que cada proyecto sea responsive, rápido, fácil de usar y quede publicado con su dominio.
                    </p>
                    <Link href="/contact-me" 
                    className="px-3 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-600/65">
                    Contacta conmigo
                    </Link>
                </div>
                <div>
                    <SliderServices/>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;