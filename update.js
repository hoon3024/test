const admin = require("firebase-admin");

const serviceAccount = require("./a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-64a44.firebaseio.com"
});



         
console.log(admin);

const db = admin.firestore();





function updateDocument(db) {
  // [START update_document]
  let updateRef = db.collection('felix').doc('createdate');

  // Set the 'capital' field of the city
  let updateSingle = updateRef.update({False: 1});
  // [END update_document]

  return Promise.all([updateSingle]).then(res => {
    console.log('Update: ', res);
  });
}

  
updateDocument(db);
  