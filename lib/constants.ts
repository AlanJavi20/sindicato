export const CONTACT_INFO = {
    whatsapp: "593982737534", // Format for API
    whatsappDisplay: "+593 98 273 7534",
    phone: "099 999 9999", // Placeholder until verified
    email: "info@sindicato.ec"
};

export const getWhatsAppLink = (message: string) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
};
