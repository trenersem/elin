import Service from '@/models/services';
import { IService } from '@/types';
import { connectToDB } from '@/utils/database';
import type { NextApiRequest, NextApiResponse } from 'next';


type Data = {
  success: boolean;
  data?: IService[] | IService;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await connectToDB();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const services = await Service.find({});
        res.status(200).json({ success: true, data: services });
      } catch (error) {
        res.status(400).json({ success: false, message: (error as Error).message });
      }
      break;
    case 'POST':
      try {
        const service = await Service.create(req.body);
        res.status(201).json({ success: true, data: service });
      } catch (error) {
        res.status(400).json({ success: false, message: (error as Error).message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
      break;
  }
}
