const hamburguesa = document.querySelector('.menu__hamburguesa');
const navbar = document.querySelector('#navbar');


hamburguesa.addEventListener('click',()=>{

    navbar.classList.toggle('nav__open');
    hamburguesa.classList.toggle('hamburguesa__activa');
});
