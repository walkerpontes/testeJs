const mensagem = document.querySelector('.mensagem');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang='pt-Br';
recognition.start();

recognition.addEventListener('result',onSpeak);

function onSpeak(event){
    chute = event.results[0][0].transcript;
    exibirMensagem(chute);
    valorValido(chute);
}

function exibirMensagem(valor){
    return mensagem.innerHTML =`
    <div>Voce disse:</div>
        <span class="box">${valor}</span>
    ` ;
}

recognition.addEventListener('end', () => recognition.start());

