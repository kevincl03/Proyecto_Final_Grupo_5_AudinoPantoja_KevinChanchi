// import User from '../../models/userModel';
// import People from '../../models/peopleModel';
import models from '../../models/index';

// interface UsersProfiles {
//    id: number;
//    email: string;
//    password: string;
//    createdAt: Date;
//    updatedAt: Date;
//    firstName: string;
//    middleName: string;
//    lastNames: string;
//    phone: string;
// }
const { User, People } = models;

export class UsersProfilesData {
   async getUsersProfilesData() : Promise<InstanceType<typeof User>[]> {
      const results : InstanceType<typeof User>[] = await User.findAll({
         attributes: ['id', 'email', 'password', 'createdAt', 'updatedAt'],
         include: [
            {
               model: People,
               as: 'profile',
               attributes: ['firstName', 'middleName', 'lastNames', 'phone'],
            },
         ],
      });
      return results;
   }
}
