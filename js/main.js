let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu');

function MenuItem (){
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}

menu.addEventListener('click', MenuItem);
