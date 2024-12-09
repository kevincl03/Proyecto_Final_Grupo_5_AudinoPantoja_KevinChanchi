"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const register_1 = require("../controllers/users/register");
const login_1 = require("../controllers/users/login");
const getProfile_1 = require("../controllers/users/getProfile");
const getAllProfiles_1 = require("../controllers/users/getAllProfiles");
const updateProfile_1 = require("../controllers/users/updateProfile");
const deleteProfile_1 = require("../controllers/users/deleteProfile");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/api/users/register', [
    (0, express_validator_1.body)('firstName').notEmpty().withMessage('El Primer nombre es requerido'),
    (0, express_validator_1.body)('middleName').notEmpty().withMessage('El Segundo nombre es requerido'),
    (0, express_validator_1.body)('lastNames').notEmpty().withMessage('El Apellido es requerido'),
    (0, express_validator_1.body)('phone').notEmpty().withMessage('El Telefono es requerido').isLength({ min: 10 })
        .withMessage('El Telefono debe tener al menos 10 caracteres'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Debe ser un email válido'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
], register_1.register);
router.post('/api/users/login', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Debe ser un email válido'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('La contraseña es requerida'),
], login_1.login);
router.get('/api/users/profile', authMiddleware_1.default, getProfile_1.getProfile);
router.get('/api/users/profiles', authMiddleware_1.default, getAllProfiles_1.getAllProfiles);
router.put('/api/users/profile/:userId', authMiddleware_1.default, updateProfile_1.updateProfile);
router.delete('/api/users/profile/:userId', authMiddleware_1.default, deleteProfile_1.deleteProfile);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map