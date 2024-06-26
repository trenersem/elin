import Availability from "@/models/availability";
import { connectToDB } from "@/utils/database";




export const GET = async (req: Request, {
    params,
}: {params: {date:string}}): Promise<Response> => {
    try {
        await connectToDB();
        const availabilityByDate =  await Availability.find({
            date: params.date,
        })

        return new Response(JSON.stringify(availabilityByDate), {
            status: 200,
        })
    } catch (err) {
        console.error(err)
        return new Response('Failed to fetch availabilityByDate', {
            status: 500,
        })
    }
}

export const PUT = async (req: Request, {
        params,
}: {params: {date:string}}): Promise<Response> => {
    const { blocked_time } =  await req.json();


    try {

        await connectToDB();

        const availability = new Availability({
            date: params.date,
            blocked_time
        });

        await availability.save();

        return new Response("Successfully blocked the existingAvailability", { status: 200 });
    } catch (error) {
        return new Response("Error to Block the time", { status: 500 });
    }
};

export const PATCH = async (req: Request, {
    params
} : {params: {date: string}}): Promise<Response> => {
    const { blocked_time } =  await req.json();
    console.log('params', params)
    try {
        await connectToDB();
        const existingAvailability = await Availability.findById(params.date)


        if(!existingAvailability)  return new Response("existingAppointment not found", {
            status: 404
        });

        existingAvailability.blocked_time = blocked_time

        existingAvailability.save();

        return new Response("Successfully updated bloked tine!", {status: 200});
    } catch (err) {
        return new Response ("Error Updating existingAvailability", { status: 500});
    }
}