"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const NutritionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fat: { type: Number, required: true },
    userId: { type: String, required: true }
});
const NutritionModel = (0, mongoose_1.model)('nutritionPlan', NutritionSchema);
exports.default = NutritionModel;
//# sourceMappingURL=Nutrition.model.js.map