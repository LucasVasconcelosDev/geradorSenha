const tamanho = document.getElementById('tamanho')
const quantidade = document.getElementById('quantidade')

const minusculo = document.getElementById('minusculo')
const maiusculo = document.getElementById('maiusculo')
const numero = document.getElementById('numero')
const simbolo = document.getElementById('especiais')

function criar(){
    try{
        if(tamanho.value.length == 0 || quantidade.value.length == 0) throw "Insira o tamanho da senha e a quantidade de senhas a serem feitas"

        if(tamanho.value > 20 || tamanho.value < 1) throw "Digite um tamanho de senha entre 1 e 20 characteres"

        if(quantidade.value > 10 || quantidade.value < 1) throw "Digite a quantidade de senhas a serem geradas entre 1 a 10 senhas"

        textarea.textContent = "";
        const minusculas = "abcdefghijklmnopqrstuvwxyz"
        const maiusculas = "ABCÇDEFGHIJKLMNOPQRSTUVWXYZ"
        const numeros = "01234565789"
        const especiais = "!@#$%&*()+=-*./"
        let char = ""

        if(simbolo.checked) {

            char += especiais
        }

        if(maiusculo.checked) {

            char += maiusculas
        }

        if(numero.checked) {

            char += numeros
        }

        if(simbolo.checked) {

            char += minusculas
        }

        const senhas = [];
        let senhaPronta = ""

        for(let i = 0; i < quantidade.value; i++) {
            for(let j = 0; j < tamanho.value; j++) {

                const aleatorio = Math.floor(Math.random() * char.length)
                senhaPronta += char.substring(aleatorio, aleatorio + 1)
            }

            senhas.push(senhaPronta);
            senhaPronta = "";
        }

        senhas.forEach((senha) => {

            textarea.appendChild(document.createTextNode(senha + "\r\n"));
        })
    } catch(erro){
        alert(erro);
    }
}

function apagar() {

    tamanho.value = "";
    quantidade.value = "";
    textarea.textContent = "";
}