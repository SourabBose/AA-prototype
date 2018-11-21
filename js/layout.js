let sideMenuOpen = false;

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.top-nav-toggle-menu-icon').addEventListener('click',function(e){
        sideMenuOpen = !sideMenuOpen;
        // console.log(sideMenuOpen);
        document.querySelector('.side-nav-container').classList.toggle('side-nav-container-open');
    });
});