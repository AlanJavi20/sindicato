import { Heart, HandHeart, Calendar, Users } from "lucide-react";

export default function SocialReportPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                    <h2 className="text-3xl font-bold text-[#FFD700] mb-2">Gestión Social</h2>
                    <p className="text-gray-300">Informe de actividades solidarias y bienestar para el socio.</p>
                </div>
                <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 px-4 py-1 rounded text-[#FFD700] text-sm font-medium">
                    Actualizado: Enero 2026
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard
                    icon={<Heart className="w-6 h-6 text-[#FFD700]" />}
                    title="Ayudas Entregadas"
                    value="450"
                    change="Salud y Medicina"
                />
                <KpiCard
                    icon={<Users className="w-6 h-6 text-[#FFD700]" />}
                    title="Socios Beneficiados"
                    value="2,800"
                    change="Activos y Jubilados"
                />
                <KpiCard
                    icon={<Calendar className="w-6 h-6 text-[#FFD700]" />}
                    title="Eventos Realizados"
                    value="24"
                    change="2 por mes (promedio)"
                />
                <KpiCard
                    icon={<HandHeart className="w-6 h-6 text-[#FFD700]" />}
                    title="Inversión Social"
                    value="$125k"
                    change="Presupuesto 2024"
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Highlight */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#004080] to-[#003366] rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-overlay filter blur-3xl opacity-10 -mr-16 -mt-16"></div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10">Brigadas Médicas Gratuitas</h3>
                    <p className="text-gray-300 mb-6 relative z-10 max-w-xl">
                        Nuestro programa bandera ha llevado atención médica primaria, oftalmología y odontología a los sectores más vulnerables del gremio y sus familias.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 relative z-10">
                        <div className="bg-black/20 rounded-lg p-4">
                            <div className="text-2xl font-bold text-[#FFD700]">12</div>
                            <div className="text-xs text-gray-300">Sectores Visitados</div>
                        </div>
                        <div className="bg-black/20 rounded-lg p-4">
                            <div className="text-2xl font-bold text-[#FFD700]">1,500+</div>
                            <div className="text-xs text-gray-300">Consultas Realizadas</div>
                        </div>
                        <div className="bg-black/20 rounded-lg p-4">
                            <div className="text-2xl font-bold text-[#FFD700]">500</div>
                            <div className="text-xs text-gray-300">Lentes Entregados</div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#FFD700]" />
                        Eventos Recientes
                    </h3>
                    <div className="space-y-6">
                        {[
                            { date: "15 Dic", title: "Agasajo Navideño", desc: "Entrega de juguetes a hijos de socios." },
                            { date: "20 Nov", title: "Campaña de Salud", desc: "Vacunación gratuita contra la gripe." },
                            { date: "02 Nov", title: "Día de los Difuntos", desc: "Misa campal y ofrenda floral." },
                        ].map((event, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-12 text-center">
                                    <span className="block text-xs font-bold text-gray-400 uppercase">{event.date.split(" ")[1]}</span>
                                    <span className="block text-xl font-bold text-[#FFD700]">{event.date.split(" ")[0]}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{event.title}</h4>
                                    <p className="text-xs text-gray-400">{event.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Components (Reused)
function KpiCard({ icon, title, value, change }: { icon: React.ReactNode, title: string, value: string, change: string }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-[#FFD700]/10 rounded-lg">{icon}</div>
                <span className="text-xs text-green-400 font-medium bg-green-900/30 px-2 py-1 rounded">{change}</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-gray-400">{title}</div>
        </div>
    );
}
