const avo = document.querySelector(".quadradoAvo");
const pai = document.querySelector(".quadradoPai");
const filho = document.querySelector(".quadradoFilho");

 avo.addEventListener("click", e => {
     console.log("Cliquei Avo");
 }
 )


 pai.addEventListener("click", e => {
     console.log("Cliquei Pai");
 })

 filho.addEventListener("click", e => {
     console.log("Cliquei Filho");
 })

 pai.addEventListener("click", e => {
     console.log("Cliquei Pai");
 }, true)

avo.addEventListener("click", e => {
    console.log("Cliquei Avo");
}, true)



 filho.addEventListener("click", e => {
     console.log("Cliquei Filho");
 }, true)
