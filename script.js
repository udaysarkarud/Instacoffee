let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onClick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}