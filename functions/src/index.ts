const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


let _ = require('lodash');
const admin = require('firebase-admin');
admin.initializeApp();

exports.aggregateReactions = functions.firestore
    .document('favourite/{propertyId}')
    .onWrite((change: any, context: { params: { propertyId: any; }; }) => {

        const propertyId = context.params.propertyId;
        const docRef = admin.firestore().collection('properties').doc(propertyId)

        admin.firestore().collection('favourite').doc(propertyId)
            .onSnapshot((doc: { data: () => any; }) => {
                console.log("Current data: ", doc.data());

                let data 
                let reactionCount = _.mapValues(_.groupBy(doc.data()), 'length')[0]
                if (reactionCount === undefined) {
                    reactionCount = 0;
                    data = { reactionCount }
                } else {
                    data = { reactionCount }
                }
                // const reactionCount = _.mapValues(_.groupBy(doc.data()), 'length')[0]
                // const data = { reactionCount }
                console.log(propertyId + "===jjjj===" + data + "jjj =" + reactionCount)
                    // run update
                return docRef.update(data)
            });

    });

exports.aggregateReactionsUpdate = functions.firestore
    .document('favourite/{propertyId}')
    .onUpdate((change: any, context: { params: { propertyId: any; }; }) => {

        const propertyId = context.params.propertyId;
        const docRef = admin.firestore().collection('properties').doc(propertyId)

        admin.firestore().collection('favourite').doc(propertyId)
            .onSnapshot((doc: { data: () => any; }) => {
                console.log("Current data: ", doc.data());

                let data 
                let reactionCount = _.mapValues(_.groupBy(doc.data()), 'length')[0]
                if (reactionCount === undefined) {
                    reactionCount = 0;
                    data = { reactionCount }
                } else {
                    data = { reactionCount }
                }
                // const reactionCount = _.mapValues(_.groupBy(doc.data()), 'length')[0]
                // const data = { reactionCount }
                console.log(propertyId + "===jjjj===" + data + "jjj =" + reactionCount)
                    // run update
                return docRef.update(data)
            });

    });

    