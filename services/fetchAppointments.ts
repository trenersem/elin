import { IAppointment } from "@/types";

export const fetchAppointments = async (): Promise<IAppointment[]> => {
  const response = await fetch('/api/appointments');
  if (!response.ok) {
    throw new Error('Failed to fetch appointments');
  }
  return response.json();
};