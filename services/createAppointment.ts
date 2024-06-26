export const createAppointment = async (appointmentData: any) => {
    const response = await fetch('/api/appointments/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
    });
    if (!response.ok) {
        throw new Error('Failed to create appointment');
    }
    return response.json();
};