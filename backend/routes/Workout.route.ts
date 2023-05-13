import express from 'express';
import WorkoutModel from '../models/Workout.model';

const workout=express.Router();

//get 
workout.get('/',async(req,res)=>{
    try {
        const data=await WorkoutModel.find({userId:req.body.userId});
        res.status(200).send(data);
    } catch (error) {
        res.status(501).send({"error":"failed to fetch the data"});
    }
});

// post 
workout.post('/post',async(req,res)=>{
    try {
        const data=new WorkoutModel(req.body);
        await data.save();
        res.status(201).send({"success":"data is added"});
    } catch (error) {
        res.status(501).send({"error":"failed to add the data"});
    }
});

// edit
workout.patch('/patch/:id',async(req,res)=>{
    try {
        await WorkoutModel.findByIdAndUpdate({_id:req.params.id},req.body);
        res.status(200).send({"success":"data is updated"});
    } catch (error) {
        res.status(501).send({"error":"failed to update the data"});
    }
});

// delete
workout.delete('/delete/:id',async(req,res)=>{
    try {
        await WorkoutModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"success":"data is deleted successfully"});
    } catch (error) {
        res.status(501).send({"error":"failed to delete the data"});
    }
})






export default workout;