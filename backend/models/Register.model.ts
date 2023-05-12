import { Schema, model } from "mongoose";

interface types{
    name:String,
    email:String,
    password:String
};

const RegisterSchema=new Schema <types>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});


const RegisterModel= model('userList',RegisterSchema);


export default RegisterModel;
