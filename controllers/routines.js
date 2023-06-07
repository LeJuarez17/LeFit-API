
const {routineModel} = require('../models');


const getItems = async (req,res) => {
    const data = await routineModel.find();
    res.send({data});
};

const getItem = async (req,res) => {
    const data = await routineModel.findById(req.params.id);
    res.send({data});
};

const createItem = async (req,res) => {
    const {body} = req;
    console.log(body);
    const data = await routineModel.create(body);
    res.send({data})
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