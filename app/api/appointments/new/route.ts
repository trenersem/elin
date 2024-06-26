import Appointment from "@/models/appointments";
import Availability from "@/models/availability";
import Service from "@/models/services";
import User from "@/models/users";
import { IAppointment } from "@/types";
import { connectToDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: Request): Promise<Response> => {
    const { service_id, appointment_date, appointment_time, notes, status, first_name, last_name, email, phone_number }: IAppointment = await req.json();

    try {
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


        return new Response(JSON.stringify(newAppointment), {
            status: 201,
        });
    } catch (error) {
        console.error(error);
        return new Response('Failed to create appointment', {
            status: 500,
        });
    };
};
