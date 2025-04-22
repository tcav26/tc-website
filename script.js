

document.addEventListener('DOMContentLoaded', function() {


    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {

            mobileMenu.classList.toggle('open');
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('hidden'); 
            } else {

                mobileMenu.classList.add('hidden'); 
            }



        });
    }

/* Adapted potions of code from Google Gemini and validate code */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

   

    console.log("Website scripts loaded."); 
});
