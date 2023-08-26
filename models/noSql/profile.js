
const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    idExercise: mongoose.Schema.Types.ObjectId,
  name: String, 
  description: String, 
  reps: Number, 
  sets: Number, 
  weight: Number, 
  comments: String, 
});

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    stats: [statsSchema], // Un array de objetos con las estadísticas de los ejercicios realizados
    mediaId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Profile', profileSchema);
