const btncontainer = document.querySelector(".burger_container");
const btnmenu = document.querySelector(".burger_menu");
let menuOpen = false;
btncontainer.addEventListener("click", function(){
    console.log("Clicked");
    if(!menuOpen){
        btncontainer.classList.add("open");
        btnmenu.classList.add("open");
        menuOpen = true;
    }
    else{
        btncontainer.classList.remove("open");
        btnmenu.classList.remove("open");
        menuOpen = false;
    }
})