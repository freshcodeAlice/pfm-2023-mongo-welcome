const mongoose = require('mongoose');
const Cat = require('./Cat');
const Owner = require('./Owner');
const db = require('../configs/mConfig.json');

const CONFIG = db[process.env.NODE_ENV || "development"];

//// щось важливе має відбутись тут

// Клієнт БД має підключитись до сервера БД, щоби мати можливість виконувати запити на БД
const url = `mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`

mongoose.connect(url)
.catch((err) => {
    console.log('connection failed');
    process.exit(1);
})

module.exports = {
    Cat, Owner
}
