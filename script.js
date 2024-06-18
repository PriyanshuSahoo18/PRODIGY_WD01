document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
document.getElementById('exploreButton').addEventListener('click', function() {
    document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
})