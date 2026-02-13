import { db } from "./firebase";
import { collection, query, orderBy, getDocs, doc, updateDoc, Timestamp } from "firebase/firestore";
import { RegistrationData } from "./registration";

export interface Lead extends RegistrationData {
    id: string;
    createdAt: Timestamp;
    status: "new" | "contacted" | "converted" | "lost";
    source: string;
    adminComments?: string; // Internal comments
}

export async function getLeads(): Promise<Lead[]> {
    try {
        const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Lead));
    } catch (error) {
        console.error("Error fetching leads:", error);
        return [];
    }
}

export async function updateLeadStatus(id: string, status: Lead["status"]) {
    try {
        const leadRef = doc(db, "leads", id);
        await updateDoc(leadRef, { status });
        return true;
    } catch (error) {
        console.error("Error updating lead status:", error);
        return false;
    }
}

export async function addLeadComment(id: string, comment: string) {
    try {
        const leadRef = doc(db, "leads", id);
        await updateDoc(leadRef, { adminComments: comment });
        return true;
    } catch (error) {
        console.error("Error adding comment:", error);
        return false;
    }
}
