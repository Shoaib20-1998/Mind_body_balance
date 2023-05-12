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
const cors_1 = __importDefault(require("cors"));
const Workout_route_1 = __importDefault(require("./routes/Workout.route"));
const User_route_1 = __importDefault(require("./routes/User.route"));
const auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
const db_1 = __importDefault(require("./config/db"));
const Nutition_route_1 = __importDefault(require("./routes/Nutition.route"));
const app = (0, express_1.default)();
const port = 8080;
// json
app.use(express_1.default.json());
// cors
app.use((0, cors_1.default)());
// auth
app.use('/workout', auth_middleware_1.default);
// workout route
app.use('/workout', Workout_route_1.default);
// auth
app.use('/nutrition', auth_middleware_1.default);
// nutrition route
app.use('/nutrition', Nutition_route_1.default);
// user
app.use('/user', User_route_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default;
        console.log('db is connected');
    }
    catch (error) {
        console.log('failed to connect the db');
    }
    console.log(`Express is listening at ${port}`);
}));
//# sourceMappingURL=index.js.map