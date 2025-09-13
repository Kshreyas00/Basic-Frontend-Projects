const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('Navbar');
const cross  = document.getElementById('cross');

hamburger.addEventListener('click', function() {
    navbar.classList.toggle('show');
    hamburger.style.display = 'none';
    cross.style.display = 'block';
});

cross.addEventListener('click', function() {
    navbar.classList.remove('show'); // Navbar बंद करना
    cross.style.display = 'none'; // Cross छुपाना
    hamburger.style.display = 'block'; // Hamburger वापस दिखाना
});