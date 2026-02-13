
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, BookOpen, Shield, GraduationCap, Users } from "lucide-react";

export default function Nosotros() {
    const instructors = [
        {
            name: "Pablo Caicedo",
            role: "Instructor de Conducción",
            experience: "41 años de experiencia",
            description: "Considera que para ser conductor profesional hay que tener la vocación de servir. Le apasiona la enseñanza y valora profundamente que cada estudiante es como un libro del cual siempre aprende algo nuevo.",
            tags: ["Paciencia", "Vocación de Servicio", "Enseñanza"],
            icon: BookOpen,
            image: "/images/instructor_pablo.png"
        },
        {
            name: "Manuel Wilches",
            role: "Instructor de Conducción",
            experience: "40 años de experiencia",
            description: "Ha dedicado su vida al volante y disfruta plenamente de su profesión. Siente que el mejor legado que ha podido dar es la educación de sus hijos. Se define con la palabra lealtad.",
            tags: ["Lealtad", "Experiencia", "Pasión"],
            icon: Shield,
            image: "/images/instructor_manuel.png"
        }
    ];

    const directors = [
        {
            name: "Director Administrativo",
            role: "Dirección Administrativa",
            description: "Encargado de la gestión eficiente y transparente de los recursos institucionales, asegurando el cumplimiento de los objetivos estratégicos del Sindicato.",
            image: "/images/team/placeholder.png"
        },
        {
            name: "Directora Pedagógica",
            role: "Dirección Pedagógica",
            description: "Responsable de la excelencia académica y la innovación educativa, garantizando que nuestros programas de formación cumplan con los más altos estándares.",
            image: "/images/team/placeholder.png"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col font-sans bg-gray-50">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative bg-[#003366] text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-[#003366]/40" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge className="mb-4 bg-[#FFD700] text-[#1A1A1A] hover:bg-[#FFC000] border-none px-4 py-1 text-sm font-bold">
                        NUESTRA INSTITUCIÓN
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Conoce a Nuestro <span className="text-[#FFD700] italic">Equipo</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Un grupo de profesionales dedicados a formar a la próxima generación de conductores líderes del Ecuador.
                    </p>
                </div>
            </section>

            {/* INSTRUCTORS SECTION */}
            <section className="py-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">NUESTROS INSTRUCTORES</h2>
                    <div className="h-1.5 w-24 bg-[#FFD700] mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Docentes con décadas de experiencia que combinan la práctica con valores fundamentales.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {instructors.map((instructor, idx) => (
                        <Card key={idx} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="bg-white p-8 h-full flex flex-col items-center text-center relative">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#003366] to-[#0055A4]" />

                                {/* Photo Placeholder Wrapper */}
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 rounded-full border-4 border-[#FFD700] shadow-lg overflow-hidden relative bg-gray-100">
                                        <Image
                                            src={instructor.image}
                                            alt={instructor.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-3 -right-3 bg-[#003366] text-white p-2 rounded-full shadow-md">
                                        <instructor.icon className="w-5 h-5" />
                                    </div>
                                </div>

                                <Badge variant="secondary" className="mb-3 bg-blue-50 text-[#003366] hover:bg-blue-100">
                                    <Clock className="w-3 h-3 mr-1" /> {instructor.experience}
                                </Badge>

                                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">{instructor.name}</h3>
                                <p className="text-[#CC0000] font-bold text-sm uppercase tracking-wide mb-4">{instructor.role}</p>

                                <p className="text-gray-600 mb-6 flex-grow italic">
                                    &ldquo;{instructor.description}&rdquo;
                                </p>

                                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                                    {instructor.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* DIRECTORS SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">AUTORIDADES</h2>
                        <div className="h-1.5 w-24 bg-[#CC0000] mx-auto rounded-full mb-6" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {directors.map((director, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="shrink-0 relative w-28 h-28 md:w-36 md:h-36">
                                    <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner">
                                        <Image
                                            src={director.image}
                                            alt={director.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-[#1A1A1A]">{director.name}</h3>
                                    <p className="text-[#003366] font-medium mb-3">{director.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {director.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FACILITIES SECTION */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">NUESTRAS INSTALACIONES</h2>
                        <div className="h-1.5 w-24 bg-[#003366] mx-auto rounded-full mb-6" />
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Espacios modernos y equipados diseñados para potenciar el aprendizaje teórico y práctico.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "/images/aulas_foto_uno.png",
                            "/images/aulas_foto_dos.png",
                            "/images/aulas_foto_tres.png",
                            "/images/aulas_foto_cuatro.png"
                        ].map((img, idx) => (
                            <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                                <Image
                                    src={img}
                                    alt={`Instalaciones Sindicato Foto ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
