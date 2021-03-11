import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

import { offbeatRoles, defaultUsers } from './constants';

Meteor.startup(() => {
  if (!Meteor.users.find().count()) {
    offbeatRoles.forEach((role) => {
      Roles.createRole(role, { unlessExists: true });
    });
    defaultUsers.forEach(({ firstName, password, roles }) => {
      Accounts.createUser({
        firstName,
        username: firstName,
        // TODO: check why password are visible in db
        password,
        roles,
      });
    });
  }
});
