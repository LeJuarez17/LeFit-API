
const {routineModel} = require('../models');
const {exerciseModel} = require('../models');


const getItems = async (req,res) => {
    const data = await routineModel.find();
    res.send({data});
};

const getItem = async (req,res) => {
    const data = await routineModel.findById(req.params.id);
    res.send({data});
};

// const createItem = async (req,res) => {
//     const {body} = req;
//     console.log(body);
//     const data = await routineModel.create(body);
//     res.send({data})
// };

// const createItem = async (req,res) => {
//     const {body} = req;
//     console.log(body);
//     const {selectedExercises} = body;

//     const selectedExercisesDetails = await Promise.all(
//         selectedExercises.map(async (exerciseId) => {
//             const excercise = await exerciseModel.findById(exerciseId);
//             return {
//                 idExercise: excercise.idExercise,
//                 name: excercise.name,
//                 description: excercise.description,
//             }
//         })
//     );

//     body.excercises = selectedExercisesDetails;

//     const data = await routineModel.create(body);
//     res.send({data})
// };

const createItem = async (req,res) => {
    try {
    const {body} = req;
    console.log(body);
    const {selectedExercises} = body;

    const selectedExercisesDetails = [];

    for (const exerciseData  of selectedExercises) {
      const exercise = await exerciseModel.findById(exerciseData._id);
      if (!exercise) {
        // Si no se encuentra el ejercicio en la base de datos, retorna un error.
        return res.status(400).send({ message: `No se encontró el ejercicio con el ID: ${_id}` });
      }

      selectedExercisesDetails.push({
        _id: exercise._id,
        name: exercise.name,
        reps: exerciseData.reps,
        sets: exerciseData.sets,
        weight: exerciseData.weight,
        coments: exerciseData.coments,

      });
    }

    body.exercises = selectedExercisesDetails;

    const data = await routineModel.create(body);
    res.send({ data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al crear la rutina" });
  }
};

const updateItem = async (req,res) => {
    const data = await routineModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send({data});
};

const deleteItem = async (req,res) => {
    const data = await routineModel.findByIdAndDelete(req.params.id);
    res.send({data});
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };