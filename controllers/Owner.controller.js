const {Owner, Cat} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const owner = await Owner.create(body);
        res.status(201).send({data: owner})
    } catch(error) {
        next(error)
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const owners = await Owner.find({}).populate('cats');
        res.status(200).send({data: owners})
    } catch(error) {
        next(error)
    }
}

module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {ownerId}} = req;
        const owner = await Owner.findById(ownerId).populate('cats');
        res.status(200).send({data: owner})
    } catch(error) {
        next(error)
    }
}

module.exports.updateOne = async (req, res, next) => {
    try {
        const {params: {ownerId}, body} = req;
        const updated = await Owner.findByIdAndUpdate(ownerId, body)
        res.status(200).send({data: updated})
    } catch(error) {
        next(error)
    }
}

module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {ownerId}} = req;
        const deleted = await Owner.findByIdAndDelete(ownerId);
        res.status(200).send({data: deleted})
    } catch(error) {
        next(error)
    }
}


/*
Дописати методи контроллера та прописати маршрутизацію для них
і веб-сервер, який приймає запити

*/