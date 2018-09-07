import { Sequelize } from 'sequelize-typescript';
import { User } from '../dbModels/user.db.model';
import { dbConfig } from '../config/db.config';
export const databaseProviders = [
  {
    provide: 'SequelizeInstance',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      sequelize.addModels([User]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
