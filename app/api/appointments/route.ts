import Appointment from '@/models/appointments';
import { connectToDB } from '@/utils/database';

export const GET = async (request: Request): Promise<Response> => {
  await connectToDB();

  try {
      await connectToDB();

      const users = await Appointment.find({});

      return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
      return new Response("Failed to fetch all users", { status: 500 });
  }
}