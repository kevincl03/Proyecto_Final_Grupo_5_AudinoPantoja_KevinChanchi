import { Request, Response } from 'express';
import { GetUsersProfiles } from '../../services/users/getUsersProfilesService';

export const getAllProfiles = async (_req: Request, res: Response) : Promise<void> => {
   try {
      const usersProfiles = new GetUsersProfiles();
      const usersProfilesData = await usersProfiles.getUsersProfiles();
      res.status(200).json({ usersProfilesData });
   } catch (error: any) {
      res.status(500).json({ error: error.message });
   }
};
