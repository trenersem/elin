import { IAppointment } from "@/types";

export const fetchCache = 'force-no-store';

export const fetchAppointments = async (): Promise<IAppointment[]> => {
  const response = await fetch('/api/appointments', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch appointments');
  }
  return response.json();
};