document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.querySelector('.preloader');

    window.addEventListener('load', function () {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        backToTopBtn.classList.toggle('active', window.scrollY > 300);
    });

    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Resume Modal
    const resumeButton = document.getElementById('resume-button');
    const resumeModal = document.getElementById('resume-modal');
    const closeModal = document.querySelector('.close-modal');
    const downloadResume = document.getElementById('download-resume');

    if (resumeButton) {
        resumeButton.addEventListener('click', function (e) {
            e.preventDefault();
            resumeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function () {
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (downloadResume) {
        downloadResume.addEventListener('click', function (e) {
            e.preventDefault();
            // Replace with your actual resume file path
            const resumeUrl = 'RESUMENARENDRA.pdf';

            // Create a temporary link to trigger download
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'RESUMENARENDRA.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Close the modal
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target === resumeModal) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Form Submission with Popup
    const contactForm = document.getElementById('contact-form');
    const formPopup = document.getElementById('form-popup');
    const closePopup = document.querySelector('.close-popup');
    const copyEmailBtn = document.querySelector('.copy-email');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show the popup instead of submitting
            formPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close popup
    if (closePopup) {
        closePopup.addEventListener('click', function () {
            formPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Copy email function
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function () {
            navigator.clipboard.writeText('narendraprajapat4455@gmail.com')
                .then(() => {
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = 'Copy Email';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    }

    // Close popup when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target === formPopup) {
            formPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Animation on Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate__animated');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                const animationClass = element.classList[1];
                element.classList.add('animate__fadeIn');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});


// skills section
// Add this script for scroll-triggered animations
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress');

    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (barPosition < screenPosition) {
                bar.style.width = width + '%';
            }
        });
    }

    // Run once on page load
    animateProgressBars();

    // Run on scroll
    window.addEventListener('scroll', animateProgressBars);
});

// Add this subtle cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});