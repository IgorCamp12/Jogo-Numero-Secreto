let listaDeNumerosSorteados = [];   
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function TextoNaTela(tag, texto){
    let campos = document.querySelector(tag);
    campos.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemNaTela(){
    TextoNaTela ('h1', 'Jogo do número secreto');
    TextoNaTela ('p', 'Escolha um número de 1 a 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        TextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'Tentativas' : 'Tentativa';
        let numeroTentativas = `Você acertou com ${tentativa} ${palavraTentativa}!`;
        TextoNaTela ('p', numeroTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            TextoNaTela ('p', 'O número secreto é menor');
        } else {
            TextoNaTela ('p', 'O número secreto é maior');    
        }  
        tentativa++;
        limparTela ();
    } 
}

mensagemNaTela();

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroEscolhido){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparTela() {
    chute = document.querySelector('input');
    chute.value = ''; 
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    tentativa = 1;
    mensagemNaTela();
    document.getElementById('reiniar').setAttribute('disabled', true);
}