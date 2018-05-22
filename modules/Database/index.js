const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'trackjoin-96fe9',
  keyFilename: './key/trackjoin.json',
});

module.exports = firestore;