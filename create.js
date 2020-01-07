const admin = require("firebase-admin");

const serviceAccount = require("./a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-64a44.firebaseio.com"
});



         
console.log(admin);

const db = admin.firestore();





function quickstartAddData(db) {
   
    let docRef = db.collection('felix').doc('createdate');
  
    let setAda = docRef.set({
      'score': {home:'0',away:'0'},
      'home': {a:"1",b:"2",c:"3",d:"4"},
      boolean: {True:true,False:false}
    });

  

  
    return Promise.all([setAda]);
  }

  
    quickstartAddData(db);
  