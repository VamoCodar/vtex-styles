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


const imagens = document.querySelectorAll(".B8T-Home .page .main-banners img")

function geraContent(){
    imagens.forEach((i)=>{
        const atributoAlt = i.alt
        console.log(atributoAlt);

        i.parentElement.setAttribute("alt",atributoAlt )

    })
    
}
geraContent()

const arrowNext = document.querySelector(".B8T-Home .slick-next")
const arrowPrev = document.querySelector(".B8T-Home .slick-prev")

arrowNext.innerHTML=`<ion-icon name="chevron-back-outline"></ion-icon>`
arrowPrev.innerHTML=`<ion-icon name="chevron-forward-outline"></ion-icon>`