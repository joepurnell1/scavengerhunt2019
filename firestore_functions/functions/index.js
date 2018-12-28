require("firebase/firestore");

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addScore = functions.firestore
    .document('TEAMS/{teamId}')
    .onWrite((change, context) => {
      let total = change.after.data().individualScores.reduce((total, num) => (total + num));

      admin.firestore().collection('TEAMS').doc(context.params.teamId)
      .update({
        totalScore: total
      })
      .catch(e => {
        console.log('error', e);
      });

      return null;
    });