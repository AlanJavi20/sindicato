export interface RegistrationData {
    fullName: string;
    email: string;
    phone: string;
    courseInterest: string; // 'Licencia C', 'Licencia D', 'Licencia E', 'Recuperacion'
    comments?: string;
}

export interface RegistrationResult {
    success: boolean;
    message: string;
    registrationId?: string;
}

import { db } from "./firebase";
import { collection, addDoc, serverTimestamp, DocumentReference } from "firebase/firestore";

export async function registerStudent(data: RegistrationData): Promise<RegistrationResult> {
    try {
        // Validation check
        if (!data.fullName || !data.email || !data.phone) {
            return {
                success: false,
                message: "Por favor complete todos los campos obligatorios.",
            };
        }

        // Save to "leads" collection
        // Create a timeout promise to prevent hanging if Firestore is unreachable/not created
        const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("Tiempo de espera agotado. Verifique su conexión o si la base de datos está creada en Firebase Console.")), 15000)
        );

        const docRef = await Promise.race([
            addDoc(collection(db, "leads"), {
                ...data,
                createdAt: serverTimestamp(),
                status: "new", // Track lead status
                source: "website_form"
            }),
            timeoutPromise
        ]) as DocumentReference;

        return {
            success: true,
            message: "Inscripción recibida correctamente. Nos contactaremos pronto.",
            registrationId: docRef.id,
        };
    } catch (error) {
        console.error("Error saving to Firebase:", error);
        return {
            success: false,
            message: "Error al guardar los datos. Intente nuevamente.",
        };
    }
}
