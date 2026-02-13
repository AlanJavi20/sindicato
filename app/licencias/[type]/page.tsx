import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LICENCIAS } from "@/lib/data/licencias";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Banknote, GraduationCap, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface LicensePageProps {
    params: Promise<{
        type: string;
    }>;
}

export default async function LicensePage({ params }: LicensePageProps) {
    const { type } = await params;
    const license = LICENCIAS[type];

    if (!license) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col font-sans bg-gray-50">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src={license.image}
                    alt={license.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="container mx-auto px-4 relative z-20 text-center space-y-6">
                    <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        Volver al Inicio
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black italic">{license.title}</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                        {license.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                            <span className="font-bold text-[#FFD700]">Duración:</span> {license.duration}
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                            <span className="font-bold text-[#FFD700]">Modalidad:</span> {license.mode}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 lg:py-16 grid lg:grid-cols-3 gap-8 lg:gap-12 -mt-20 relative z-30">

                {/* MAIN CONTENT - LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-12">

                    {/* GRADUATES / HISTORY SECTION */}
                    <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-50 rounded-2xl">
                                <GraduationCap className="h-8 w-8 text-[#003366]" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#1A1A1A]">Historial de Éxito</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {license.history.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                        <span className="block text-3xl font-bold text-[#003366]">{license.history.graduates.toLocaleString()}+</span>
                                        <span className="text-sm text-gray-500 font-medium">Graduados</span>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                        <span className="block text-3xl font-bold text-[#003366]">{license.history.promotions}+</span>
                                        <span className="text-sm text-gray-500 font-medium">Promociones</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                                <Image src="/images/graduados_profesional.jpeg" alt="Graduados" fill className="object-cover" />
                                {/* Fallback to generic image if not specific */}
                            </div>
                        </div>
                    </section>

                    {/* BENEFITS SECTION */}
                    <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-yellow-50 rounded-2xl">
                                <CheckCircle2 className="h-8 w-8 text-[#FFD700]" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#1A1A1A]">Beneficios Exclusivos</h2>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {license.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#FFFDF0] transition-colors border border-transparent hover:border-[#FFD700]/30">
                                    <CheckCircle2 className="h-6 w-6 text-[#FFD700] shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* REQUIREMENTS SECTION */}
                    <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-50 rounded-2xl">
                                <FileText className="h-8 w-8 text-[#CC0000]" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#1A1A1A]">Requisitos de Inscripción</h2>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <ul className="space-y-4">
                                {license.requirements.map((req, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <div className="h-2 w-2 rounded-full bg-[#CC0000]" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                </div>

                {/* SIDEBAR - PRICING & ACTION */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-8 border-[#FFD700] sticky top-24">
                        <div className="text-center mb-8">
                            <span className="text-gray-500 font-medium uppercase tracking-widest text-sm">Empieza Hoy</span>
                            <div className="text-4xl font-black text-[#1A1A1A] mt-2 mb-1">
                                {license.pricing.enrollment} <span className="text-lg font-bold text-gray-500">Matrícula</span>
                            </div>
                            <div className="inline-block bg-[#FFD700] px-4 py-1 rounded-full text-xs font-bold text-[#1A1A1A] mb-4">
                                ¡O separa tu cupo con solo $50!
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                <span className="text-gray-600 font-medium">Matrícula</span>
                                <span className="font-bold text-[#003366]">{license.pricing.enrollment} incl. impuestos</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                <span className="text-gray-600 font-medium">Pensiones</span>
                                <span className="font-bold text-[#003366]">Consultar</span>
                            </div>
                        </div>

                        {/* PAYMENT OPTIONS */}
                        {license.paymentOptions && (
                            <div className="mb-8 p-4 bg-green-50 rounded-xl border border-green-100">
                                <h4 className="text-[#003366] font-bold mb-3 flex items-center gap-2">
                                    <Banknote className="h-4 w-4" /> Facilidades de Pago
                                </h4>
                                <ul className="space-y-2">
                                    {license.paymentOptions.map((option, idx) => (
                                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <Link
                            href="/inscripcion"
                            className="block w-full text-center bg-[#CC0000] hover:bg-[#990000] text-white font-bold text-xl py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                        >
                            INSCRIBIRME AHORA
                        </Link>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            *Valores sujetos a cambios según regulaciones vigentes.
                        </p>
                    </div>
                </div>

            </div>

            <Footer />
        </main >
    );
}
