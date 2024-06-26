import { connectToDB } from "@/utils/database";
import User from "@/models/users";
import { IUser } from "@/types";

export const POST = async (req: Request): Promise<Response> => {
    try {
        await connectToDB();

        const {
            first_name,
            last_name,
            email,
            phone_number,
            role,
        }: IUser = await req.json();

        const newUser = new User({
            first_name,
            last_name,
            email,
            phone_number,
            role,
        });

        await newUser.save();

        return new Response(JSON.stringify(newUser), {
            status: 201,
        });
    } catch (err) {
        console.error(err);
        return new Response('Failed to create a new User', {
            status: 500,
        });
    }
};
