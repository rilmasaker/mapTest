import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Accounts.onCreateUser((options, user) => {
  let customUser = { ...user, ...options };
  if (user?.services?.google) {
    customUser = {
      firstName: user?.services?.google?.given_name,
      lastName: user?.services?.google?.family_name,
      email: user?.services?.google?.email,
      avatar: user?.services?.google?.picture,
      roles: ['user'],
      profile: options.profile,
      ...user,
    };
  }
  if (Meteor.isServer && customUser.email) {
  // TODO add error handling
  }
  Roles.addUsersToRoles(customUser._id, ['user']);
  return customUser;
});
