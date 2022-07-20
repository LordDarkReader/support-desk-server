const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    idAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, 
{
    timestamps: true
}
); 

module.exports = mongoose.model('User', userSchema);