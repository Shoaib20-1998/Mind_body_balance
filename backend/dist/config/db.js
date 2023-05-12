"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const db = (0, mongoose_1.connect)(process.env.atlasUrl);
exports.default = db;
//# sourceMappingURL=db.js.map