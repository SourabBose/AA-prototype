

let sideMenuOpen = false;

document.addEventListener('DOMContentLoaded',function(){
                //*****************Top Navigation Hamburger Menu Stuff***********//
    document.querySelector('.top-nav-toggle-menu-icon').addEventListener('click',function(e){
        sideMenuOpen = !sideMenuOpen;
        // console.log(sideMenuOpen);
        document.querySelector('.side-nav-container').classList.toggle('side-nav-container-open');
    });

         //***********Setting the current year in copyright text in footer*******//
    document.querySelector('.footer-copyright-text')
            .innerHTML = `Copyright &copy ${new Date().getFullYear()} Ancient Astrology. All rights reserved.`;
});


