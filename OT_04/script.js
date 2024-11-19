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
function idade(){
    var input = document.getElementById('info').value;
    var resposta = document.getElementById('resultado');
    console.log(input);
    if (input < 13){
        resposta.innerHTML = "criança";
    }
    else if (input == 13 || input <= 17){
        resposta.innerHTML = "adolescente";
    }
    else if (input == 18 && input < 64){
        resposta.innerHTML = "adulto";
    }else{
        resposta.innerHTML = "idoso";
    }

};