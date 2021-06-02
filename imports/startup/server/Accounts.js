import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const SEED_USERNAME = 'bioconductor';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  ServiceConfiguration.configurations.upsert(
    { service: 'github' },
    {
      $set: {
        loginStyle: "popup",
        clientId: Meteor.settings.github.clientId, // See table below for correct property name!
        secret: Meteor.settings.github.secret,
        redirect_uri: Meteor.settings.github.redirect_uri
      }
    }
  );
  
});
