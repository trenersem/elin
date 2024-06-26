import { IAppointment } from '@/types';
import { convertAppointmentDate } from '@/utils/converteAppointmentDate';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { format } from 'date-fns/format';
import { parseISO } from 'date-fns/fp/parseISO';
import React from 'react'


const AppointmentItem = ({appointment}: {appointment: IAppointment}) => {

    let startDateTime= convertAppointmentDate(appointment.appointment_date, appointment.appointment_time);
    // let endDateTime= parseISO(appointment.endDateTime);
    return (
        <li
             className='flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100'
        >   
            <div className='flex-auto'>
                <p className='text-gray-900'>
                {appointment.first_name}{' '}{appointment.last_name}
                </p>
                <p className='mt-0.5'>
                    <time dateTime={startDateTime}>
                        {format(startDateTime, 'hh:mm a')}
                    </time>
                    {/* {' '}-{' '}
                    <time dateTime={appointment.endDateTime}>
                        {format(endDateTime, 'hh:mm a')}
                    </time> */}
                </p>
                <div className='mt-4 text-[12px]'>
                    <p>{appointment.phone_number}</p>
                    <p>{appointment.email}</p>
                </div>
            </div>

            <div className='flex gap-2'>
                <IconEdit
                    className='cursor-pointer hover:text-green-500'
                />
                <IconTrash 
                    className='cursor-pointer hover:text-red-500'
                />

            </div>

        </li>
    )
}

export default AppointmentItem