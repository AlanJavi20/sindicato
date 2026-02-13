"use client";

import { useState, useEffect } from "react";
import { getLeads, updateLeadStatus, addLeadComment, Lead } from "@/lib/admin";
import { Navbar } from "@/components/Navbar";
import { Loader2, MessageCircle, Phone, Clock, CheckCircle, XCircle, MessageSquare } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [newComment, setNewComment] = useState("");

    const fetchLeads = async () => {
        setLoading(true);
        const data = await getLeads();
        setLeads(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const handleStatusChange = async (id: string, newStatus: Lead["status"]) => {
        // Optimistic update
        setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));

        const success = await updateLeadStatus(id, newStatus);
        if (!success) {
            // Revert if failed
            fetchLeads();
            alert("Error al actualizar el estado");
        }
    };

    const handleWhatsApp = (lead: Lead) => {
        const message = `Hola ${lead.fullName}, te saludamos del Sindicato de Choferes Profesionales del Guayas. Vimos tu interés en el curso de ${lead.courseInterest}. ¿Tienes alguna consulta?`;
        const url = `https://wa.me/593${lead.phone.substring(1)}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        handleStatusChange(lead.id, "contacted");
    };

    const openCommentModal = (lead: Lead) => {
        setSelectedLead(lead);
        setNewComment(lead.adminComments || "");
        setIsCommentModalOpen(true);
    };

    const saveComment = async () => {
        if (!selectedLead) return;

        // Optimistic update
        setLeads(leads.map(lead => lead.id === selectedLead.id ? { ...lead, adminComments: newComment } : lead));
        setIsCommentModalOpen(false);

        const success = await addLeadComment(selectedLead.id, newComment);
        if (!success) {
            fetchLeads();
            alert("Error al guardar el comentario");
        }
    };

    const statusColors = {
        new: "bg-blue-100 text-blue-800 border-blue-200",
        contacted: "bg-yellow-100 text-yellow-800 border-yellow-200",
        converted: "bg-green-100 text-green-800 border-green-200",
        lost: "bg-gray-100 text-gray-800 border-gray-200",
    };

    const statusLabels = {
        new: "Nuevo",
        contacted: "Contactado",
        converted: "Inscrito",
        lost: "Descartado",
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <main className="container mx-auto px-4 py-8 pt-32">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[#003366]">Gestión de Interesados (Leads)</h1>
                    <button
                        onClick={fetchLeads}
                        className="p-2 text-gray-500 hover:text-[#003366] transition-colors"
                        title="Actualizar lista"
                    >
                        <Loader2 className={`h-6 w-6 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </div>

                {loading && leads.length === 0 ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="h-10 w-10 text-[#003366] animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leads.map((lead) => (
                            <div key={lead.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full">
                                {/* Header del Card */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{lead.fullName}</h3>
                                        <span className="text-xs text-gray-400 flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {lead.createdAt ? formatDistanceToNow(lead.createdAt.toDate(), { addSuffix: true, locale: es }) : 'Reciente'}
                                        </span>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full border font-medium whitespace-nowrap ${statusColors[lead.status] || 'bg-gray-100'}`}>
                                        {statusLabels[lead.status] || lead.status}
                                    </span>
                                </div>

                                {/* Info Principal */}
                                <div className="space-y-3 flex-grow">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Interés</p>
                                        <p className="text-gray-700 font-medium">{lead.courseInterest}</p>
                                    </div>

                                    <div className="space-y-1">
                                        <p className="flex items-center gap-2 text-sm text-gray-600"><Phone className="h-4 w-4 text-gray-400" /> {lead.phone}</p>
                                        <p className="flex items-center gap-2 text-sm text-gray-600 truncate" title={lead.email}>@ {lead.email}</p>
                                    </div>

                                    {lead.comments && (
                                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                            <p className="text-xs text-gray-500 mb-1">Comentario del usuario:</p>
                                            <p className="text-sm text-gray-600 italic">"{lead.comments}"</p>
                                        </div>
                                    )}

                                    {lead.adminComments && (
                                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                                            <p className="text-xs text-yellow-700 mb-1 font-semibold flex items-center gap-1">
                                                <MessageSquare className="h-3 w-3" /> Nota Interna:
                                            </p>
                                            <p className="text-sm text-yellow-800">{lead.adminComments}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Separador */}
                                <div className="my-4 border-t border-gray-100"></div>

                                {/* Acciones */}
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => handleWhatsApp(lead)}
                                            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                                        >
                                            <MessageCircle className="h-4 w-4" />
                                            WhatsApp
                                        </button>
                                        <a
                                            href={`tel:${lead.phone}`}
                                            className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                                        >
                                            <Phone className="h-4 w-4" />
                                            Llamar
                                        </a>
                                    </div>

                                    <button
                                        onClick={() => openCommentModal(lead)}
                                        className="w-full flex items-center justify-center gap-2 text-sm text-[#003366] hover:bg-[#003366]/5 py-2 rounded-lg transition-colors"
                                    >
                                        <MessageSquare className="h-4 w-4" />
                                        {lead.adminComments ? 'Editar Nota' : 'Agregar Nota'}
                                    </button>

                                    <div className="pt-2">
                                        <div className="flex justify-between items-center gap-1 bg-gray-50 p-1.5 rounded-lg">
                                            <button onClick={() => handleStatusChange(lead.id, 'new')} title="Nuevo" className={`p-1.5 rounded-md transition-all ${lead.status === 'new' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:bg-gray-200'}`}><Clock className="h-4 w-4" /></button>
                                            <button onClick={() => handleStatusChange(lead.id, 'contacted')} title="Contactado" className={`p-1.5 rounded-md transition-all ${lead.status === 'contacted' ? 'bg-white shadow-sm text-yellow-600' : 'text-gray-400 hover:bg-gray-200'}`}><MessageCircle className="h-4 w-4" /></button>
                                            <button onClick={() => handleStatusChange(lead.id, 'converted')} title="Inscrito" className={`p-1.5 rounded-md transition-all ${lead.status === 'converted' ? 'bg-white shadow-sm text-green-600' : 'text-gray-400 hover:bg-gray-200'}`}><CheckCircle className="h-4 w-4" /></button>
                                            <button onClick={() => handleStatusChange(lead.id, 'lost')} title="Descartado" className={`p-1.5 rounded-md transition-all ${lead.status === 'lost' ? 'bg-white shadow-sm text-red-600' : 'text-gray-400 hover:bg-gray-200'}`}><XCircle className="h-4 w-4" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Comment Modal */}
            {isCommentModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Nota Interna</h3>
                        <p className="text-sm text-gray-500 mb-4">Escribe comentarios sobre este lead (solo visible para admin).</p>
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent resize-none mb-4"
                            placeholder="Ej: Interesado en horario nocturno, llamar el lunes..."
                            autoFocus
                        />
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setIsCommentModalOpen(false)}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={saveComment}
                                className="px-4 py-2 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#002244]"
                            >
                                Guardar Nota
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
