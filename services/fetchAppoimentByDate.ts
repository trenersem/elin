import { IAppointment } from "@/types";

export const fetchCache = 'force-no-store';

export const fetchAppoimentByDate = async (params: {date: string}): Promise<IAppointment[]> => {
     const response = await fetch(`/api/appointments/${params.date}`, { cache: 'no-store' });
     if (!response.ok) {
        throw new Error('Failed to fetch appointments');
     }
  return response.json();
} 