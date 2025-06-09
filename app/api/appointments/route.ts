import { NextRequest, NextResponse } from 'next/server';
import Appointment from '@/models/appointments';
import { connectToDB } from '@/utils/database';

// GET: Fetch all appointments
export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const appointments = await Appointment.find({});

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('GET all appointments error:', error);
    return new Response('Failed to fetch all appointments', { status: 500 });
  }
}