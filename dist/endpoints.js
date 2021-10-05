"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initEndpoints = void 0;
const express_1 = __importDefault(require("express"));
const GemDeck_1 = require("./GemDeck");
const generateId_1 = require("./generateId");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
function initEndpoints() {
    // dotenv.config();
    const app = (0, express_1.default)();
    // Uses Heroku defined port number or else 3000
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`server started ${port}`));
    app.get("/start", (req, res) => {
        const board = new GemDeck_1.GemDeck();
        res.status(200).json({ state: board.generateId() });
    });
    app.get("/draw", (req, res) => {
        console.log((0, generateId_1.decodeId)(req.query.state));
        const board = new GemDeck_1.GemDeck((0, generateId_1.decodeId)(req.query.state));
        const card = board.drawGem(parseInt(req.query.tier)).toJSON();
        res.status(200).json({ state: board.generateId(), card });
    });
    app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
exports.initEndpoints = initEndpoints;
//# sourceMappingURL=endpoints.js.map