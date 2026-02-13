import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { LICENCIAS } from "@/lib/data/licencias";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      {/* HERO SECTION - COMMERCIAL (Hazte Pro) */}
      <section className="relative bg-[#1A1A1A] text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-[#003366]/40" />

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] font-bold px-4 py-1.5 rounded-full text-sm shadow-[0_0_15px_rgba(255,215,0,0.5)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
              </span>
              MATRÍCULAS ABIERTAS 2025
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold italic leading-normal tracking-tight py-2">
              HAZTE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFA500]">PRO</span>
              <br />
              <span className="text-2xl md:text-5xl text-white not-italic font-bold tracking-normal">AL MÁS ALTO NIVEL</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              La nueva generación de conductores profesionales se forma con tecnología de punta y el respaldo histórico del Sindicato de Choferes del Guayas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/inscripcion"
                className="group relative px-8 py-4 bg-[#FFD700] text-[#1A1A1A] font-bold text-lg rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_35px_rgba(255,215,0,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">INSCRIBIRME AHORA</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              <Link href="#cursos">
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-7 rounded-xl font-bold backdrop-blur-sm transition-all">
                  VER CURSOS
                </Button>
              </Link>
            </div>
          </div>
          {/* Hero Image / Graphic */}
          <div className="hidden lg:block relative h-[600px] animate-in fade-in zoom-in duration-1000 delay-300">
            {/* Decorative Elements */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0055A4]/30 to-[#003366]/30 rounded-full blur-3xl" />

            <div className="relative z-10 w-full h-full flex items-center justify-center border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl p-2 animate-float overflow-hidden">
              <Image
                src="/images/graduados_uno.png"
                alt="Estudiante en Simulador de Alta Tecnología"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold italic text-white">Simuladores 2025</h3>
                <p className="text-gray-300 text-sm">Entrenamiento inmersivo de última generación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURSOS SECTION - BENTO GRID */}
      <section id="cursos" className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] italic">TU FUTURO EMPIEZA AQUÍ</h2>
            <div className="h-1.5 w-24 bg-[#FFD700] mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Programas diseñados para insertarte rápidamente en el mercado laboral con la mejor capacitación técnica del país.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {/* Course 1: Tipo C */}
            <div className="md:col-span-1 h-[520px]">
              <CourseCard
                type="C"
                id="tipo-c"
                title="LICENCIA TIPO C"
                pricing={LICENCIAS["tipo-c"].pricing}
                image={LICENCIAS["tipo-c"].image}
                features={["Vehículos Livianos", "Taxis y Camionetas", "Clases Prácticas 100% Reales", "Horarios Intensivos"]}
                popular={true}
              />
            </div>

            {/* Course 2: Tipo D (NEW) */}
            <div className="md:col-span-1 h-[520px]">
              <CourseCard
                type="D"
                id="tipo-d"
                title="LICENCIA TIPO D"
                pricing={LICENCIAS["tipo-d"].pricing}
                image={LICENCIAS["tipo-d"].image}
                features={["Transporte de Pasajeros", "Intra/Interprovincial", "Seguridad Vial Avanzada", "Alta Demanda Laboral"]}
              />
            </div>

            {/* Course 3: Tipo E */}
            <div className="md:col-span-1 h-[520px]">
              <CourseCard
                type="E"
                id="tipo-e"
                title="LICENCIA TIPO E"
                pricing={LICENCIAS["tipo-e"].pricing}
                image={LICENCIAS["tipo-e"].image}
                features={["Camiones Pesados & Tráileres", "Mecánica Avanzada", "Conducción Defensiva", "Prácticas en Cabezales"]}
              />
            </div>

            {/* Course 4: Recuperación */}
            <div className="md:col-span-1 h-[520px]">
              <CourseCard
                type="Recuperacion"
                id="recuperacion"
                title="RECUPERACIÓN"
                pricing={LICENCIAS["recuperacion"].pricing}
                image={LICENCIAS["recuperacion"].image}
                features={["Recupera hasta 30 Puntos", "Modalidad 100% Presencial", "Asesoría Legal Incluida", "Horarios Flexibles"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION - INSTITUTIONAL */}
      <section className="py-24 bg-[#003366] text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block border border-white/30 rounded-full px-4 py-1 text-sm text-gray-300">
                FUNDADO EN 1935
              </div>
              <h2 className="text-4xl font-bold font-sans leading-tight">
                Respaldo Institucional y <span className="text-[#FFD700]">Transparencia</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                El Sindicato de Choferes Profesionales del Guayas es una institución con décadas de trayectoria, garantizando procesos transparentes y formación de calidad certificada por la Agencia Nacional de Tránsito.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="block text-4xl font-bold text-[#FFD700] mb-2">+50</span>
                  <span className="text-sm text-gray-300 font-medium">Años de Historia al servicio del conductor.</span>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="block text-4xl font-bold text-[#FFD700] mb-2">10k+</span>
                  <span className="text-sm text-gray-300 font-medium">Graduados Exitosos en el mercado laboral.</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-[#FFD700] h-6 w-6" />
                Compromiso Ético
              </h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start gap-4 group">
                  <div className="h-2 w-2 rounded-full bg-[#CC0000] mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-base">Gestión administrativa transparente con auditorías permanentes y rendición de cuentas pública.</p>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="h-2 w-2 rounded-full bg-[#CC0000] mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-base">Acceso irrestricto a la información financiera y administrativa mediante el portal LOTAIP.</p>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="h-2 w-2 rounded-full bg-[#CC0000] mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-base">Re-inversión constante de fondos en la renovación de la flota vehicular y simuladores modernos.</p>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
                <Button variant="link" className="text-white hover:text-[#FFD700] transition-colors">
                  Ver Informes de Gestión &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL IMPACT PROMO */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#1A1A1A] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
            {/* Background Image Effect */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-700">
              <Image
                src="/images/sindicato/colegios.png"
                alt="Educación Vial"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

            <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
              <Badge className="bg-[#FFD700] text-[#1A1A1A] hover:bg-[#FFC000] border-none px-6 py-2 text-sm font-bold tracking-widest uppercase mb-4">
                Compromiso Social
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tight leading-tight">
                EDUCANDO MÁS ALLÁ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">DE LAS AULAS</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Desde capacitaciones en colegios hasta cooperación con la Policía Nacional. Descubre cómo el Sindicato contribuye activamente a la seguridad vial de la comunidad.
              </p>
              <div className="pt-4">
                <Link href="/sindicato">
                  <Button className="bg-[#CC0000] hover:bg-[#990000] text-white px-10 py-8 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                    CONOCE NUESTRA GESTIÓN
                    <ChevronRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main >
  );
}
