"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    sets: { type: String, require: true },
    reps: { type: String, require: true },
    weight: { type: String, require: true }
});
const WorkoutSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    exercises: [subSchema],
    userId: { type: String, require: true }
});
const WorkoutModel = (0, mongoose_1.model)('workoutDetail', WorkoutSchema);
exports.default = WorkoutModel;
//# sourceMappingURL=Workout.model.js.map