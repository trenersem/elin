'use client'

import TimeItem from '@/components/ui/timeItem';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LabelInputContainer } from '@/components/ui/labelInputContainer';
import React, { useEffect, useState } from 'react'
import { useAppointments } from '@/hooks/useAppointments';
import { manageAvailabilityByDate, updateAvailabilityByDate } from '@/services/availability/manageAvailabilityByDate';
import { getAvailabilityByDate } from '@/services/availability/getAvailabilityByDate';
import { IAvailability } from '@/types';
import { fetchAppoimentByDate } from '@/services/fetchAppoimentByDate';

const Time = () => {
    const [appointment_date, setAppointmentDate] = useState<string>('');
    const [block_time, setBlockTime] = useState<string[]>([]);
    const [alreadyExistBlocked, setAlreadyExistBlocked] = useState<Partial<IAvailability>>({});
    const [selectAll, setSelectAll] = useState<boolean>(false);

    const {allTimes, alreadyReservedTime} = useAppointments(appointment_date);


    const handleTimeSelect = (time: string) => {
        setBlockTime((prev: string[]) => 
            prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
        );
    };
    const handleSelectAll = () => {
        if (selectAll) {
            setBlockTime([]);
        } else {
            setBlockTime(allTimes);
        }
        setSelectAll(!selectAll);
    };

    const onClickSave = async () => {
        try {
            if (alreadyExistBlocked && alreadyExistBlocked._id) {
                await updateAvailabilityByDate(alreadyExistBlocked._id, { blocked_time: block_time });
            } else {
                await manageAvailabilityByDate(appointment_date, { blocked_time: block_time });
            }
        } catch (error) {
            console.error('Failed to update availability:', error);
        }
    };


    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const data = await getAvailabilityByDate(appointment_date);
                
                if (data && data.length > 0) {
                    setBlockTime(data[0].blocked_time);
                    setAlreadyExistBlocked(data[0]);
                } else {
                    setBlockTime([]);
                    setAlreadyExistBlocked({});
                }
            } catch (err) {
                console.log(err);
            }
        };
        if (appointment_date) {
            fetchData();
        }
    }, [appointment_date]);


    useEffect(() => {
        if (alreadyReservedTime.length > 1) {
              setBlockTime((prev) => [...prev, ...alreadyReservedTime]);
        }

    }, [alreadyReservedTime])

  return (
    <div className="min-h-full p-10">
      <h2 className="py-5 text-xl font-bold">Manage your time</h2>

      <div>
        <div>Choose a date </div>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="text">Time</Label>
                <Input
                    id="date"
                    placeholder="+1..."
                    type="date"
                    value={appointment_date}
                    onChange={(e) => {
                        setAppointmentDate(e.target.value);
                    }}
                />
                </LabelInputContainer>
                <div className="flex flex-wrap items-center justify-start gap-y-2 gap-x-4">
                    {appointment_date && allTimes.map((time: string) => (
                        <TimeItem
                            key={time}
                            time={time}
                            selectedTime={block_time.includes(time)}
                            handleTimeSelect={handleTimeSelect}
                        />
                    ))}
                </div>
                <div className='flex gap-5'>

                    <button onClick={handleSelectAll}>
                    {selectAll ? "Deselect All" : "Select All"}
                    </button>

                    <button onClick={onClickSave}>
                    Save
                    </button>
                </div>
            </div>
      
    </div>
  )
}

export default Time