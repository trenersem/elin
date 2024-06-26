'use client'

import React from 'react';
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { format } from 'date-fns/format';
import classNames from 'classnames';
import { eachDayOfInterval } from 'date-fns';
import { endOfMonth } from 'date-fns/fp/endOfMonth';
import { endOfWeek } from 'date-fns/fp/endOfWeek';
import { isToday } from 'date-fns/isToday';
import { isSameMonth } from 'date-fns/fp/isSameMonth';
import { isEqual } from 'date-fns/isEqual';
import { parse } from 'date-fns/parse';
import { getDay } from 'date-fns/getDay';
import { add } from 'date-fns/add';
import { startOfWeek } from 'date-fns/startOfWeek';
import { isSameDay } from 'date-fns/isSameDay';
import { IAppointment } from '@/types';
import { convertAppointmentDate } from '@/utils/converteAppointmentDate';

interface ICalendar {
    today: Date,
    selectedDay: Date,
    setSelectedDay: React.Dispatch<React.SetStateAction<Date>>,
    appointments: IAppointment[]
}

const Calendar = ({today, selectedDay, setSelectedDay, appointments}: ICalendar) => {
    const [currentMonth, setCurrentMonth] = React.useState(format(today, 'MMM-yyyy'));
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date().toString());

    let days = eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth))
    });

    const nextMonth = () => {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1});
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }
    const previousMonth = () => {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1});
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

  return (
                <div className='md:pr-14'>
                    <div className='flex items-center'>
                        <h2 className='flex-auto font-semibold text-gray-900'>
                            {format(firstDayCurrentMonth, 'MMM yyyy')}
                        </h2>
                        <button
                            type='button'
                            onClick={previousMonth}
                            className='my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
                        >
                            <span className='sr-only'>Previous month</span>
                            <IconChevronLeft className='w-5 h-5' />
                        </button>
                        <button
                            type='button'
                            onClick={nextMonth}
                            className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
                        >
                            <span className='sr-only'>Next month</span>
                            <IconChevronRight className='w-5 h-5' />
                        </button>
                    </div>

                    <div className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500'>
                        <div>S</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                    </div>

                    <div className='grid grid-cols-7 mt-2 text-sm'>
                        {days.map((day, dayIdx) => (
                            <div
                                key={day.toString()}
                                className={classNames(
                                    dayIdx === 0 && colStartClasses[getDay(day)],
                                    'py-1.5'
                                )}
                            >
                                <button
                                    type='button'
                                    onClick={() => setSelectedDay(day)}
                                    className={classNames(
                                        isEqual(day, selectedDay) && 'text-white',
                                        !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                                        !isEqual(day, selectedDay) &&
                                        !isToday(day) &&
                                        isSameMonth(day,firstDayCurrentMonth) &&
                                        'text-gray-900',
                                        !isEqual(day, selectedDay) &&
                                        !isToday(day) &&
                                        !isSameMonth(day, firstDayCurrentMonth) &&
                                        'text-gray-400',
                                        isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                                        isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                                        !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                        (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                    )}
                                >
                                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                                        {format(day, 'd')}
                                    </time>
                                </button>
                                <div className='w-1 h-1 mx-auto mt-1'>
                                    {appointments.some(appointment => isSameDay(convertAppointmentDate(appointment.appointment_date, appointment.appointment_time), day)
                                    ) && (
                                        <div className='w-1 h-1 rounded-full bg-sky-500'></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
  )
}

export default Calendar

const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]