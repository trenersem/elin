import { IAppointment } from "@/types";

export const fetchAppointments = async (): Promise<IAppointment[]> => {
  const response = await fetch('/api/appointments', { 
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch appointments');
  }
  return response.json();
};