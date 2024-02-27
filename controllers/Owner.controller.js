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

module.exports.addCatToOwner = async (req, res, next) => {
    try {
        const {params: {catId, ownerId}} = req;
        // додати коту інфу про власника
        const cat = await Cat.findOneAndUpdate({_id: catId}, {owner: ownerId}, {returnDocument: 'after'});
        // додати власнику інфу про кота
        // Крок 1: знайти екземпляр моделі Власника 
        const owner = await Owner.findById(ownerId);
        // Крок 2: Запушити до масиву котів catId
        owner.cats.push(catId);
        // Крок 3: викликати метод save() для збереження цих змін у БД
        await owner.save()
        res.status(200).send({data: cat}) 
    } catch(error) {
        next(error)
    }
}