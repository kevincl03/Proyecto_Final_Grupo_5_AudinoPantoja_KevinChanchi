"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
const userModel_1 = __importDefault(require("./userModel"));
const peopleModel_1 = __importDefault(require("./peopleModel"));
const associations_1 = require("./associations");
const models = {
    User: userModel_1.default,
    People: peopleModel_1.default,
};
(0, associations_1.setupAssociations)();
exports.default = models;
//# sourceMappingURL=index.js.map