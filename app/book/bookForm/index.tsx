"use client";
import React, { useEffect, useState } from 'react';
import { IconBrandGmail, IconBrandInstagram, IconPhone } from '@tabler/icons-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { ServiceType } from '@/types';
import { BottomGradient } from '@/components/ui/bottomGradient';
import TimeItem from '@/components/ui/timeItem';
import { LabelInputContainer } from '@/components/ui/labelInputContainer';
import { useAppointments } from '@/hooks/useAppointments';
import { createAppointment } from '@/services/createAppointment';
import SocialButtons from '../socialButtons';
import { useBookService } from '@/hooks/useBookService';

export const BookForm = () => {
    const { bookService} = useBookService();
    const [first_name, setFirstName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone_number, setPhoneNumber] = useState<string>('');
    const [service_id, setServiceId] = useState<ServiceType>(bookService ?? ServiceType.CLASSIC);
    const [appointment_date, setAppointmentDate] = useState<string>('');
    const [status, setStatus] = useState<string>('scheduled');
    const [notes, setNotes] = useState<string>('');
    const [appointment_time, setAppointmentTite] = useState<string>('');
    const {timeSlot} = useAppointments(appointment_date, service_id);
   

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const appointmentData = {
                first_name,
                last_name,
                email,
                phone_number,
                service_id,
                appointment_date,
                appointment_time,
                status,
                notes,
            };
            console.log( first_name,
                last_name,
                email,
                phone_number,
                service_id,
                appointment_date,
                appointment_time,
                status,
                notes,)
            const data = await createAppointment(appointmentData);
            if (data) {
                console.log('Appointment created successfully', data.data);
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setServiceId(ServiceType.CLASSIC);
                setAppointmentDate('');
                setStatus('scheduled');
                setNotes('');
            }
        } catch (error) {
            console.error('Failed to create appointment:', error);
        }
    };

    const handleTimeSelect = (time: string) => {
        setAppointmentTite(time);
    };

    const serviceOptions = Object.values(ServiceType).map((service) => ({
        value: service,
        label: service.charAt(0).toUpperCase() + service.slice(1),
    }));

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Welcome to Aceternity</h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to aceternity if you can because we don&apos;t have a login flow yet
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input
                            id="firstname"
                            placeholder="Tyler"
                            type="text"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input
                            id="lastname"
                            placeholder="Durden"
                            type="text"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="text">Phone</Label>
                    <Input
                        id="phone"
                        placeholder="+1..."
                        type="text"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="text">Service</Label>
                    <Select
                        options={serviceOptions}
                        value={service_id}
                        onChange={(e) => setServiceId(e.target.value as ServiceType)}
                        required
                    />
                </LabelInputContainer>
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
                    {appointment_date && timeSlot.map((time) => (
                        <TimeItem
                            key={time}
                            time={time}
                            selectedTime={appointment_time ? appointment_time === time : false}
                            handleTimeSelect={handleTimeSelect}
                        />
                    ))}
                </div>
                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Make an appointment
                    <BottomGradient />
                </button>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                <SocialButtons />

            </form>
        </div>
    );
};
