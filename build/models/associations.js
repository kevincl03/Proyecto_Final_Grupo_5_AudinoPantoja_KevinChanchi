"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAssociations = void 0;
const userModel_1 = __importDefault(require("./userModel"));
const peopleModel_1 = __importDefault(require("./peopleModel"));
const setupAssociations = () => {
    peopleModel_1.default.belongsTo(userModel_1.default, { foreignKey: 'userId' });
    userModel_1.default.hasOne(peopleModel_1.default, { foreignKey: 'userId', as: 'profile' });
};
exports.setupAssociations = setupAssociations;
//# sourceMappingURL=associations.js.map