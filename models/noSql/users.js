
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
    assignedUsers: [
        {   
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        }
    ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('users', UserScheme);