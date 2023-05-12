import { Schema,model } from 'mongoose';


interface verify{
    name:String,
    exercises:Array<Object>,
    userId:String
}

const subSchema=new Schema({
    name:{type:String,require:true},
    sets:{type:String,require:true},
    reps:{type:String,require:true},
    weight:{type:String,require:true}
})

const WorkoutSchema=new Schema<verify>({
    name:{type:String,required:true},
    exercises:[subSchema],
    userId:{type:String,require:true}
});

const WorkoutModel=model('workoutDetail',WorkoutSchema);

export default WorkoutModel;