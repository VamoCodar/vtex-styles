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