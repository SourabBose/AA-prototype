let isLargeScreen = screen.width >= 776;
let sideMenuOpen = isLargeScreen; //keeps track of whether currently the side menu is open or closed
                          // side menu should be close by default for smaller screens,
                            //but for larger screens, side menu should be open by default

document.addEventListener('DOMContentLoaded', function () {

    let backdrop = document.querySelector('.backdrop');
    let menuToggleButton = document.querySelector('.top-nav-toggle-menu-icon');
    let sideNavBar = document.querySelector('.side-nav-container');
    let footerText = document.querySelector('.footer-copyright-text');
    // if screen is large then show the side menu and make offset for main content and footer, initially
    if(isLargeScreen){
        sideNavBar.classList.add('side-nav-container-open');
        document.querySelector('.main-container').classList.add('main-container-offset');
        document.querySelector('.footer-container').classList.add('footer-container-offset');
    }

    //remove side menu as well as the backdrop itself when the backdrop is clicked(only for smaller screens)
    backdrop.addEventListener('click', function () {
        sideNavBar.classList.remove('side-nav-container-open');
        backdrop.classList.remove('show-backdrop');
    });

    //toggle the side menu and backdrop when hamburger menu is clicked
    menuToggleButton.addEventListener('click', function () {
        sideMenuOpen = !sideMenuOpen; //toggle the var that keeps track of current state of side menu
        //display/un-display the side NavBar
        sideNavBar.classList.toggle('side-nav-container-open');
        if(isLargeScreen){
            //make/un-make offset for main-content and footer due to side menu appearing(for larger screens)
            document.querySelector('.main-container').classList.toggle('main-container-offset');
            document.querySelector('.footer-container').classList.toggle('footer-container-offset');
        }else{
            //display/un-display the backdrop on top of everything except side and top NavBar(for smaller screens)
            backdrop.classList.toggle('show-backdrop');
        }

    });

    //***********Setting the current year in copyright text in footer*******//

    footerText.innerHTML = `Copyright &copy ${new Date().getFullYear()} Ancient Astrology. All rights reserved.`;
});


