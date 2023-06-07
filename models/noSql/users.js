
const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
    userName: {
            type: String,
            required: true,
            unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: ['admin', 'user'],
        default: 'user',
    },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('users', UserScheme);