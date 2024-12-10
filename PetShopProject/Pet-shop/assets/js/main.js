const navtagglebtn=document.querySelector("[data-nav-toggle]");
const navbar=document.querySelector("[data-navbar]");
const header=document.querySelector("[data-header]");
const menuicon=document.querySelector(".menu-icon");
const closeicon=document.querySelector(".close-icon");

navtagglebtn.addEventListener("click",()=>{
    navbar.classList.toggle("active");

closeicon.style.display=navbar.classList.contains("active")?'block':'none';
menuicon.style.display=navbar.classList.contains("active")?'none':'block';
})