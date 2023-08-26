const {exerciseModel} = require('../models');
const handleHttpError = require('../utils/handleError');


const getItems = async (req,res) => {

    try {
        const data = await exerciseModel.find();
    res.send({data});
    } catch (e) {
        handleHttpError(res, "error get items");
    }

};

const getItem = async (req,res) => {
    const data = await exerciseModel.findById(req.params.id);
    res.send({data});
};

const createItem = async (req,res) => {

    try{
    const {body} = req;
    console.log(body);
    const data = await exerciseModel.create(body);
    res.send({data})
    } catch (e) {
        handleHttpError(res, "error create item");
    }
};

const updateItem = async (req,res) => {
    const data = await exerciseModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send({data});
};

const deleteItem = async (req,res) => {
    const data = await exerciseModel.findByIdAndDelete(req.params.id);
    res.send({data});
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };