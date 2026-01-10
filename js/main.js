// show menu

const showMenu = (navToggle, navMenu) =>{
    const toggle = document.getElementById(navToggle),
    nav = document.getElementById(navMenu)    
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show_menu')
    })
}
showMenu('navToggle','navMenu')


// active and remove menu

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('navMenu')
    // when we click on each nav__link, we remove the show_menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// add shadow to header

// const shadowHeader = () =>{
//     const header = document.getElementById('header')
//     this.scrollY >= 50 ? header.classList.add('shadow_header')
//                        : header.classList.remove('shadow_header')
// }
// window.addEventListener('scroll', shadowHeader)