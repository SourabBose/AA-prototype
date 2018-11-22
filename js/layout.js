
// let isLargeScreen = (screen.width >= 1024)? true : false;
let sideMenuOpen = false; //keeps track of whether currently the side menu is open or closed
                          // side menu should be close by default for smaller screens;

document.addEventListener('DOMContentLoaded',function(){

                //*****************Top Navigation Hamburger Menu Stuff***********//
    document.querySelector('.top-nav-toggle-menu-icon').addEventListener('click',function(e){
        sideMenuOpen = !sideMenuOpen; //toggle the current state
        //display/un-display the side NavBar
        document.querySelector('.side-nav-container').classList.toggle('side-nav-container-open');
        //display/un-display the backdrop on top of everything except side and top NavBar
        document.querySelector('.backdrop').classList.toggle('show-backdrop');
    });

         //***********Setting the current year in copyright text in footer*******//
    document.querySelector('.footer-copyright-text')
            .innerHTML = `Copyright &copy ${new Date().getFullYear()} Ancient Astrology. All rights reserved.`;
});


