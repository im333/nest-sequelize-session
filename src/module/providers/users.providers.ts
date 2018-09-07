'use strict';

import { User } from '../../dbModels/user.db.model';

export const UsersProvider = {
  provide: 'UsersRepository',
  useValue: User,
};
