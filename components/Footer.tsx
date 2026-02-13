import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-[#003366] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="font-bold text-xl mb-4 font-sans">Sindicato de Choferes del Guayas</h3>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                        Líderes en formación profesional de conductores. Comprometidos con la excelencia, la seguridad vial y el bienestar de nuestros socios.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4 text-[#FFD700]">Contacto Oficial</h3>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-[#FFD700] shrink-0 mt-0.5" />
                            <span>Gomez Rendón 525 y Noguchi, Guayaquil, Ecuador.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-[#FFD700] shrink-0 mt-0.5" />
                            <div className="flex flex-col">
                                <span>Lun - Vie: 09:00 - 17:00</span>
                                <span>Sáb: 09:00 - 14:00</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-[#FFD700] shrink-0" />
                            <a href={`tel:${CONTACT_INFO.whatsapp}`} className="hover:text-white transition-colors">
                                {CONTACT_INFO.whatsappDisplay}
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-[#FFD700] shrink-0" />
                            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                                {CONTACT_INFO.email}
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-lg mb-2 text-[#FFD700]">Transparencia</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/informes/bolsa-empleos" className="text-gray-300 hover:text-white hover:underline transition-all">Bolsa de Empleos</Link></li>
                        <li><Link href="/informes/social" className="text-gray-300 hover:text-white hover:underline transition-all">Informe de Gestión Social</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-white hover:underline transition-all">Rendición de Cuentas</Link></li>
                        <li><Link href="#" className="text-gray-300 hover:text-white hover:underline transition-all">LOTAIP</Link></li>
                    </ul>

                    <div className="mt-4 p-4 border border-white/20 rounded-lg text-center bg-white/5 backdrop-blur-sm">
                        <span className="block font-bold text-[#FFD700] tracking-wider">CERTIFICADO</span>
                        <span className="text-xs text-gray-400">Escuela de Conducción Aprobada por ANT</span>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 pt-8 border-t border-white/10">
                &copy; {new Date().getFullYear()} Sindicato de Choferes Profesionales del Guayas. Desarrollo Web: TechMate.
            </div>
        </footer >
    );
}
