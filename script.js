const path = window.location.pathname;
const hiddenEllements = document.querySelectorAll('.hidden');
const backToTopBtn = document.getElementById('backToTopBtn');



function highlightCurrentPage() {

    if (path.includes('index.html')) {
        document.getElementById('navwork').classList.add('highlight');
    } else if (path.includes('contact.html')) {
        document.getElementById('navcontact').classList.add('highlight');
    } else if (path.includes('aboutme.html')) {
        document.getElementById('navabout').classList.add('highlight');
    }
}

highlightCurrentPage();


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
    });
});
hiddenEllements.forEach((el) => observer.observe(el));


backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


