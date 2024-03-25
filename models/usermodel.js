import mongoose from '../config/mongoconnect.js';
import validator from 'validator';
const { isEmail } = validator;

const userSchema = new mongoose.Schema({

    name:String,
    email:{
    type:String,
    unique: true,
    required:true,
    minlength: 11,
    validate: [isEmail, 'email is not valid 😡']
},
    phone:String,
    pin:String,
    package:[{name:String,price:Number,email:String}],
    picture:String
})

const userModel = mongoose.model("users",userSchema);
export default userModel;


