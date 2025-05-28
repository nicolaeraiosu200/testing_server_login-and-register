const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

let passwords = [];

// Încarcă parolele existente
if (fs.existsSync('passwords.json')) {
  passwords = JSON.parse(fs.readFileSync('passwords.json'));
}

// Salvează o nouă parolă
app.post('/save-password', (req, res) => {
  const { email, password } = req.body;
  passwords.push({ email, password, timestamp: new Date() });
  fs.writeFileSync('passwords.json', JSON.stringify(passwords, null, 2));
  res.send("Parolă salvată!");
});

// Afișează toate parolele
app.get('/get-passwords', (req, res) => {
  res.json(passwords);
});

app.listen(3000, () => console.log('Server rulează pe http://localhost:3000'));
