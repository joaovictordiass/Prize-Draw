const clickButton = document.querySelector("button")

function generateNumber() {
    const inputMin = Math.ceil(document.querySelector(".input-min").value) // ARREDONDA O VALOR PARA BAIXO
    const inputMax = Math.floor(document.querySelector(".input-max").value) // ARREDONDA O VALOR PARA CIMA
    
    const result = Math.floor(Math.random() * (inputMax - inputMin) + inputMin);
    alert(result)
}


clickButton.addEventListener("click", generateNumber)