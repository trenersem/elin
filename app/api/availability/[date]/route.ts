import { NextRequest, NextResponse } from 'next/server';
import Availability from '@/models/availability';
import { connectToDB } from '@/utils/database';

// GET: Get availability by date
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ date: string }> }
) {
  const { date } = await params;  // 👈 await

  try {
    await connectToDB();
    const availabilityByDate = await Availability.find({ date });
    return NextResponse.json(availabilityByDate);
  } catch (err) {
    console.error('GET error:', err);
    return new Response('Failed to fetch availabilityByDate', { status: 500 });
  }
}

// PUT: Create availability for the date
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ date: string }> }
) {
  const { blocked_time } = await req.json();
  const { date } = await params;

  try {
    await connectToDB();

    const availability = new Availability({
      date: date,
      blocked_time,
    });

    await availability.save();

    return new Response('Successfully blocked the time', { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return new Response('Error to block the time', { status: 500 });
  }
}

// PATCH: Update blocked_time for the availability by ID (date = _id)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ date: string }>  }
) {
  const { blocked_time } = await req.json();
  const date = await params;

  try {
    await connectToDB();

    const existingAvailability = await Availability.findById(date);

    if (!existingAvailability) {
      return new Response('Availability not found', {
        status: 404,
      });
    }

    existingAvailability.blocked_time = blocked_time;
    await existingAvailability.save();

    return new Response('Successfully updated blocked time!', {
      status: 200,
    });
  } catch (err) {
    console.error('PATCH error:', err);
    return new Response('Error updating availability', { status: 500 });
  }
}