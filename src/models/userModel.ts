// src/models/userModel.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
   public id!: number;
   public email!: string;
   public password!: string;

   // Timestamps
   public readonly createdAt!: Date;
   public readonly updatedAt!: Date;
}

User.init(
   {
      id: {
         type: DataTypes.INTEGER.UNSIGNED,
         autoIncrement: true,
         primaryKey: true,
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      tableName: 'users',
      sequelize, // passing the `sequelize` instance is required,
      timestamps: true, // Habilitar timestamps automáticos
   },
);

export default User;
