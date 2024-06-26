import mongoose from 'mongoose';

let isConnected: boolean = false; // track the connection
const MONGODB_URL: string = process.env.MONGODB_URL ?? '';

export const connectToDB = async (): Promise<void> => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URL, {
      dbName: 'ellin',
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB is connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
