import { Document, Schema } from 'mongoose';

// User interface
export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role: 'client' | 'admin';
}

// Service interface
export interface IService extends Document {
  name: string;
  description: string;
  duration_minutes: number;
  price: number;
}

// Appointment interface
export interface IAppointment {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  service_id: ServiceType;
  appointment_date: string;
  appointment_time: string;
  status: 'scheduled' | 'completed' | 'canceled';
  _id: string;
  notes?: string;
}

// Availability interface
export interface IAvailability {
  _id: string
  blocked_time: string [];
  date: string;
}

export enum ServiceType {
  CLASSIC = 'classic',
  TWO_D = '2D',
  THREE_D = '3D',
  FOUR_D = '4D',
  CORRECTION = 'correction',
  HYBRID = 'hybrid',
  NATURAL = 'natural',
  LIGHT_VOLUME = 'light_volume',
  VOLUME = 'volume',
  MEGA_VOLUME = 'mega_volume',
  LASHES_REMOVAL = 'lashes_removal',
  EXPRESS_LASHES = 'express_lashes',
  BOTTOM_LASHES = 'bottom_lashes',

   // Brow services
  BROW_SHAPING = 'brow_shaping',
  BROW_TINTING = 'brow_tinting',
  BROW_LAMINATION = 'brow_lamination'
}