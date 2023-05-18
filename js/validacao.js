function valorValido(chute){
    const numero = +chute

    if(Number.isNaN(numero)){
        mensagem.innerHTML += '<div>Valor inválido</div>';
    }

    if(numero < menorValor || numero > maiorValor){
        mensagem.innerHTML += `<div>Valor inválido: o número precisa está entre ${menorValor} e ${maiorValor}</div>`;
    }

    if (numero < numeroSecreto){
        mensagem.innerHTML +='<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>';
    }
    if(numero > numeroSecreto){
       mensagem.innerHTML+= '<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>';
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você acertou!!!!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id ="bnt-jogar">Jogar novamente</button>

        `
    }

    document.querySelector('#bnt-jogar').addEventListener('click', e => window.location.reload())
}