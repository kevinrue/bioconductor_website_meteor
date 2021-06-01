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
        clientId: "f8730d26d1ddf8cfdd05", // See table below for correct property name!
        secret: "e95d87180c752244d48c0d90dd2203be2b31ad41",
        redirect_uri: "http://localhost:3000/_oauth/github"
      }
    }
  );
  
});
