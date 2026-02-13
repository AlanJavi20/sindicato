import { RegistrationForm } from "@/components/RegistrationForm";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RegistrationPage() {
    return (
        <main className="min-h-screen bg-[#0A1929] text-white font-sans selection:bg-[#FFD700] selection:text-black">
            <Navbar />

            <div className="relative pt-24 pb-12 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#003366] rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-3xl opacity-5 -ml-20 -mb-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 animate-in slide-in-from-bottom-5 fade-in duration-700">
                            <div className="inline-block border border-[#FFD700]/30 rounded-full px-4 py-1.5 text-sm text-[#FFD700] font-medium mb-6 bg-[#FFD700]/5 backdrop-blur-sm">
                                MATRÍCULAS ABIERTAS 2025
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Comienza tu Carrera <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFA500]">
                                    Profesional Aquí
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                Completa el formulario a continuación y da el primer paso para convertirte en un conductor profesional certificado.
                            </p>
                        </div>

                        <RegistrationForm />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
