document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                }
            }
        });
    });
});

function updateGraosLink() {
    const size = document.getElementById('graos-size').value;
    const btn = document.getElementById('btn-graos');
    const phone = "5519992057955";
    const text = `Olá, gostaria de comprar o Café em Grãos (${size})`;
    btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
