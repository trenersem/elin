const { Schema, models, model } = require("mongoose");

const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration_minutes: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const Service = models.Service || model('Service', ServiceSchema);

export default Service;