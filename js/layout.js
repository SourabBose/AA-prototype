// let isLargeScreen = (screen.width >= 1024)? true : false;
let sideMenuOpen = false; //keeps track of whether currently the side menu is open or closed
                          // side menu should be close by default for smaller screens;

document.addEventListener('DOMContentLoaded', function () {

    let backdrop = document.querySelector('.backdrop');
    let menuToggleButton = document.querySelector('.top-nav-toggle-menu-icon');
    let sideNavBar = document.querySelector('.side-nav-container');
    let footerText = document.querySelector('.footer-copyright-text');

    //remove side menu as well as the backdrop itself when the backdrop is clicked
    backdrop.addEventListener('click', function (e) {
        sideNavBar.classList.remove('side-nav-container-open');
        backdrop.classList.remove('show-backdrop');
    });

    //toggle the side menu and backdrop when hamburger menu is clicked
    menuToggleButton.addEventListener('click', function (e) {
        sideMenuOpen = !sideMenuOpen; //toggle the var that keeps track of current state of side menu
        //display/un-display the side NavBar
        sideNavBar.classList.toggle('side-nav-container-open');
        //display/un-display the backdrop on top of everything except side and top NavBar
        backdrop.classList.toggle('show-backdrop');
    });

    //***********Setting the current year in copyright text in footer*******//

    footerText.innerHTML = `Copyright &copy ${new Date().getFullYear()} Ancient Astrology. All rights reserved.`;
});


