const header = document.querySelector('.header');

const scrollY = () => {
    posicion = window.scrollY || window.pageYOffset;
    let scrollLimit = 0;

    posicion > scrollLimit ?  header.classList.add('header_sticky') : header.classList.remove('header_sticky')
}

window.addEventListener('scroll', scrollY)