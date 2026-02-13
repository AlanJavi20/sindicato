
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Building2, Handshake, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function SindicatoPage() {
    const activities = [
        {
            title: "Educación Vial en Colegios",
            description: "Capacitamos a las nuevas generaciones sobre la importancia de la seguridad vial, normas de tránsito y responsabilidad al volante.",
            image: "/images/sindicato/colegios.png",
            icon: GraduationCap,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Cooperación Interinstitucional",
            description: "Trabajamos en conjunto con la Policía Nacional y la CTE brindando capacitaciones especializadas y apoyo logístico.",
            images: [
                "/images/capacitacion_policia_uno.png",
                "/images/capacitacion_policia_dos.png",
                "/images/capacitacion_policia_tres.png",
                "/images/capacitacion_policia_cuatro.png",
                "/images/capacitacion_policia_cinco.png",
                "/images/capacitacion_policia_seis.png",
                "/images/capacitacion_policia_siete.png",
                "/images/capacitacion_policia_ocho.png"
            ],
            image: "/images/sindicato/policia.png",
            icon: ShieldCheck,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Vida Sindical y Democracia",
            description: "Realizamos asambleas periódicas para garantizar la transparencia, participación de los socios y toma de decisiones colectivas.",
            images: [
                "/images/sindicato/vida_sindical_uno.jpg",
                "/images/sindicato/vida_sindical_dos.jpg",
                "/images/sindicato/vida_sindical_tres.jpg",
                "/images/sindicato/vida_sindical_cuatro.jpg",
                "/images/sindicato/vida_sindical_cinco.jpg",
                "/images/sindicato/vida_sindical_seis.jpg"
            ],
            image: "/images/sindicato/asamblea.png",
            icon: Users,
            color: "text-red-600",
            bg: "bg-red-50"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col font-sans bg-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/sindicato/hero.png"
                        alt="Sindicato de Choferes Profesionales del Guayas"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white space-y-6">
                    <Badge className="bg-[#FFD700] text-[#1A1A1A] hover:bg-[#FFC000] border-none px-4 py-1.5 text-sm font-bold tracking-wider">
                        GESTIÓN INSTITUCIONAL
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tight">
                        MÁS QUE UNA ESCUELA, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">UN GREMIO COMPROMETIDO</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Impulsamos el desarrollo profesional, la seguridad vial y el bienestar social de nuestros socios y la comunidad.
                    </p>
                </div>
            </section>

            {/* MISION / VISION / VALORES */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                        <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Building2 className="h-8 w-8 text-[#003366]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Nuestra Misión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Defender los derechos de los choferes profesionales y promover su capacitación continua para un servicio de excelencia.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                        <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Handshake className="h-8 w-8 text-[#CC0000]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Nuestra Visión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ser el referente nacional en formación vial y gremialismo, liderando con integridad y responsabilidad social.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                        <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            <Users className="h-8 w-8 text-[#FFD700]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Nuestros Valores</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Honestidad, Solidaridad, Disciplina y Compromiso con el desarrollo del país.
                        </p>
                    </div>
                </div>
            </section>

            {/* ACTIVIDADES / GESTIÓN SOCIAL */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] italic mb-4">NUESTRA GESTIÓN</h2>
                        <div className="h-1.5 w-24 bg-[#CC0000] mx-auto rounded-full mb-6" />
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Acciones concretas que impactan positivamente en la sociedad y fortalecen a nuestro gremio.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {activities.map((activity, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>

                                {/* Image Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative h-80 lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl skew-y-1 lg:skew-y-2 hover:skew-y-0 transition-transform duration-700">
                                        {activity.images ? (
                                            <ImageCarousel images={activity.images} autoPlayInterval={4000} />
                                        ) : (
                                            <>
                                                <Image
                                                    src={activity.image}
                                                    alt={activity.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className={`inline-flex items-center gap-2 ${activity.bg} px-4 py-2 rounded-full`}>
                                        <activity.icon className={`h-5 w-5 ${activity.color}`} />
                                        <span className={`font-bold text-sm uppercase tracking-wide ${activity.color}`}>Impacto Social</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">{activity.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
