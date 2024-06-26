export const getAvailabilityByDate = async (date: string): Promise<any> => {
     const response = await fetch(`/api/availability/${date}`);
     if (!response.ok) {
        throw new Error('Failed to fetch appointments');
     }
  return response.json();
}