"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { getWhatsAppLink } from "@/lib/constants";

interface CourseCardProps {
    type: string; // "C", "E", "Recuperacion"
    id: string;   // "tipo-c", "tipo-e", "recuperacion"
    title: string;
    pricing?: { // Updated to accept object
        total: string;
        enrollment: string;
        installments: string;
    };
    image: string;
    features: string[];
    popular?: boolean;
}

export function CourseCard({ type, id, title, pricing, image, features, popular }: CourseCardProps) {
    const isConsulting = pricing?.enrollment.toLowerCase() === "consultar";

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
        >
            <Link href={isConsulting ? getWhatsAppLink(`Hola, deseo consultar sobre la matrícula de la ${title}`) : `/licencias/${id}`} className="block h-full" target={isConsulting ? "_blank" : undefined}>
                <Card className="h-full overflow-hidden border-2 bg-white/80 backdrop-blur-md shadow-lg transition-colors hover:border-[#FFD700] hover:shadow-xl relative flex flex-col group cursor-pointer">
                    {popular && (
                        <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-[#FFD700] text-[#1A1A1A] hover:bg-[#FFC000] border-none text-xs font-bold px-3 py-1 shadow-md">
                                MÁS POPULAR
                            </Badge>
                        </div>
                    )}

                    <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute bottom-4 left-4 z-20">
                            <Badge variant="outline" className="text-white border-white/50 backdrop-blur-sm bg-black/20">
                                LICENCIA TIPO {type}
                            </Badge>
                        </div>
                    </div>

                    <CardHeader>
                        <CardTitle className="text-xl font-black italic text-[#1A1A1A] font-sans">
                            {title}
                        </CardTitle>
                        {pricing && (
                            <div className="flex flex-col gap-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm font-medium text-gray-500">Inscríbete con</span>
                                    {isConsulting ? (
                                        <div className="flex items-center gap-2 bg-[#25D366] text-white px-3 py-1 rounded-full shadow-sm hover:bg-[#128C7E] transition-colors w-fit">
                                            <span className="text-lg font-bold">Consultar</span>
                                        </div>
                                    ) : (
                                        <span className="text-3xl font-extrabold text-[#0055A4]">
                                            {pricing.enrollment}
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs font-semibold text-[#FFD700] bg-[#1A1A1A] px-2 py-0.5 rounded-full w-fit">
                                    {pricing.installments}
                                </span>
                            </div>
                        )}
                    </CardHeader>

                    <CardContent className="flex-grow">
                        <ul className="space-y-2">
                            {features.map((f, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-medium">
                                    <Check className="h-4 w-4 text-[#0055A4] mt-1 shrink-0" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                    <CardFooter>
                        <Button className="w-full bg-[#1A1A1A] hover:bg-[#0055A4] text-[#FFD700] hover:text-white font-bold transition-all duration-300">
                            VER DETALLES
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                </Card>
            </Link>
        </motion.div>
    );
}
