const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto =  gerarNumeroAleatorio();
console.log(numeroSecreto );

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1 );
    
}


const menor = document.querySelector('#menor-valor')
menor.innerHTML = menorValor;

const maior = document.querySelector('#maior-valor');
maior.innerHTML = maiorValor;