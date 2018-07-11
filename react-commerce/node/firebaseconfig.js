const firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyAvUt3vYmVT6fTGaMfFyLLzqgRzliW7aCI",
    authDomain: "react-commerce.firebaseapp.com",
    databaseURL: "https://react-commerce.firebaseio.com",
    projectId: "react-commerce",
    storageBucket: "react-commerce.appspot.com",
    messagingSenderId: "845393034206"
}); 

module.exports=firebase;