import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {

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
