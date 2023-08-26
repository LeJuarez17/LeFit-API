
const mongoose = require('mongoose');

const RoutineScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
    },
    exercises: [
        {
            idExercise: Number,
            name: String,
            description: String,
            reps: Number,
            sets: Number,
            weight: Number,
            coments: String,
        },
    ],
    
    mediaId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('routines', RoutineScheme);