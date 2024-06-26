import User from '@/models/users';
import { IUser } from '@/types';
import { connectToDB } from '@/utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';


type Data = {
  success: boolean;
  data?: IUser[] | IUser;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await connectToDB();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, message: (error as Error).message });
      }
      break;
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, message: (error as Error).message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
      break;
  }
}
