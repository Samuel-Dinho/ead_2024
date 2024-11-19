/*
1) Classificação por Idade: Escreva um programa que classifica uma pessoa
em categorias de idade: 'criança' (menos de 13 anos), 'adolescente' (entre 13 e
17 anos), 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a
estrutura if/else/else if.

2) Jogo de Adivinhação com Switch: Desenvolva um jogo simples de
adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. Use
switch para verificar a escolha e imprimir se acertou ou não.

3) Avaliação de Notas: Crie um programa que, dada uma nota de um aluno,
classifica a nota como 'Reprovado' (menos de 6), 'Recuperação' (entre 6 e 7),
ou 'Aprovado' (mais de 7). Use switch.
*/
function idade() {
    var input = document.getElementById('info').value;
    var resposta = document.getElementById('resultado');
    if (input < 13 && input > 0) {
        resposta.innerHTML = "Resultado: Criança";
    }
    else if (input >= 13 && input <= 17) {
        resposta.innerHTML = "Resultado: Adolescente";
    }
    else if (input == 18 && input < 64) {
        resposta.innerHTML = "Resultado: Adulto";
    } else if (input >= 65) {
        resposta.innerHTML = "Resultado: Idoso";
    } else {
        resposta.innerHTML = "Insira um numero valido";
    }

};

function envSwitch() {
    var input = document.getElementById('input-resposta').value;
    var resposta = document.getElementById('resultadoSwitch');
    var numero = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(numero);
    if (numero == input) {
        resposta.innerHTML = "Parabéns voce acertou o numero de 1 à 5";
    } else {
        resposta.innerHTML = "Infelizmente vc errou, tente novamente!";
    }

}

function envNota(){
    var inputNota = document.getElementById('input-nota').value;
    var resposta = document.getElementById('resultadoNota');
    var resultado;
    
    if (inputNota < 6  ){
        resultado = 1;
    }else if (inputNota <= 7 && inputNota >= 6){
        resultado = 2;
    }else if(inputNota > 7 ){
        resultado = 3;
    }
    switch(resultado){
        case 1:
            resposta.innerHTML ='Reprovado';
            break;

        case 2:
            resposta.innerHTML ='Recuperação';
            break;

        case 3:
            resposta.innerHTML ='Aprovado';
            break;
    }

}