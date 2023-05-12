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
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Register_model_1 = __importDefault(require("../models/Register.model"));
const user = express_1.default.Router();
// login
user.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Register_model_1.default.findOne({ email: req.body.email });
        (0, bcrypt_1.compare)(req.body.password, `${user["password"]}`, (err, result) => {
            if (result) {
                const token = jsonwebtoken_1.default.sign({ userId: user._id }, 'userLogin');
                res.status(200).send({ "success": "login successful", "token": token });
            }
            else {
                res.status(401).send({ "error": "wrong password" });
            }
        });
    }
    catch (error) {
        res.status(501).send({ "error": "user is not registered" });
    }
}));
// register
user.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, bcrypt_1.hash)(req.body.password, 5, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
            if (hash) {
                const user = new Register_model_1.default({ name: req.body.name, email: req.body.email, password: hash });
                yield user.save();
                res.status(201).send({ "success": "account created successful" });
            }
            else {
                res.status(501).send({ "error": "failed to hash the password" });
            }
        }));
    }
    catch (error) {
        res.status(501).send({ "error": "failed to create the account" });
    }
}));
exports.default = user;
//# sourceMappingURL=User.route.js.map