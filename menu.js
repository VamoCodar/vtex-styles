const topMenu = document.querySelector(".header__top-menu")
const headercontent = document.querySelector(".header__content")
headercontent.appendChild(topMenu)


function menuPreenchido() {
    const menuFixo = document.querySelectorAll(".menu");
    menuFixo.forEach((i) => {
        if (window.pageYOffset >= 120) {
            document.body.classList.add("ativo__scroll");

        } else if (window.pageYOffset < 150) {
            document.body.classList.remove("ativo__scroll");
        }
    });
}
menuPreenchido();
window.addEventListener("scroll", menuPreenchido);


window.onscroll = function (e) {
    
    let posicao = this.oldScroll > this.scrollY

    this.oldScroll = this.scrollY;
    if (posicao) {
        document.body.classList.add("subiu")
        document.body.classList.remove("desceu")

    } else {
        document.body.classList.remove("subiu")
        document.body.classList.add("desceu")


    }

}
