const { Schema, models, model } = require("mongoose");

const AvailabilitySchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    blocked_time: {
        type: [String],
        required: true,
    }

});

const Availability = models.Availability || model('Availability', AvailabilitySchema);

export default Availability;