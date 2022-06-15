let menu = document.querySelector( '.menu' );
let btn = document.querySelector( '.menu-btn' );
btn.addEventListener('click', () => {
    menu.classList.toggle('active')
    
})

let menu_i = document.querySelectorAll('.menu-i');

menu_i.forEach(element => {element.addEventListener('click', () => {
    menu.classList.toggle('active')
} )})

