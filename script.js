function toggleClass(){
    let menu = document.querySelector("ul.nav-links");
    menu.classList.toggle("toggleCls");
}

let humburger = document.querySelector(".ham-icon");

humburger.addEventListener("click", toggleClass);