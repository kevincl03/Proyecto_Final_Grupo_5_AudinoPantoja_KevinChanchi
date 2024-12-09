// src/config/database.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
   process.env.DB_DATABASE as string,
   process.env.DB_USER as string,
   process.env.DB_PASSWORD as string,
   {
      host: process.env.DB_HOST,
      dialect: 'mysql', // o 'mysql', 'sqlite', etc.
      port: Number(process.env.DB_PORT) || 5432,
   },
);

export default sequelize;
