let isSideMenuOpen = false;
/* var to track state of side menu which is false by default
                            (of course, it matters only for smaller screens where toggle menu is displayed)*/

document.addEventListener('DOMContentLoaded', function () {

    let backdrop = document.querySelector('.backdrop');
    let menuToggleButton = document.querySelector('.top-nav-toggle-menu-icon');
    let sideNavBar = document.querySelector('.side-nav-container');
    let footerText = document.querySelector('.footer-copyright-text');


    //display a backdrop, show side menu & toggle the state of menu ,when hamburger menu is clicked
    menuToggleButton.addEventListener('click', function () {
        backdrop.classList.toggle('show-backdrop');
        sideNavBar.classList.toggle('side-nav-container-open');
        isSideMenuOpen = !isSideMenuOpen;
    });

    //remove side menu as well as the backdrop itself when the backdrop is clicked(only for smaller screens)
    backdrop.addEventListener('click', function () {
        sideNavBar.classList.remove('side-nav-container-open');
        backdrop.classList.remove('show-backdrop');
    });
    //***********Setting the current year in copyright text in footer*******//

    footerText.innerHTML = `Copyright &copy ${new Date().getFullYear()} Ancient Astrology. All rights reserved.`;
});


