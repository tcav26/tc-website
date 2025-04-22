// script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            // Toggle the 'hidden' class to show/hide
            // mobileMenu.classList.toggle('hidden'); // Simple toggle

            // Toggle using max-height transition (requires CSS)
            mobileMenu.classList.toggle('open');
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('hidden'); // Ensure it's not hidden if opening
            } else {
                 // Optional: Add delay before hiding to allow animation
                // setTimeout(() => {
                //     mobileMenu.classList.add('hidden');
                // }, 300); // Match CSS transition duration
                mobileMenu.classList.add('hidden'); // Hide immediately if preferred
            }


            // Optional: Change button icon (e.g., to an 'X')
            // You would need two icons in your HTML and toggle their visibility
        });
    }

    // --- Footer Current Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Optional: Smooth Scrolling for Anchor Links ---
    // Note: CSS `scroll-behavior: smooth;` often handles this, but JS offers more control if needed.
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // --- Optional: Populate Contact Form Package based on URL Parameter ---
    // (If you uncomment the contact form in contact.html)
    // const urlParams = new URLSearchParams(window.location.search);
    // const packageParam = urlParams.get('package');
    // const packageSelect = document.getElementById('package');

    // if (packageParam && packageSelect) {
    //     packageSelect.value = packageParam;
    // }

    console.log("Website scripts loaded."); // For debugging
});
