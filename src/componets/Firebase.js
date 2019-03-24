const firebase = require('firebase')
var config = {
  apiKey: "AIzaSyAx3ZVsBlnsLxaIauSWAJPDcKtLsackbik",
  authDomain: "capitalonesummit-f1d87.firebaseapp.com",
  databaseURL: "https://capitalonesummit-f1d87.firebaseio.com",
  projectId: "capitalonesummit-f1d87",
  storageBucket: "capitalonesummit-f1d87.appspot.com",
  messagingSenderId: "219993220608"
};

firebase.initializeApp(config);
module.exports = firebase
