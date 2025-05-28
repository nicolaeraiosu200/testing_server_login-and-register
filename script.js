// Configurare Firebase
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "nume-proiect.firebaseapp.com",
  projectId: "nume-proiect",
  storageBucket: "nume-proiect.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Initializează Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Înregistrare nou utilizator
auth.createUserWithEmailAndPassword(email, password)
  .then(() => { /* Redirecționează către pagina principală */ })
  .catch(err => alert("Eroare: " + err.message));

// Autentificare
auth.signInWithEmailAndPassword(email, password)
  .then(() => { /* Utilizator logat */ });
