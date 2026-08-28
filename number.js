let contador = 0

const number = document.querySelector(".zero")


const botaoMais = document.querySelector(".max")
const botaoMenos = document.querySelector(".min")


document.querySelector(".max").addEventListener("click",
    function(){
       contador = contador + 1
       number.textContent = contador
    }
)

document.querySelector(".min").addEventListener("click",
    function(){
        if (contador > 0){
        contador = contador - 1
        number.textContent = contador
        }
       
    } )