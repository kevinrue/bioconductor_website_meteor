import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

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
