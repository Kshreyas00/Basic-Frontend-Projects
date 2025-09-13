const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('Navbar');
const cross  = document.getElementById('cross');

hamburger.addEventListener('click', function() {
    navbar.classList.toggle('show');
    hamburger.style.display = 'none';
    cross.style.display = 'block';
});

cross.addEventListener('click', function() {
    navbar.classList.remove('show'); // For nav bar closing 
    cross.style.display = 'none'; // For cross icon closing 
    hamburger.style.display = 'block'; // for hamburger show again
});