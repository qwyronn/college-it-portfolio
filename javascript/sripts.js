document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.project-image img, .team-photo img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.6s ease-out';
        setTimeout(() => {
            img.style.opacity = '1';
        }, 300);
    });
});