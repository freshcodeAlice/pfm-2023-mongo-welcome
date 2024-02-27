const {Cat} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const cat = await Cat.create(body);
        res.status(201).send({data: cat})
    } catch(error) {
        next(error)
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const {params: {catId}} = req;
        const oneCat = await Cat.find({}).populate('owner');
        res.status(200).send({data: oneCat})
    } catch(error) {
        next(error)
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {catId}} = req;
        const oneCat = await Cat.findById(catId).populate('owner');;
        res.status(200).send({data: oneCat})
    } catch(error) {
        next(error)
    }
}

module.exports.updateOne = async (req, res, next) => {
    try {
        const {params: {catId}, body} = req;
        const updated = await Cat.findByIdAndUpdate(catId, body)
        res.status(200).send({data: updated})
    } catch(error) {
        next(error)
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {catId}} = req;
        const deleted = await Cat.findByIdAndDelete(catId);
        res.status(200).send({data: deleted})
    } catch(error) {
        next(error)
    }
}


/*
Дописати методи контроллера та прописати маршрутизацію для них
і веб-сервер, який приймає запити

*/