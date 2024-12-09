import { UsersProfilesData } from '../../infra/users/getDataUsersProfiles';

export class GetUsersProfiles {
   async getUsersProfiles() : Promise<any> {
      const users = new UsersProfilesData();
      const responseUsers = await users.getUsersProfilesData();
      if (!responseUsers) {
         throw new Error('No hay datos de perfiles de usuarios');
      }
      return responseUsers;
   }
}
