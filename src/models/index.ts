import sequelize from '../config/database';
import User from './userModel';
import People from './peopleModel';
import { setupAssociations } from './associations';

// Registrar modelos
const models = {
   User,
   People,
};

// Configurar relaciones entre modelos
setupAssociations();

// Exportar modelos y conexión
export { sequelize };
export default models;
