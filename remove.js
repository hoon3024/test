const admin = require("firebase-admin");

const serviceAccount = require("./a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-64a44.firebaseio.com"
});



         
console.log(admin);

const db = admin.firestore();





function updateDeleteField(db) {
  
    let FieldValue = require('firebase-admin').firestore.FieldValue;
  
    // Create a document reference
    let deleteRef = db.collection('felix').doc('createdate');
  
    // Remove the 'capital' field from the document
    let removeCapital = deleteRef.update({
      False: FieldValue.delete()
    });
    
  
    return removeCapital.then(res => {
      console.log('Update: ', res);
    });
  }
  
  updateDeleteField(db);
  