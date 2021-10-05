"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initEndpoints = void 0;
const express_1 = __importDefault(require("express"));
const GemDeck_1 = require("./GemDeck");
const generateId_1 = require("./generateId");
const swaggerDocument = __importStar(require("./swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
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
    app.use("/", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
}
exports.initEndpoints = initEndpoints;
//# sourceMappingURL=endpoints.js.map