let menu = document.querySelector("#menu-bars");
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
window.onscroll=()=>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active')
}
document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
    
}