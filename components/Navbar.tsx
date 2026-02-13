"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, GraduationCap, Menu, X } from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-12 w-12 shrink-0">
                        <Image
                            src="/images/logo_sindicato.png"
                            alt="Logo Sindicato"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-[#003366] text-lg leading-none group-hover:text-[#CC0000] transition-colors">SINDICATO DE CHOFERES</span>
                        <span className="text-xs text-gray-500 font-medium tracking-wide">PROFESIONALES DEL GUAYAS</span>
                    </div>
                </Link>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link href="/sindicato" className="text-sm font-bold text-gray-500 hover:text-[#003366] transition-colors uppercase tracking-wider">
                        Sindicato
                    </Link>
                    <Link href="/nosotros" className="text-sm font-bold text-gray-500 hover:text-[#003366] transition-colors uppercase tracking-wider">
                        Nosotros
                    </Link>
                    <Link href="/transparencia" className="text-sm font-bold text-gray-500 hover:text-[#003366] transition-colors uppercase tracking-wider">
                        Validar Título
                    </Link>

                    <Button variant="ghost" className="text-[#003366] font-bold hover:text-[#CC0000] hover:bg-gray-50" asChild>
                        <a href={getWhatsAppLink("Hola, necesito atención al socio.")} target="_blank" rel="noopener noreferrer">
                            <Phone className="mr-2 h-4 w-4" />
                            Atención al Socio
                        </a>
                    </Button>

                    <Button asChild className="bg-[#FFD700] hover:bg-[#FFC000] text-[#1A1A1A] font-black italic shadow-md hover:shadow-lg transition-all rounded-full px-6 py-5">
                        <a href="https://www.evisip-guayas.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <GraduationCap className="mr-2 h-5 w-5" />
                            CAMPUS VIRTUAL
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-600 hover:text-[#003366] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
                    <Link
                        href="/sindicato"
                        className="text-lg font-bold text-gray-700 hover:text-[#003366] py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Sindicato
                    </Link>
                    <Link
                        href="/nosotros"
                        className="text-lg font-bold text-gray-700 hover:text-[#003366] py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Nosotros
                    </Link>
                    <Link
                        href="/transparencia"
                        className="text-lg font-bold text-gray-700 hover:text-[#003366] py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Validar Título
                    </Link>

                    <a
                        href={getWhatsAppLink("Hola, necesito atención al socio.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-lg font-bold text-[#003366] py-2 border-b border-gray-100"
                    >
                        <Phone className="mr-3 h-5 w-5" />
                        Atención al Socio
                    </a>

                    <a
                        href="https://www.evisip-guayas.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-[#FFD700] text-[#1A1A1A] font-black italic py-4 rounded-xl mt-2"
                    >
                        <GraduationCap className="mr-2 h-6 w-6" />
                        CAMPUS VIRTUAL
                    </a>
                </div>
            )}
        </nav>
    );
}
