const mongoose = require('mongoose');

/*
Cat
- name - в імені не має бути цифр
- age - від 0 до 30
- color
- favouriteFood
- favouriteGame

*/

const catSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (v) => /^[^0-9]+$/.test(v)
        }
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'Cat must exist'],
        max: [30, 'Cat is too old for us']
    },
    color: {
        type: String
    },
    favouriteFood: {
        type: [String]
    },
    favouriteGame: {
        type: String
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;


/*
Аналогічно цю схему на рівні mongo можна описати так:


db.createCollection('cats', {
    validator: {
        $jsonSchema: {
            required: ['name', 'age'],
            properties: {
                name: {
                   bsonType: "string",
                   description: 'must be a string and is required' 
                },
                age: {
                     bsonType: "int",
                    description: 'must be a int and is required' 
                },
                color: {
                  bsonType: "string"
                },
                favouriteFood: {
                    bsonType: "array"
                },
                favouriteGame: {
                    bsonType: "string"
                }
               
            }
        }
    },

});



*/

