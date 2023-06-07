
const {matchedData} = require("express-validator");
const {encrypt} = require("../utils/handlePassword");
const {userModel} = require("../models");
const {tokenSign} = require("../utils/handleJwt");
const { compare } = require("bcryptjs");


const registerController = async (req, res) => {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req, password};
    const dataUser = await userModel.create(body);
    // console.log(data);
    // console.log(body);
    //ocultar password
    dataUser.set("password", undefined, {strict: false});

    const data = {
        token: await tokenSign(dataUser),
        user: dataUser,
    }

    res.send({data});
}

const loginController = async (req, res) => {
    try{
        req = matchedData(req);
        const user = await userModel.findOne({userName: req.userName});
        if(!user){
            throw new Error("User not found");
            return;
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);
        if(!check){
            throw new Error("Password incorrect");
            return;
        }

        user.set("password", undefined, {strict: false});
        const data = {
            token: await tokenSign(user),
            user: user,
        }
        res.send({data});
    }catch(error){
        console.log(error);
    }
}

module.exports = {registerController, loginController};