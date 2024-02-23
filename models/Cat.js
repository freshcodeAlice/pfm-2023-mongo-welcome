const mongoose = require('mongoose');

/*
Cat
- name
- age
- color
- favouriteFood
- favouriteGame

*/

const catSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
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