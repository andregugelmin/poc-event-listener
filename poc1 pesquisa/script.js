const input = document.querySelector("input");
const mensagem = document.querySelector("p");

input.addEventListener("keydown" , e => {   
    const span1 = document.querySelector(".span1");
    const span2 = document.querySelector(".span2");

    span1.innerHTML = `Key Code = ${e.code}`;
    span2.innerHTML = `Key = ${e.key}`;

    if(e.code === "Enter"){
        mensagem.innerHTML = input.value;
        input.value = "";
        
    }
})