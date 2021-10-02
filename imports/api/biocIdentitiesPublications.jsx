import { Meteor } from 'meteor/meteor';
import { BiocIdentitiesCollection } from '/imports/db/BiocIdentitiesCollection';

Meteor.publish('biocidentities', function publishBiocIdentities() {
    return BiocIdentitiesCollection.find();
});
