// Salvează parola pe server
async function savePassword(email, password) {
  const response = await fetch('http://localhost:3000/save-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return await response.text();
}

// Încarcă toate parolele
async function loadPasswords() {
  const response = await fetch('http://localhost:3000/get-passwords');
  const data = await response.json();
  console.log("TOATE PAROLELE:", data);
}
