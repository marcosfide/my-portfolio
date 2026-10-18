import { FaWhatsapp } from "react-icons/fa";
import {
    BookText,
    CodeSquare,
    HomeIcon,
    UserRound,
    Linkedin,
    Pencil,
    Computer,
    Speech,
    Mail,
    Github,
    FileText,
    Globe,
} from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <FileText size={30}  />,
        src: "/CV-Fidelibus-Marcos.pdf",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://linkedin.com/in/marcos-fidelibus",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:fidelibusmarcos@gmail.com",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/marcosfide",
    },
    {
        id: 5,
        logo: <FaWhatsapp size={30} color="#25D366" />,
        src: "https://wa.me/543413145129?text=¡Hola!",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Contact",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact-me",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador de Software",
        subtitle: "Colegio de Farmacéuticos de Santa Fe 2da Circunscripción",
        description: `
            - Desarrollo full stack de los sistemas internos del Colegio: frontend en React y backend en AdonisJS con TypeScript y MySQL/MariaDB.
            - Desarrollo del módulo de seguimiento de medicación de pacientes de Farmageo: migraciones SQL, stored procedures, triggers, modelos con Lucid ORM y panel de administración en React.
            - Creación de pantallas, listados y ABMs dinámicos sobre un sistema genérico guiado por configuraciones en base de datos.
            - Implementación de PWA (íconos y manifest) para tres sitios del Colegio, y despliegues en servidores con Node.js, PM2 y Nginx.`,
        date: "Abr 2023 - Actualidad",
    },
    {
        id: 2,
        title: "Desarrollador Web Freelance",
        subtitle: "Sitios web para negocios",
        description: `
            - ProteiFuel: tienda online con catálogo, carrito, pedidos por WhatsApp y acceso para clientes mayoristas con precios propios.
            - Lomas de Intiyaco: sitio para un complejo de cabañas en Córdoba, con galería, comodidades, ubicación y consultas por WhatsApp.
            - Estudio Jurídico Navas: landing institucional para un estudio de abogados de Rosario, con SEO y Open Graph.
            - Desarrollados con Vite, responsive y optimizados para SEO.`,
        date: "2026",
    },
    {
        id: 3,
        title: "Blog Interactivo",
        subtitle: "Proyecto Personal",
        description: `
            Creación de una plataforma de publicación de blogs utilizando React.js para el frontend y Node.js en el backend, integrando una API REST.`,
        date: "Nov 2024",
    },
    {
        id: 4,
        title: "E-commerce Backend",
        subtitle: "Proyecto - Curso de Backend (CoderHouse)",
        description: `
            Desarrollo de un backend funcional para un e-commerce utilizando Node.js, Express.js, y MongoDB. Implementación de validaciones y lógica de negocio.`,
        date: "Jul 2024",
    },
    {
        id: 5,
        title: "Curso de Backend",
        subtitle: "CoderHouse",
        description: `
            Aprendizaje de Node.js, Express.js, y MongoDB. Implementación de validaciones y lógica de negocio.`,
        date: "Ene 2024 - Jul 2024",
    },
    {
        id: 6,
        title: "E-commerce - Intiyaco Merch",
        subtitle: "Proyecto Personal - Curso de React.js (CoderHouse)",
        description: `
            Desarrollo de una aplicación de e-commerce funcional usando React.js y Firebase para la gestión de datos.`,
        date: "Ene 2024",
    },
    {
        id: 7,
        title: "Curso de React.js",
        subtitle: "CoderHouse",
        description: `
            Aprendizaje de React.js, Firebase y herramientas modernas como Vite, aplicadas al desarrollo de interfaces interactivas.`,
        date: "Nov 2023 - Ene 2024",
    },
    {
        id: 8,
        title: "Sofía - Community Manager",
        subtitle: "Proyecto - Curso de Desarrollo Web y JavaScript (CoderHouse)",
        description: `
            Aplicación web para la gestión de redes sociales, desarrollada con HTML, CSS, JavaScript, y diseño adaptable.`,
        date: "Nov 2023",
    },
    {
        id: 9,
        title: "Curso de JavaScript",
        subtitle: "CoderHouse",
        description: `
            Enfoque en programación con JavaScript, bases de datos en Firebase, y diseño web adaptable.`,
        date: "Sep 2023 - Nov 2023",
    },
    {
        id: 10,
        title: "Curso de Desarrollo Web",
        subtitle: "CoderHouse",
        description: `
            Fundamentos del desarrollo web con HTML, CSS, SASS, Bootstrap, y SEO.`,
        date: "Jul 2023 - Sep 2023",
    },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 3.5,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 8,
        text: "Proyectos completados",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 6,
        text: "Certificaciones recibidas",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "Colaboración en un equipo profesional",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Globe />,
        title: "Sitios web para negocios",
        description: "Landings, sitios institucionales y tiendas con catálogo y pedidos por WhatsApp. Responsive, rápidos y optimizados para SEO, listos para publicar con dominio propio.",
    },
    {
        icon: <Computer />,
        title: "Desarrollo de sistemas web",
        description: "Aplicaciones y paneles de gestión a medida con React, TypeScript, Node.js / AdonisJS y bases de datos SQL (MySQL) o MongoDB.",
    },
    {
        icon: <Pencil />,
        title: "Diseño web y maquetación",
        description: "Diseño de interfaces web atractivas y responsivas, asegurando una experiencia de usuario fluida y profesional.",
    }
];

