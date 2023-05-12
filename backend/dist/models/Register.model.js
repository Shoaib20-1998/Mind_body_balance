"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const RegisterSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const RegisterModel = (0, mongoose_1.model)('userList', RegisterSchema);
exports.default = RegisterModel;
//# sourceMappingURL=Register.model.js.map