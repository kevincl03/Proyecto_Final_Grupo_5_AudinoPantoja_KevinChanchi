import User from '../../models/userModel';

export class UpdateUserSql {
   async updateUserSql(data:Partial<User>, userId:number) :Promise<[number, User[]]> {
      console.log(data, 'data');
      const user = await User.update(data, {
         where: { id: userId },
         returning: true, // Esto nos devolverá el usuario actualizado
      });
      return user;
   }
}
