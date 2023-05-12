"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Nutrition_model_1 = __importDefault(require("../models/Nutrition.model"));
const nutrition = express_1.default.Router();
// get plan
nutrition.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Nutrition_model_1.default.find({ userId: req.body.userId });
        res.status(200).send(data);
    }
    catch (error) {
        res.status(501).send({ "error": "failed to fetch the data" });
    }
}));
// post
nutrition.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new Nutrition_model_1.default(req.body);
        yield data.save();
        res.status(201).send({ "success": "data is added successfully" });
    }
    catch (error) {
        res.status(501).send({ "error": "failed to add the data" });
    }
}));
// patch
nutrition.patch('/edit/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Nutrition_model_1.default.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).send({ "success": "data is updated" });
    }
    catch (error) {
        res.status(501).send({ "error": "failed to update the data" });
    }
}));
// delete
nutrition.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Nutrition_model_1.default.findByIdAndDelete({ _id: req.params.id });
        res.status(200).send({ "success": "data is deleted successfully" });
    }
    catch (error) {
        res.status(501).send({ "error": "failed to delete the data" });
    }
}));
exports.default = nutrition;
//# sourceMappingURL=Nutition.route.js.map