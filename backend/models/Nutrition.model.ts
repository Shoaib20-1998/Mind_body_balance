import {Schema,model} from 'mongoose';

interface verify{
    name:String,
    calories:Number,
    protein:Number,
    carbs:Number,
    fat:Number,
    userId:String
};

const NutritionSchema=new Schema<verify>({
    name:{type:String,required:true},
    calories:{type:Number,required:true},
    protein:{type:Number,required:true},
    carbs:{type:Number,required:true},
    fat:{type:Number,required:true},
    userId:{type:String,required:true}
});

const NutritionModel=model('nutritionPlan',NutritionSchema);

export default NutritionModel;