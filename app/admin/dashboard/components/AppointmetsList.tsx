import React from 'react';
import { format } from 'date-fns/format';
import AppointmentItem from './AppointmentItem';
import { IAppointment } from '@/types';

interface IAppointmetsList {
    selectedDay: Date,
    selectedDateAppointmets: IAppointment[],
}

const AppointmetsList = ({selectedDay, selectedDateAppointmets}: IAppointmetsList) => {
  return (
        <section className='mt-12 md:mt-0 md:pl-14'>
            <h2 className='font-semibold text-gray-900'>
                Schedule for <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyy')}</time>
            </h2>
            <ol className='mt-4 space-y-1 text-sm leading-6 text-gray-500'>
                {selectedDateAppointmets.length > 0 ? (
                    selectedDateAppointmets.map((appointment) => (
                    <AppointmentItem  appointment={appointment}   key={appointment._id}/>
                ))
                ) : (
                    <p>No appointments for today</p>
                )}

            </ol>
    </section>
  )
}

export default AppointmetsList