const form = document.querySelector("form");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Ouvre / ferme le menu quand on clique sur le burger
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Ferme le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

form.addEventListener("submit", function () {
  // On attend un petit moment après l’envoi automatique
  setTimeout(() => {
    form.reset();
  }, 500); // délai court pour laisser Formspree lire les données
});

