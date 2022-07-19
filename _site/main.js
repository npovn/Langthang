window.addEventListener("scroll", function(){
    const Parallax = document.querySelector(".parallax");
    let offsetY = this.window.scrollY;
    Parallax.style.transform = "translateY(" + offsetY * 0.7 + "px)";
})

window.addEventListener("scroll", function(){
    const Parallax = document.querySelector(".parallax1");
    let offsetY = this.window.scrollY;
    Parallax.style.transform = "translateY(" + offsetY + "px)";
})