export const dataPortfolio = [
    {
        id: 6,
        title: "ProteiFuel - Tienda online",
        description: "Catálogo con carrito, promos automáticas, pedidos por WhatsApp y acceso para mayoristas con precios propios.",
        tags: ["Vite", "JavaScript", "Responsive", "SEO"],
        image: "/proteifuel.webp",
        urlDemo: "https://proteifuel.com/",
    },
    {
        id: 7,
        title: "Lomas de Intiyaco - Cabañas",
        description: "Sitio para un complejo de cabañas en Córdoba: cabañas, comodidades, galería, ubicación y consultas por WhatsApp.",
        tags: ["Vite", "JavaScript", "Vercel", "SEO"],
        image: "/lomas-intiyaco.webp",
        urlDemo: "https://lomas-intiyaco-cabanas.vercel.app/",
    },
    {
        id: 8,
        title: "Estudio Jurídico Navas",
        description: "Landing institucional para un estudio de abogados de Rosario, con áreas de práctica, equipo y contacto.",
        tags: ["Vite", "JavaScript", "Vercel", "SEO"],
        image: "/estudio-navas.webp",
        urlDemo: "https://estudiojuridiconavas.vercel.app/",
    },
    {
        id: 1,
        title: "E-commerce - Intiyaco Merch - Reactjs",
        image: "/ecommerce-intiyaco-image.png",
        urlGithub: "https://github.com/marcosfide/EcommerceIntiyaco",
        urlDemo: "https://ecommerce-intiyaco.vercel.app/",
        urlVideo: "/ecommerce-intiyaco-video.webm"
    },
    {
        id: 2,
        title: "Blog interactivo - Reactjs, Nodejs, MongoDB",
        image: "/Blog-foto.png",
        urlGithub: "https://github.com/marcosfide/blog-frontreact",
        urlGithubBack: "https://github.com/marcosfide/blog-backnode",
        urlDemo: "https://blog-frontreact-production.up.railway.app/",
        urlVideo: "/Blog-video.webm"
    },
    {
        id: 3,
        title: "E-commerce - Nodejs, Express, MongoDB",
        image: "/ecommerce-node-image.png",
        urlGithub: "https://github.com/marcosfide/Backend-Fidelibus",
        urlDemo: "https://ecommerce-marcos-fidelibus.up.railway.app/",
        urlVideo: "/registro-us-prem.webm",
        urlVideo2: "/sup-admin-Login-github-reset.webm"
    },
    {
        id: 4,
        title: "Mi App de Clima",
        image: "/app-clima.png",
        urlGithub: "https://github.com/marcosfide/mi-app-clima",
        urlDemo: "https://mi-app-clima.vercel.app/",
        urlVideo: "/app-clima.webm"
    },
    {
        id: 5,
        title: "Sofía - Community Manager",
        image: "/Sofi-CM-image.png",
        urlGithub: "https://github.com/marcosfide/ProyectoFinal-Fidelibus",
        urlDemo: "https://proyecto-final-fidelibus.vercel.app/index.html",
        urlVideo: "/Sofi-CM-video.webm"
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];