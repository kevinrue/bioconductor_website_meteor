import { Meteor } from 'meteor/meteor';
import '/imports/startup/server/Accounts';

const SEED_USERNAME = 'bioconductor';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
