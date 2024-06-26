export const deleteAppointment = async (date: string): Promise<void> => {
    const response = await fetch(`/api/appointments/${date}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete appointment');
    }
};