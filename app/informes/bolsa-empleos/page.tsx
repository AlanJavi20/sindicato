import { Briefcase, Building2, Users, TrendingUp } from "lucide-react";

export default function JobBoardReportPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                    <h2 className="text-3xl font-bold text-[#FFD700] mb-2">Bolsa de Empleo</h2>
                    <p className="text-gray-300">Resumen ejecutivo de colocación laboral y alianzas estratégicas.</p>
                </div>
                <div className="bg-[#FFD700]/10 border border-[#FFD700]/20 px-4 py-1 rounded text-[#FFD700] text-sm font-medium">
                    Actualizado: Enero 2026
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard
                    icon={<Users className="w-6 h-6 text-[#FFD700]" />}
                    title="Choferes Colocados"
                    value="1,245"
                    change="+12% vs año anterior"
                />
                <KpiCard
                    icon={<Building2 className="w-6 h-6 text-[#FFD700]" />}
                    title="Empresas Aliadas"
                    value="85"
                    change="+5 nuevas este mes"
                />
                <KpiCard
                    icon={<Briefcase className="w-6 h-6 text-[#FFD700]" />}
                    title="Ofertas Activas"
                    value="120"
                    change="Transporte Pesado: 60%"
                />
                <KpiCard
                    icon={<TrendingUp className="w-6 h-6 text-[#FFD700]" />}
                    title="Tasa de Empleabilidad"
                    value="92%"
                    change="Egresados 2024"
                />
            </div>

            {/* Charts / Tables Section */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Sector Distribution */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-6">Distribución por Sector</h3>
                    <div className="space-y-4">
                        <ProgressBar label="Transporte Pesado (Tráilers/Camiones)" percentage={45} />
                        <ProgressBar label="Transporte Público (Buses)" percentage={30} />
                        <ProgressBar label="Taxis y Transporte Comercial" percentage={15} />
                        <ProgressBar label="Logística y Distribución" percentage={10} />
                    </div>
                </div>

                {/* Top Companies */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-6">Principales Convenios</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-400 uppercase border-b border-white/10">
                                <tr>
                                    <th className="px-4 py-3">Empresa</th>
                                    <th className="px-4 py-3">Rubro</th>
                                    <th className="px-4 py-3 text-right">Contratados</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { name: "TransLogística S.A.", sector: "Logística", count: 120 },
                                    { name: "Consorcio MetroVia", sector: "Transporte Urbano", count: 85 },
                                    { name: "Cervecería Nacional", sector: "Distribución", count: 45 },
                                    { name: "Transportes Ecuador", sector: "Interprovincial", count: 32 },
                                ].map((company, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors">
                                        <td className="px-4 py-3 font-medium text-white">{company.name}</td>
                                        <td className="px-4 py-3 text-gray-400">{company.sector}</td>
                                        <td className="px-4 py-3 text-right text-[#FFD700]">{company.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Components
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

function ProgressBar({ label, percentage }: { label: string, percentage: number }) {
    return (
        <div>
            <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{label}</span>
                <span className="text-[#FFD700]">{percentage}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}
