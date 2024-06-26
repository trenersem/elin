import { IAppointment } from "@/types";

export const updateAppointment = async (id: string, updatedData: Partial<IAppointment>) => {
    const response = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
        throw new Error('Failed to update appointment');
    }
};
