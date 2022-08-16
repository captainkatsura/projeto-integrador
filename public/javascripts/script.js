// window.addEventListener('load', () => {

//     // local storage --tentativa carrinho
//     localStorage.setItem('carrinho', []);
//     let localName = localStorage.getItem('name-local');

//     console.log(localName)
    
// })


// seguindo indiano do youtube //


let cart = document.querySelectorAll(".button-carrinho");
console.log(cart)
//OK! mostra carrinho no console //


const personasprices = document.querySelectorAll(".preco");
console.log(personasprices)

//agora um loop que passeia pelos elementos do array : : //
for(let i = 0; i < cart.length; i++){
    cart[i].addEventListener('click', () => {
        totalCost(personasprices[i])
    })
}

function totalCost(persona){
    localStorage.setItem('totalCost', personasprices)
}
