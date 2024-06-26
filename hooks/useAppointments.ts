import { getAvailabilityByDate } from "@/services/availability/getAvailabilityByDate";
import { fetchAppoimentByDate } from "@/services/fetchAppoimentByDate";
import { IAppointment, IAvailability, ServiceType } from "@/types";
import { getTime } from "@/utils/getTime";
import { serviceDurations } from "@/utils/serviceUtils";
import { useEffect, useState } from "react";

export const useAppointments = (date: string, service_id?: ServiceType) => {
    const [timeSlot, setTimeSlot] = useState<Array<string>>([]);
    const [alreadyReservedTime, setAlreadyReservedTime] = useState<string[]>([])
    const allTimes = getTime().map(obj => obj.time);

    useEffect(() => {
        if (date) {
            const getAvailableTimes = async () => {
                try {
                    const appointments = await fetchAppoimentByDate({date});
                    const [availabilityTime]:IAvailability[] = await getAvailabilityByDate(date);
                    const durationForCurrentService = service_id ? Math.floor(serviceDurations[service_id] / 30) : 0;


                    appointments.map((item: IAppointment, idx) => {
                        const duration = serviceDurations[item.service_id] / 30;
                        const currentDate = item.appointment_date;
                        const currentTime = item.appointment_time;
                        if(allTimes.includes( item.appointment_time) && date === currentDate) {
                            let appointmentDuration = Math.floor(duration);
                            let startIndex = 0;
                            let difference = 0;
                            if (allTimes.indexOf(currentTime) - durationForCurrentService >= 0 ) {
                                startIndex = allTimes.indexOf(currentTime) - durationForCurrentService
                            } else difference = allTimes.indexOf(currentTime) - durationForCurrentService

                            const totalAmountToRemove = appointmentDuration + Math.abs(durationForCurrentService) + difference;
                            setAlreadyReservedTime(allTimes.slice(startIndex + 1, startIndex + 1 + totalAmountToRemove))
                            allTimes.splice(startIndex + 1 , totalAmountToRemove);
                        }
                    })
                    if (availabilityTime?.blocked_time.length) {
                        setTimeSlot(allTimes.filter((time) => !availabilityTime.blocked_time.includes(time)));
                    } else setTimeSlot(allTimes);

                } catch (error) {
                    console.error('Failed to fetch appointments:', error);
                }
            };
            getAvailableTimes();
        }
    }, [date, service_id]);

    return {timeSlot, allTimes, alreadyReservedTime};
};
