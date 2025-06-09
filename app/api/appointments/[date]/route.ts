import Appointment from "@/models/appointments";
import { connectToDB } from "@/utils/database";




export const GET = async (
  req: Request,
  context: { params: { date: string } }
): Promise<Response> => {
  try {
    await connectToDB();
    const appoimentsByDate = await Appointment.find({
      appointment_date: context.params.date,
    });

    return new Response(JSON.stringify(appoimentsByDate), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response('Failed to fetch appoimentsByDate', {
      status: 500,
    });
  }
};

export const DELETE = async (req: Request, {
    params,
}: {params: {date:string}}): Promise<Response> => {
    console.log('params', params);
    try {
        await connectToDB();
        const deletedAppointment = await Appointment.findByIdAndDelete(params.date);

        if (!deletedAppointment) {
            return new Response('Appointment not found', { status: 404 });
        }

        return new Response('Appointment deleted successfully', { status: 200 });
    } catch (err) {
        console.error(err)
        return new Response('Failed to delete appointment', {
            status: 500,
        })
    }
}


// PATCH (update)
export const PATCH = async (req: Request, {
        params,
}: {params: {date:string}}): Promise<Response> => {
    const { first_name, last_name, email, phone_number, service_id, appointment_date, status, notes } = await req.json();

    try {
        await connectToDB();

        const existingAppointment = await Appointment.findById(params.date)

        if(!existingAppointment)  return new Response("existingAppointment not found", {
            status: 404
        });

        existingAppointment.first_name = first_name;
        existingAppointment.last_name = last_name;
        existingAppointment.email = email;
        existingAppointment.phone_number = phone_number;
        existingAppointment.service_id = service_id;
        existingAppointment.appointment_date = appointment_date;
        existingAppointment.status = status;
        existingAppointment.notes = notes
        

        existingAppointment.save();

        return new Response("Successfully updated the existingAppointment", { status: 200 });
    } catch (error) {
        return new Response("Error Updating existingAppointment", { status: 500 });
    }
};