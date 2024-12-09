import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { GetUserProfileSql } from '../../infra/users/getUserProfileByUserIdSql';
import { UpdateUserSql } from '../../infra/users/updateUser';
import { UpdatePeopleSql } from '../../infra/users/updatePeople';

dotenv.config();

export const updateUserProfile = async (userId: number, updateData: Partial<{ firstName: string; middleName: string; lastNames: string; phone: string; email: string; password: string }>):Promise<any> => {
   const user = new GetUserProfileSql();
   const userResponse = await user.getUserProfileSql(userId);
   console.log(userResponse, 'ur');
   if (!userResponse) {
      throw new Error('Usuario no encontrado');
   }
   interface UpdateUser {
      user: {
         id?:number;
         email?:string;
         password?: string;
      },
      people: {
         userId?: number;
         firstName?: string;
         middleName?: string;
         lastNames?: string;
         phone?: string;
      }
   }
   const {
      firstName, middleName, lastNames, phone, email, password,
   } = updateData;
   let passwordFormat = '';
   if (password) {
      passwordFormat = await bcrypt.hash(password, 10);
   }

   const data : UpdateUser = {
      user: {
         email,
      },
      people: {
         userId,
         firstName,
         middleName,
         lastNames,
         phone,
      },
   };
   if (password) {
      data.user.password = passwordFormat;
   }
   const updateUserData = new UpdateUserSql();
   const updatePeopleData = new UpdatePeopleSql();
   const updateUser = await updateUserData.updateUserSql(data.user, userId);
   await updatePeopleData.updatePeopleSql(data.people, userId);
   return updateUser;
};
