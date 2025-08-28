// Open and close the side menu using class toggle
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const sideMenu = document.getElementById('sideMenu');

openMenuBtn.addEventListener('click', function() {
    sideMenu.classList.add('active'); // Adds active class to show menu
});

closeMenuBtn.addEventListener('click', function() {
    sideMenu.classList.remove('active'); // Removes active class to hide menu
});