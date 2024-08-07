let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

window.onscroll= () =>{
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}

