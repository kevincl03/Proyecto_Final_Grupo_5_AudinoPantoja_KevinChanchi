// src/models/peopleModel.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './userModel';

class People extends Model {
   public id!: number;
   public userId!: number;
   public firstName!: string;
   public middleName!: string;
   public lastNames!: string;
   public phone!: string;

   // Timestamps
   public readonly createdAt!: Date;
   public readonly updatedAt!: Date;
}

People.init(
   {
      id: {
         type: DataTypes.INTEGER.UNSIGNED,
         autoIncrement: true,
         primaryKey: true,
      },
      userId: {
         type: DataTypes.INTEGER.UNSIGNED,
         allowNull: false,
         references: {
            model: User, // Hace referencia al modelo `User`
            key: 'id', // La columna `id` de `User`
         },
      },
      firstName: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      middleName: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      lastNames: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      phone: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      tableName: 'people',
      sequelize, // passing the `sequelize` instance is required,
      timestamps: true, // Habilitar timestamps automáticos
   },
);

export default People;
