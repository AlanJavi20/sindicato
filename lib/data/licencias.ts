
export interface LicenseData {
    id: string;
    title: string;
    description: string;
    image: string;
    duration: string;
    mode: string;
    pricing: {
        total: string;
        enrollment: string;
        installments: string;
    };
    paymentOptions?: string[];
    requirements: string[];
    benefits: string[];
    history: {
        graduates: number;
        promotions: number;
        description: string;
    };
}

export const LICENCIAS: Record<string, LicenseData> = {
    "tipo-c": {
        id: "tipo-c",
        title: "LICENCIA TIPO C",
        description: "Para vehículos livianos, taxis y camionetas. La licencia profesional más solicitada.",
        image: "/images/licencia_c.png",
        duration: "6 Meses",
        mode: "Fines de Semana / Nocturno",
        pricing: {
            total: "Consultar Valor",
            enrollment: "$150.00",
            installments: "Facilidades de pago",
        },
        paymentOptions: [
            "Crédito Directo",
            "Tarjeta de Crédito",
            "Separa tu cupo con $50 (Aplican T&C)"
        ],
        requirements: [
            "Copia de cédula y certificado de votación (Color)",
            "Tipo de sangre (Cruz Roja)",
            "Título de bachiller o certificado de haber aprobado 1er año de bachillerato",
            "5 Fotos tamaño carnet (Fondo blanco)",
            "Ser mayor de 18 años",
        ],
        benefits: [
            "Acceso exclusivo al Complejo Deportivo del Sindicato",
            "Descuentos en atención médica (Dispensario Médico)",
            "Simuladores de conducción de última tecnología",
            "Bolsa de empleo para choferes profesionales",
            "Asesoría legal en tránsito gratuita",
        ],
        history: {
            graduates: 15000,
            promotions: 85,
            description: "Nuestra escuela ha formado a más de 85 promociones de conductores profesionales tipo C, garantizando la seguridad en las vías del país.",
        },
    },
    "tipo-d": {
        id: "tipo-d",
        title: "LICENCIA TIPO D",
        description: "Para transporte de pasajeros (intraprovincial, interprovincial) y por cuenta propia. Amplía tus oportunidades laborales.",
        image: "/images/licencia_d.png",
        duration: "7 Meses (Regular) / 3 Meses (Convalidado)",
        mode: "Fines de Semana / Nocturno",
        pricing: {
            total: "Consultar Valor",
            enrollment: "$150.00",
            installments: "Facilidades de pago",
        },
        paymentOptions: [
            "Crédito Directo",
            "Tarjeta de Crédito",
            "Separa tu cupo con $50 (Aplican T&C)"
        ],
        requirements: [
            "Copia de cédula y certificado de votación (Color)",
            "Tipo de sangre (Cruz Roja)",
            "Título de bachiller o certificado de haber aprobado 4to año",
            "Copia de Licencia Tipo B (Mínimo 2 años) - Para Curso Regular",
            "Copia de Licencia Tipo C (Mínimo 2 años) - Para Convalidado",
            "Record Académico y Contenido Programático (Solo Convalidado)",
            "Certificado de Conductor (Generado en ANT)",
            "5 Fotos tamaño carnet (Fondo blanco)",
        ],
        benefits: [
            "Alta demanda laboral en cooperativas de transporte",
            "Capacitación especializada en seguridad de pasajeros",
            "Prácticas en unidades reales",
            "Certificación avalada por la ANT",
        ],
        history: {
            graduates: 3200,
            promotions: 25,
            description: "Formamos conductores responsables para el transporte de pasajeros, priorizando la seguridad y el servicio al cliente.",
        },
    },
    "tipo-e": {
        id: "tipo-e",
        title: "LICENCIA TIPO E",
        description: "Para camiones pesados, tráileres y vehículos extrapesados. Especialízate en transporte de carga.",
        image: "/images/licencia_e.png",
        duration: "9 Meses (Regular) / 5 Meses (Convalidado)",
        mode: "Fines de Semana",
        pricing: {
            total: "Consultar Valor",
            enrollment: "$150.00",
            installments: "Facilidades de pago",
        },
        paymentOptions: [
            "Crédito Directo",
            "Tarjeta de Crédito",
            "Separa tu cupo con $50 (Aplican T&C)"
        ],
        requirements: [
            "Copia de cédula y certificado de votación (Color)",
            "Tipo de sangre (Cruz Roja)",
            "Título de bachiller o certificado de haber aprobado 4to año",
            "Copia de Licencia Tipo B (Mínimo 2 años) - Para Curso Regular",
            "Copia de Licencia Tipo C (Mínimo 2 años) - Para Convalidado",
            "Record Académico y Contenido Programático (Solo Convalidado)",
            "Certificado de Conductor (Generado en ANT)",
            "5 Fotos tamaño carnet (Fondo blanco)",
        ],
        benefits: [
            "Prácticas en cabezales y tráileres reales",
            "Instrucción especializada en mecánica de pesados",
            "Certificación avalada por la ANT",
            "Acceso a todos los beneficios del gremio",
        ],
        history: {
            graduates: 5000,
            promotions: 40,
            description: "Formamos la élite del transporte pesado en el Ecuador. Nuestros graduados operan en las principales empresas logísticas.",
        },
    },
    "recuperacion": {
        id: "recuperacion",
        title: "RECUPERACIÓN DE PUNTOS",
        description: "Recupera los puntos perdidos de tu licencia de conducir a través de nuestro programa de re-educación vial.",
        image: "/images/recuperacion_puntos.png",
        duration: "15 Días",
        mode: "Presencial (Obligatorio/Voluntario)",
        pricing: {
            total: "$60.64",
            enrollment: "$60.64",
            installments: "Pago único",
        },
        paymentOptions: [
            "Pago en Efectivo",
            "Tarjeta de Crédito/Débito"
        ],
        requirements: [
            "Copia de cédula y certificado de votación (Color)",
            "Copia de licencia de conducir",
            "Certificado de conductor (ANT)",
            "Planilla de servicio básico",
            "2 Fotos tamaño carnet (Fondo blanco)",
        ],
        benefits: [
            "Recuperación inmediata de hasta 30 puntos",
            "Horarios flexibles",
            "Material didáctico incluido",
            "Asesoría para evitar futuras infracciones",
        ],
        history: {
            graduates: 8000,
            promotions: 120,
            description: "Hemos ayudado a miles de conductores a volver a las vías con una nueva conciencia de responsabilidad vial.",
        },
    },
};
