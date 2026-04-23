/* =============================================
   PSU Phuket Scholarships - Main JS
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    // ---- Mobile Nav Toggle ----
    const toggler = document.getElementById('navbarToggler');
    const navbar = document.querySelector('.navbar');

    if (toggler && navbar) {
        toggler.addEventListener('click', function () {
            navbar.classList.toggle('nav-open');

            const lines = toggler.querySelectorAll('.hamburger-line');
            if (navbar.classList.contains('nav-open')) {
                lines[0].style.transform = 'translateY(7px) rotate(45deg)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                lines[0].style.transform = '';
                lines[1].style.opacity = '';
                lines[2].style.transform = '';
            }
        });
    }

    // ---- Dropdown on click (mobile) + hover (desktop) ----
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('open');
                dropdowns.forEach(function (other) {
                    if (other !== dropdown) other.classList.remove('open');
                });
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(function (d) { d.classList.remove('open'); });
        }
    });

    // ---- Navbar scroll shadow ----
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
        } else {
            nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
        }
    });

    // ---- Login Modal ----
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLoginModal();
    });

});

// ต้องอยู่นอก DOMContentLoaded เพราะ onclick ใน HTML เรียกตรงๆ
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLoginModal(event) {
    const modal = document.getElementById('loginModal');
    if (!modal) return;
    if (!event || event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}