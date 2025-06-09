import { NextRequest, NextResponse } from 'next/server';
import Appointment from '@/models/appointments';
import { connectToDB } from '@/utils/database';

// GET: Get all appointments for a specific date
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ date: string }> }
) {
  const { date } = await params;
  await connectToDB();

  const appointmentsByDate = await Appointment.find({
    appointment_date: date,
  });

  return NextResponse.json(appointmentsByDate);
}

// DELETE: Delete appointment by ID (using 'date' as ID in URL)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ date: string }> }
) {
  const { date } = await params;

  try {
    await connectToDB();

    const deletedAppointment = await Appointment.findByIdAndDelete(date);

    if (!deletedAppointment) {
      return new Response('Appointment not found', { status: 404 });
    }

    return new Response('Appointment deleted successfully', { status: 200 });
  } catch (err) {
    console.error('DELETE error:', err);
    return new Response('Failed to delete appointment', { status: 500 });
  }
}

// PATCH: Update appointment by ID (using 'date' as ID in URL)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ date: string }> }
) {
  const { date } = await params;
  const {
    first_name,
    last_name,
    email,
    phone_number,
    service_id,
    appointment_date,
    status,
    notes,
  } = await req.json();

  try {
    await connectToDB();

    const existingAppointment = await Appointment.findById(date);

    if (!existingAppointment) {
      return new Response('Appointment not found', { status: 404 });
    }

    existingAppointment.first_name = first_name;
    existingAppointment.last_name = last_name;
    existingAppointment.email = email;
    existingAppointment.phone_number = phone_number;
    existingAppointment.service_id = service_id;
    existingAppointment.appointment_date = appointment_date;
    existingAppointment.status = status;
    existingAppointment.notes = notes;

    await existingAppointment.save();

    return new Response('Successfully updated the appointment', { status: 200 });
  } catch (error) {
    console.error('PATCH error:', error);
    return new Response('Error updating appointment', { status: 500 });
  }
}