"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
// Use body-parser middleware to parse JSON in the request body
app.use(body_parser_1.default.json());
// Use your todoRoutes after setting up body-parser
app.use(todos_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
