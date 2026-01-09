// show menu

const showMenu = (navToggle, navMenu) =>{
    const toggle = document.getElementById(navToggle),
    nav = document.getElementById(navMenu)    
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show_menu')
    })
}
showMenu('navToggle','navMenu')