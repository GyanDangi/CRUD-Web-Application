import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';



const userSchema= mongoose.Schema({
    name:String,
    Username:String,
    email:String,
    Phone:String

})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const user= mongoose.model('user', userSchema);

export default user;