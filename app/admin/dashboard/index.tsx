'use client';

import React, { useEffect, useState } from 'react';
import { getAppointments } from '@/services/getAppointments';
import { IAppointment } from '@/types';
import AppointmentTable from './AppointmentTable';
import Calendar from '@/components/calendar';
import { startOfToday } from 'date-fns/startOfToday';
import { isSameDay } from 'date-fns/fp/isSameDay';
import { parseISO } from 'date-fns/parseISO';
import AppointmetsList from './components/AppointmetsList';
import { format } from 'date-fns/format';
import { toDate } from 'date-fns/toDate';
import { convertAppointmentDate } from '@/utils/converteAppointmentDate';
import { useRouter } from 'next/navigation';

export 
const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  //const [selectedDateAppointmets, setSelectedDateAppointmets] =  useState<IAppointment[]>([]);
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = React.useState(today);

  const selectedDateAppointmets = appointments.filter((appointment) => isSameDay(convertAppointmentDate(appointment.appointment_date, appointment.appointment_time), selectedDay)).sort((a, b) => {
        const dateA = convertAppointmentDate(a.appointment_date, a.appointment_time);
        const dateB = convertAppointmentDate(b.appointment_date, b.appointment_time);
        return new Date(dateA).getTime() - new Date(dateB).getTime();
    });

  const router = useRouter();

  const test = () => router.refresh()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };
    router.refresh()
    getData();
  }, []);
  
  return (
        <div className='pt-16 bg-white min-h-[100vh]'>
            <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
                <div className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'>
                    <Calendar
                        today={today}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        appointments={appointments}
                    />
                    <AppointmetsList
                        selectedDay={selectedDay}
                        selectedDateAppointmets={selectedDateAppointmets}
                    />
                </div>
            </div>
            <button onClick={test} className='bg-green' type='button'> TESt</button>
        </div>
  );
};

export default Dashboard;