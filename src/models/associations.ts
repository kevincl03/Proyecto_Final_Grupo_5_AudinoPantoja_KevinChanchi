import User from './userModel';
import People from './peopleModel';

export const setupAssociations = () : void => {
   // Un perfil pertenece a un usuario
   People.belongsTo(User, { foreignKey: 'userId' });

   // Un usuario tiene un perfil
   User.hasOne(People, { foreignKey: 'userId', as: 'profile' });
};
