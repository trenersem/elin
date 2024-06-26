import { ServiceType } from "@/types";

const { Schema, models, model } = require("mongoose");

const AppointmentSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: false,
    },
    phone_number: {
        type: String,
        required: true,
    },
    service_id: {
        type: String,
        enum: ServiceType,
        required: true
    },
    appointment_date: {
        type: String,
        required: true,
    },
    appointment_time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'canceled'],
        required: true,
    },
    notes: {
        type: String,
    }
});

const Appointment = models.Appointment || model('Appointment', AppointmentSchema);

export default Appointment;