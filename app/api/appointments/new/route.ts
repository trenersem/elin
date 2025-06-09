import { NextRequest, NextResponse } from 'next/server';
import Appointment from '@/models/appointments';
import { IAppointment } from '@/types';
import { connectToDB } from '@/utils/database';

// POST: Create a new appointment
export async function POST(req: NextRequest) {
  try {
    const {
      service_id,
      appointment_date,
      appointment_time,
      notes,
      status,
      first_name,
      last_name,
      email,
      phone_number,
    }: IAppointment = await req.json();

    await connectToDB();

    const newAppointment = new Appointment({
      first_name,
      last_name,
      email,
      phone_number,
      service_id,
      appointment_date,
      appointment_time,
      notes,
      status,
    });

    await newAppointment.save();

    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    console.error('POST appointment error:', error);
    return new Response('Failed to create appointment', { status: 500 });
  }
}