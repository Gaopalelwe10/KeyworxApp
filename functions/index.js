const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
admin.initializeApp();

exports.aggregateComments = functions.firestore
    .document('spazashop/{spazaId}/comments/{commentId}')
    .onWrite((change, context) => {

        const commentId = context.params.commentId;
        const spazaId = context.params.spazaId;
        console.log(spazaId + "===jjjj===" + commentId)
            // ref to the parent document
        const docRef = admin.firestore().collection('spazashop').doc(spazaId)

        // get all comments and aggregate
        return docRef.collection('comments').orderBy('createdAt', 'desc')
            .get()
            .then(querySnapshot => {

                // get the total comment count
                const commentCount = querySnapshot.size

                const data = { commentCount }
                console.log(spazaId + "===jjjj===" + commentId)
                    // run update
                return docRef.update(data)
            })
            .catch(err => console.log(err))
    });