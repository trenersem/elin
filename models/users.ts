const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
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
        unique: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['client', 'admin'],
        required: true,
    }
});

const User = models.User || model('User', UserSchema);

export default User;
