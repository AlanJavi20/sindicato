import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ReportsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0A1929] text-white flex flex-col font-sans selection:bg-[#FFD700] selection:text-black">
            <Navbar />

            {/* Reports Header */}
            <div className="mt-20 py-8 bg-[#003366] border-b border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                INFORME DE GESTIÓN
                            </h1>
                            <p className="text-gray-400 text-sm">
                                Sindicato de Choferes Profesionales del Guayas
                            </p>
                        </div>
                        <div className="text-right hidden md:block">
                            <span className="block text-[#FFD700] font-bold text-lg">2024 - 2025</span>
                            <span className="text-gray-400 text-xs">Periodo Administrativo</span>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            <Footer />
        </div>
    );
}
