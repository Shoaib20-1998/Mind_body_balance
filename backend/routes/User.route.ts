import express from 'express';
import {compare,hash} from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import RegisterModel from '../models/Register.model';
const user=express.Router();

// login
user.post('/login',async(req,res)=>{
    try {
        const user=await RegisterModel.findOne({email:req.body.email});
        compare(req.body.password,`${user["password"]}`,(err,result)=>{
            if(result){
                const token=jsonwebtoken.sign({userId:user._id},'userLogin');
                res.status(200).send({"success":"login successful","token":token});
            }else{
                res.status(401).send({"error":"wrong password"});
            }
        })
    } catch (error) {
        res.status(501).send({"error":"user is not registered"});
    }
});

// register
user.post('/register',async(req,res)=>{
    try {
        hash(req.body.password,5,async(err,hash)=>{
            if(hash){
                const user=new RegisterModel({name:req.body.name,email:req.body.email,password:hash});
                await user.save();
                res.status(201).send({"success":"account created successful"});
            }else{
                res.status(501).send({"error":"failed to hash the password"});
            }
        })
    } catch (error) {
        res.status(501).send({"error":"failed to create the account"});
    }
})


export default user;