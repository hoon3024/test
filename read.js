const admin = require("firebase-admin");

const serviceAccount = require("./a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-64a44.firebaseio.com"
});



         
console.log(admin);

const db = admin.firestore();





function quickstartListen(db) {
 
  db.collection('felix').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error', err);
    });
  
}

  
    quickstartListen(db);
  