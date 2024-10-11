const menuToggle = document.getElementById('menuToggle');
const closeNav = document.getElementById('closeNav');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
});

closeNav.addEventListener('click', () => {
    mobileNav.classList.add('translate-x-full');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    mobileNav.classList.add('translate-x-full');
    overlay.classList.add('hidden');
});