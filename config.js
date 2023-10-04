import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui


    apiKey: "AIzaSyDEk8--3VrHyb-SUKJW_nEYuF-Ylpj6B3A",
  
    authDomain: "projeto78-8a134.firebaseapp.com",
  
    projectId: "projeto78-8a134",
  
    storageBucket: "projeto78-8a134.appspot.com",
  
    messagingSenderId: "42079417735",
  
    appId: "1:42079417735:web:3996cc9a3a3ffbeacc4f22"
  
 
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
