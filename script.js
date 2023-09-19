// script.js
function toggleMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show-menu');
}

function toggleSection(sectionId) {
    const sectionContent = document.getElementById(sectionId).querySelector('.section-content');
    if (sectionContent.style.display === 'block') {
        sectionContent.style.display = 'none';
    } else {
        sectionContent.style.display = 'block';
        sectionContent.classList.add('show-content'); // Add a fade-in animation
    }
}
