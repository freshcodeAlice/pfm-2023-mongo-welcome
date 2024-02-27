const mongoose = require('mongoose');

/*
Task: Owner entity

Owner
*- firstName
*- lastName
- birthday
- email
- phone
- address: {
        - city
        - street
        - house
        - appartmentType: enum('house', 'apartment', 'room')
    }

Зробити Mongoose-модель, методи контроллера, роути і протестити створенням сутностей
*/

const ownerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date
    },
    email: {
        type: String
    },
    phone: {
        type: String 
    },
    address: {
        city: {
            type: String
        },
        street: {
            type: String
        },
        house: {
            type: Number
        },
        appartmentType: {
            type: String,
            enum: ['house', 'apartment', 'room']
        }
    },
        cats: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cat'
        }]
    });

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
