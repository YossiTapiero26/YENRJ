const navigation= document.querySelector('navbar');
window.addEventListener('scroll' , () => {

    if ( window.scrollY > 300) {
         navigation.classList.add ('anim-navbar');
    }
    else {
        navigation.classList.remove('anim-navbar');

    }

})