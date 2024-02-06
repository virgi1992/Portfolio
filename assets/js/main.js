const boton = document.querySelector(".boton");
const nav = document.querySelector("nav");

boton.addEventListener("click", ()=>{
    nav.classList.toggle("activo");
});