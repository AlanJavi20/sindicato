"use client";

import { useState } from "react";
import { registerStudent, RegistrationData } from "@/lib/registration";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function RegistrationForm() {
    const [formData, setFormData] = useState<RegistrationData>({
        fullName: "",
        email: "",
        phone: "",
        courseInterest: "Licencia C",
        comments: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const result = await registerStudent(formData);
            if (result.success) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMessage(result.message);
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Ocurrió un error inesperado. Por favor intente nuevamente.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-green-50/10 border border-green-500/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Inscripción Recibida!</h3>
                <p className="text-gray-300 mb-6">
                    Gracias por tu interés, {formData.fullName}. Un asesor se pondrá en contacto contigo a la brevedad al número {formData.phone}.
                </p>
                <button
                    onClick={() => {
                        setStatus("idle");
                        setFormData({ ...formData, fullName: "", email: "", phone: "", comments: "" });
                    }}
                    className="text-[#FFD700] hover:underline font-medium"
                >
                    Realizar otra inscripción
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-300">
                        Nombre Completo *
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                        placeholder="Ej. Juan Pérez"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                        Teléfono / WhatsApp *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                        placeholder="Ej. 0991234567"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Correo Electrónico *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                    placeholder="ejemplo@correo.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="courseInterest" className="text-sm font-medium text-gray-300">
                    Curso de Interés *
                </label>
                <select
                    id="courseInterest"
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all [&>option]:text-black"
                >
                    <option value="Licencia C">Licencia Tipo C (Taxis, Furgonetas)</option>
                    <option value="Licencia D">Licencia Tipo D (Buses)</option>
                    <option value="Licencia E">Licencia Tipo E (Camiones Pesados)</option>
                    <option value="Recuperacion">Recuperación de Puntos</option>
                    <option value="Convalidacion">Convalidación de Licencias</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="comments" className="text-sm font-medium text-gray-300">
                    Comentarios o Preguntas (Opcional)
                </label>
                <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    value={formData.comments}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all resize-none"
                    placeholder="¿Tienes alguna duda específica?"
                />
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1A1A1A] font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    "ENVIAR INSCRIPCIÓN AHORA"
                )}
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
                Al enviar este formulario aceptas ser contactado por nuestro equipo de admisiones.
            </p>
        </form>
    );
}
