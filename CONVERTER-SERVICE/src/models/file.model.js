
const { Schema, model } = require('mongoose');

const fileSchema = Schema({
    hash: {
        type: String,
        required: [true, 'The hash is requeried.']    
    },
    path: {
        type: String,
        required: [true, 'The path is requeried.'],
    }
});

module.exports = model( 'File', fileSchema );