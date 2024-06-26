
export const manageAvailabilityByDate = async (date: string, blockedTime: Partial<any>) => {
    const response = await fetch(`/api/availability/${date}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blockedTime),
    });
    if (!response.ok) {
        throw new Error('Failed to update availability');
    }
};

export const updateAvailabilityByDate = async (id: string, blockedTime: Partial<any> ) => {
    const response = await fetch(`/api/availability/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blockedTime),
    });
    if (!response.ok) {
        throw new Error('Failed to update availability');
    }
}