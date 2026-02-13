"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, ShieldCheck, AlertCircle, FileText, Calendar, Building2, User } from "lucide-react";
import { validateTitle, TitleValidationResult } from "@/lib/validation";

export default function TransparencyPage() {
    const [code, setCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<TitleValidationResult | null>(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!code.trim()) return;

        setIsLoading(true);
        setResult(null);
        setHasSearched(false);

        try {
            const validationResult = await validateTitle(code);
            setResult(validationResult);
        } catch (error) {
            console.error("Error validando:", error);
            setResult({ isValid: false, error: "Ocurrió un error inesperado. Intente nuevamente." });
        } finally {
            setIsLoading(false);
            setHasSearched(true);
        }
    };

    return (
        <main className="min-h-screen flex flex-col font-sans bg-gray-50">
            <Navbar />

            {/* Header */}
            <section className="bg-[#003366] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600/003366/FFFFFF/png?text=Patron+Sindicato')] opacity-5" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm md:text-base backdrop-blur-sm">
                        <ShieldCheck className="h-5 w-5 text-[#FFD700]" />
                        <span className="font-medium">Sistema de Validación Oficial</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black italic tracking-tight mb-6">
                        TRANSPARENCIA INSTITUCIONAL
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Verifique la autenticidad de los títulos y certificados emitidos por el Sindicato de Choferes Profesionales del Guayas.
                    </p>
                </div>
            </section>

            {/* Verification Area */}
            <section className="flex-grow container mx-auto px-4 py-12 -mt-10 relative z-20">
                <div className="max-w-3xl mx-auto">
                    {/* Card de Búsqueda */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                        <form onSubmit={handleSearch} className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Search className="h-6 w-6 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#003366] focus:ring-4 focus:ring-[#003366]/10 outline-none text-lg font-bold text-gray-800 placeholder:text-gray-400 uppercase tracking-widest transition-all"
                                        placeholder="INGRESE EL CÓDIGO (EJ: AB-12345)"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isLoading || !code.trim()}
                                    className="bg-[#FFD700] hover:bg-[#FFC000] text-[#1A1A1A] font-black italic text-lg px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all disabled:opacity-50 disabled:hover:translate-y-0"
                                >
                                    {isLoading ? "VERIFICANDO..." : "VALIDAR TÍTULO"}
                                </Button>
                            </div>
                            <p className="text-center text-sm text-gray-500">
                                El código de validación se encuentra en la parte inferior derecha de su título.
                            </p>
                        </form>
                    </div>

                    {/* Resultados */}
                    {hasSearched && result && (
                        <div className={`rounded-2xl shadow-lg overflow-hidden animate-in fade-in zoom-in duration-500 ${result.isValid ? "bg-white border-l-8 border-[#2E7D32]" : "bg-white border-l-8 border-[#CC0000]"}`}>

                            {result.isValid && result.data ? (
                                // SUCCESS STATE
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                                        <div className="bg-green-100 p-3 rounded-full">
                                            <ShieldCheck className="h-8 w-8 text-[#2E7D32]" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-[#2E7D32]">DOCUMENTO VÁLIDO</h2>
                                            <p className="text-gray-500 text-sm">Verificado en Sistema de Gestión Académica</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                                <User className="h-4 w-4" /> Titular
                                            </label>
                                            <p className="text-xl font-bold text-[#1A1A1A]">{result.data.nombre}</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                                <FileText className="h-4 w-4" /> Cédula
                                            </label>
                                            <p className="text-xl font-bold text-[#1A1A1A]">{result.data.cedula}</p>
                                        </div>

                                        <div className="md:col-span-2 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 mb-2">
                                                <GraduationCapIcon className="h-4 w-4" /> Título Obtenido
                                            </label>
                                            <p className="text-2xl font-black text-[#003366]">{result.data.titulo}</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                                <Building2 className="h-4 w-4" /> Institución
                                            </label>
                                            <p className="text-base font-semibold text-gray-700">{result.data.institucion}</p>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                                                <Calendar className="h-4 w-4" /> Fecha Emisión
                                            </label>
                                            <p className="text-base font-semibold text-gray-700">{result.data.fechaEmision}</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                                        <div className="text-xs text-gray-400 font-mono">
                                            REG: {result.data.codigoRegistro}
                                        </div>
                                        <div className="bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-full">
                                            OFICIAL
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // ERROR STATE
                                <div className="p-8 text-center">
                                    <div className="bg-red-100 p-4 rounded-full inline-block mb-6">
                                        <AlertCircle className="h-10 w-10 text-[#CC0000]" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#CC0000] mb-2">DOCUMENTO NO ENCONTRADO</h2>
                                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                                        {result.error || "El código ingresado no coincide con nuestros registros. Verifique que esté escrito correctamente."}
                                    </p>
                                    <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg text-sm text-orange-800 text-left mx-auto max-w-lg">
                                        <strong>¿Cree que es un error?</strong><br />
                                        Por favor contacte a secretaría general al <strong>(04) 2-XXXXXX</strong> o visite nuestras oficinas con su documento físico para validación manual.
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    );
}
