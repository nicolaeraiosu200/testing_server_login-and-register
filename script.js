// Verifică dacă există un utilizator autentificat
document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser && window.location.pathname.includes('index.html') === false) {
        window.location.href = 'index.html';
    }
    
    if (loggedInUser && document.getElementById('displayUsername')) {
        document.getElementById('displayUsername').textContent = `Bună, ${loggedInUser}!`;
    }
    
    // Buton de logout
    if (document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'login.html';
        });
    }
    
    // Formular de înregistrare
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Încărcăm utilizatorii existenți
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Verificăm dacă utilizatorul există deja
            if (users.some(user => user.username === username)) {
                alert('Numele de utilizator există deja!');
                return;
            }
            
            // Adăugăm noul utilizator
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            // Autentificăm automat utilizatorul
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'index.html';
        });
    }
    
    // Formular de login
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            
            // Încărcăm utilizatorii existenți
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Căutăm utilizatorul
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                localStorage.setItem('loggedInUser', username);
                window.location.href = 'index.html';
            } else {
                alert('Nume de utilizator sau parolă incorectă!');
            }
        });
    }
});
