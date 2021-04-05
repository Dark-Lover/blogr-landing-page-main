let open_m=document.getElementById("opening");
let close_m=document.getElementById("closing");
function open_menu(){
    open_m.style.display="none";
    close_m.style.display="flex";
}
function close_menu(){
    open_m.style.display="flex";
    close_m.style.display="none";
}
let desk_menu=document.querySelector(".toggle");
let mobile_menu=document.querySelector(".mobile_menu");
function open_hamburger(){
    desk_menu.classList.toggle("active");
    mobile_menu.classList.toggle("active");
}
window.addEventListener("resize", function() {
    if(window.innerWidth>770){
        mobile_menu.classList.remove("active"); 
        desk_menu.classList.remove("active");
    }
});