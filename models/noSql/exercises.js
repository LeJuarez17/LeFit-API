
const mongoose = require('mongoose');

const ExerciseScheme = new mongoose.Schema(
    {
        idExercise: {
                type: Number,
        },
        name: {
                type: String,
                required: true,
        },
        description: {
                type: String,
        },
        muscleGroup: {
                type: String,
        },
    
    mediaId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('exercises', ExerciseScheme);