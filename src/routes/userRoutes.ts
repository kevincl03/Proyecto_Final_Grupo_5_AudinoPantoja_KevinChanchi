// src/routes/userRoutes.ts
import { Router } from 'express';
import { body } from 'express-validator';
import { register } from '../controllers/users/register';
import { login } from '../controllers/users/login';
import { getProfile } from '../controllers/users/getProfile';
import { getAllProfiles } from '../controllers/users/getAllProfiles';
import { updateProfile } from '../controllers/users/updateProfile';
import { deleteProfile } from '../controllers/users/deleteProfile';
import authMiddleware from '../middlewares/authMiddleware';

const router: Router = Router();

// Rutas públicas
router.post('/api/users/register', [
   body('firstName').notEmpty().withMessage('El Primer nombre es requerido'),
   body('middleName').notEmpty().withMessage('El Segundo nombre es requerido'),
   body('lastNames').notEmpty().withMessage('El Apellido es requerido'),
   body('phone').notEmpty().withMessage('El Telefono es requerido').isLength({ min: 10 })
      .withMessage('El Telefono debe tener al menos 10 caracteres'),
   body('email').isEmail().withMessage('Debe ser un email válido'),
   body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
], register);

router.post('/api/users/login', [
   body('email').isEmail().withMessage('Debe ser un email válido'),
   body('password').notEmpty().withMessage('La contraseña es requerida'),
], login);

// Rutas protegidas
router.get('/api/users/profile', authMiddleware, getProfile);
router.get('/api/users/profiles', authMiddleware, getAllProfiles);
router.put('/api/users/profile/:userId', authMiddleware, updateProfile);
router.delete('/api/users/profile/:userId', authMiddleware, deleteProfile);
export default router;
