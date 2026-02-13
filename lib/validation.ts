export type TitleValidationResult = {
    isValid: boolean;
    data?: {
        nombre: string;
        cedula: string;
        titulo: string;
        fechaEmision: string;
        institucion: string;
        codigoRegistro: string;
    };
    error?: string;
};

// SIMULACIÓN DE CONEXIÓN A BASE DE DATOS
// TODO: Reemplazar esto con la llamada real a Firebase
export async function validateTitle(code: string): Promise<TitleValidationResult> {
    // Simular retardo de red
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simulación: Códigos válidos
    const MOCK_DB: Record<string, TitleValidationResult['data']> = {
        'AB-12345': {
            nombre: 'JUAN PÉREZ ALCÁZAR',
            cedula: '0912345678',
            titulo: 'CHOFER PROFESIONAL TIPO C',
            fechaEmision: '15 de Enero, 2024',
            institucion: 'Sindicato de Choferes Profesionales del Guayas',
            codigoRegistro: 'MSG-2024-001',
        },
        'PRO-2025': {
            nombre: 'MARÍA FERNANDA LÓPEZ',
            cedula: '0987654321',
            titulo: 'CHOFER PROFESIONAL TIPO E',
            fechaEmision: '20 de Diciembre, 2024',
            institucion: 'Sindicato de Choferes Profesionales del Guayas',
            codigoRegistro: 'MSG-2024-099',
        },
    };

    const codeUpper = code.toUpperCase().trim();

    if (MOCK_DB[codeUpper]) {
        return {
            isValid: true,
            data: MOCK_DB[codeUpper],
        };
    }

    return {
        isValid: false,
        error: 'El código ingresado no existe o no corresponde a un documento válido.',
    };
}
