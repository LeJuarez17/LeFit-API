
const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('CONEXION A LA BD CORRECTA');
    }).catch((error) => {
        console.log('ERROR AL CONECTAR CON LA BD:', error.message);
    });
};

module.exports = dbConnect;