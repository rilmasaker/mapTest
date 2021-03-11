import { UniUsers } from 'meteor/universe:collection';
import { usersSchema } from './schema';

export const Users = UniUsers;

Users.setSchema('default', usersSchema);
