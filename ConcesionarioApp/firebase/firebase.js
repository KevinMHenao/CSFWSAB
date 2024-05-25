//crea un proyecto en react native para vender vehiculos enlazado a firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDoGp0ucA_xdmLtPIoaZkc0csj9-ACWyR4",
  authDomain: "concesionario-868f9.firebaseapp.com",
  projectId: "concesionario-868f9",
  storageBucket: "concesionario-868f9.appspot.com",
  messagingSenderId: "355887550353",
  appId: "1:355887550353:web:97662f80ba3fdef0479430",
  measurementId: "G-N3VGYS0NQR"
};

firebase.initializeApp(firebaseConfig);
