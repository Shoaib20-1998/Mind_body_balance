import express from 'express';
import NutritionModel from '../models/Nutrition.model';
const nutrition=express.Router();

// get plan
nutrition.get('/',async(req,res)=>{
    try {
        const data=await NutritionModel.find({userId:req.body.userId});
        res.status(200).send(data);
    } catch (error) {
        res.status(501).send({"error":"failed to fetch the data"});
    }
});

// post
nutrition.post('/add',async(req,res)=>{
    try {
        const data=new NutritionModel(req.body);
        await data.save();
        res.status(201).send({"success":"data is added successfully"});
    } catch (error) {
        res.status(501).send({"error":"failed to add the data"});
    }
});

// patch
nutrition.patch('/edit/:id',async(req,res)=>{
    try {
        await NutritionModel.findByIdAndUpdate({_id:req.params.id},req.body);
        res.status(200).send({"success":"data is updated"});
    } catch (error) {
        res.status(501).send({"error":"failed to update the data"});
    }
});

// delete
nutrition.delete('/delete/:id',async(req,res)=>{
    try {
        await NutritionModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"success":"data is deleted successfully"});
    } catch (error) {
        res.status(501).send({"error":"failed to delete the data"});   
    }
});


export default nutrition;