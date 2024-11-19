/*
1. Função que Calcula a Área de um Retângulo: Crie uma função que
calcula a área de um retângulo dado largura e altura.

2. Função para Verificar Número Par: Faça uma função que recebe um
número e retorna true se for par e false se for ímpar.

3. Converter Polegadas em Centímetros: Escreva uma função que
converte polegadas em centímetros.

4. IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).

5. Maiúsculas para Minúsculas: Crie uma função que recebe uma string e
retorna a mesma string em letras minúsculas.

6. Crie uma arrow function chamada multiplicaPorDez que recebe um
número como parâmetro e retorna o valor multiplicado por 10.
*/

function calculaArea(){
    var altura = document.getElementById('calculaAltura').value;
    var base = document.getElementById('calculaBase').value;
    var resposta =document.getElementById('resultado1');
    resultado = altura * base;
    resposta.innerHTML='A area de do Retangulo é ' + resultado;
};
function numeroPar(){
    var numero = document.getElementById('veriNumero').value;
    var resposta2 = document.getElementById('resultado2');
    ( numero % 2 ) === 0 ?  resposta2.innerHTML = numero + ' é par' : resposta2.innerHTML = numero + ' não é par' ;
};
function convertePolegadas(){
    var polegadas = document.getElementById('polegadas').value;
    var calculo3 = polegadas * 2.54;
    var resposta3 = document.getElementById('resultado3');
    if(polegadas == null || polegadas == ""){
        resposta3.innerHTML='Favor inserir um valor';
    }else{
        resposta3.innerHTML='A conversão para centimetros é :' + calculo3;
    }
};

function IMC(){
    
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var calculaImc = peso / altura;
    var resultado4 = document.getElementById('resultado4');
    if((peso == null || peso == "") || (altura == null || altura == "")){
        resultado4.innerHTML = 'Insira os valores';
    }else
    resultado4.innerHTML = 'Seu IMC é de : ' + calculaImc;
};

function Multiplica(){
    var numero = document.getElementById('multiplica').value;
    var multiplicaPorDez = (numero) => numero * 10;
    var resultado6 = document.getElementById('resultado6');
    resultado6.innerHTML = "O "+ numero +" multiplicado por 10 é igual a: " + multiplicaPorDez(numero);
}
function ConverteString(){
    var string = document.getElementById("string").value;
    var resultado5 = document.getElementById('resultado5');

    resultado5.innerHTML = string.toLowerCase();
}