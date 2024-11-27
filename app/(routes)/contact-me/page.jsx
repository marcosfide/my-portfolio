"use client"

import { useState } from "react";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import { FaWhatsapp } from "react-icons/fa";

const ContactMePage = () => {
    const [formStatus, setFormStatus] = useState(""); // Estado para mostrar mensajes de envío

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/manypdro", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setFormStatus("success");
                form.reset(); // Limpia los campos del formulario
            } else {
                setFormStatus("error");
            }
        } catch (error) {
            setFormStatus("error");
        }
    };

    return (
        <div>
            <ContainerPage>
                <TransitionPage />
                <div className="flex flex-col items-center justify-center h-full space-y-10">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Ponte en{' '}
                        <span className="font-bold text-yellow-600">contacto conmigo</span>
                    </h1>
                    <div className="grid w-full max-w-4xl gap-6 px-6 md:grid-cols-2 md:px-0">
                        {/* Información Personal */}
                        <div className="p-6 bg-darkBg rounded-lg shadow-lg border border-gray-600 space-y-4">
                            <h2 className="text-xl font-bold text-yellow-600">Mis Datos</h2>
                            <p className="text-gray-300">
                                <strong>Nombre y Apellido:</strong> Marcos Fidelibus
                            </p>
                            <p className="text-gray-300">
                                <strong>Teléfono:</strong> +34 685 80 35 22
                                {/* Ícono de WhatsApp */}
                                <a
                                    href="https://wa.me/34685803522?text=¡Hola!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 -mb-1 inline-block"
                                >
                                    <FaWhatsapp size={20} color="#25D366" />
                                </a>
                            </p>
                            <p className="text-gray-300">
                                <strong>Email:</strong>{' '}
                                <a
                                    href="mailto:fidelibusmarcos@gmail.com"
                                    className="text-yellow-600 hover:underline"
                                >
                                    fidelibusmarcos@gmail.com
                                </a>
                            </p>
                            <p className="text-gray-300">
                                <strong>LinkedIn:</strong>{' '}
                                <a
                                    href="https://www.linkedin.com/in/marcos-fidelibus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-600 hover:underline"
                                >
                                    linkedin.com/in/marcos-fidelibus
                                </a>
                            </p>
                            <p className="text-gray-300">
                                <strong>Ubicación:</strong> Torremolinos, Málaga, España
                            </p>
                        </div>

                        {/* Formulario de Contacto */}
                        <div className="p-6 bg-darkBg rounded-lg shadow-lg border border-gray-600 space-y-4">
                            <h2 className="text-xl font-bold text-yellow-600">Envíame un mensaje</h2>
                            <form
                                onSubmit={handleSubmit} // Usamos onSubmit para manejar el envío asíncrono
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-gray-400 mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-1">Mensaje</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>

                            {/* Mensajes de éxito o error */}
                            {formStatus === "success" && (
                                <p className="mt-5 text-green-500">¡Mensaje enviado con éxito!</p>
                            )}
                            {formStatus === "error" && (
                                <p className="mt-5 text-red-500">Hubo un error. Por favor, intenta de nuevo.</p>
                            )}
                        </div>
                    </div>
                </div>
            </ContainerPage>
        </div>
    );
};

export default ContactMePage;
