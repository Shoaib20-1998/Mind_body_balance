"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const decode = jsonwebtoken_1.default.verify(token.split(' ')[1], 'userLogin');
        if (decode) {
            req.body.userId = decode['userId'];
            next();
        }
        else {
            res.status(501).send({ "error": "Invalid token" });
        }
    }
    else {
        res.status(501).send({ "error": "please login!" });
    }
};
exports.default = userAuth;
//# sourceMappingURL=auth.middleware.js.map