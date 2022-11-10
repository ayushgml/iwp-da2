const mongo = require( 'mongoose' );
const userSchema = new mongo.Schema( {
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }
} );
const User = mongo.model( 'User', userSchema );
module.exports = User;