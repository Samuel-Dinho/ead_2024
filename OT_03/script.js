/*
Criando um loop: Crie um loop for que imprima números de 0 a 10.
2. Loop com condição: Crie um loop for que imprima somente números
ímpares de 0 a 20.
3. Usando while: Crie um loop while que imprima números de 0 a 10.

4. Interrompendo um loop: Crie um loop for que imprima números de 0 a
100, mas interrompa a execução quando chegar ao número 50.

5. Pulando uma iteração: Crie um loop for que imprima números de 0 a
20, mas pule a impressão do número 13.

6. Iterando um Array: Crie um array de nomes e use um loop for...of
para imprimir cada nome do array.
*/

function loop1() {
    var elemento_pai = document.getElementById("resultado");
    var info = document.createElement('span');
    elemento_pai.innerHTML = '';

    info.innerHTML = "Resultado do primeiro exercicio </br>";
    elemento_pai.appendChild(info);

    for (let i = 0; i <= 10; i++) {
        var titulo = document.createElement('span');
        elemento_pai.appendChild(titulo);
        titulo.innerHTML = i + "</br>";

    }
};
function loop2() {
    const elemento_pai = document.getElementById("resultado");
    elemento_pai.innerHTML = ' ';
    var info = document.createElement('span');
    info.innerHTML = "Resultado do segundo exercicio </br>";
    elemento_pai.appendChild(info);
    for (let i = 0; i <= 20; i++) {
        if (i % 2 != 0) {
            var titulo = document.createElement('span');
            elemento_pai.appendChild(titulo);
            titulo.innerHTML = i + "</br>";
        }
    }

};
function limpar() {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
};


function whiles() {
    let i = 0;
    const elemento_pai = document.getElementById("resultado");
    elemento_pai.innerHTML = ' ';
    var info = document.createElement('span');
    info.innerHTML = "Resultado do terceiro exercicio </br>";
    elemento_pai.appendChild(info);
    while (i <= 10) {
        var titulo = document.createElement('span');
        elemento_pai.appendChild(titulo);
        titulo.innerHTML = i + "</br>";

        i++;
    }
};

function loop3() {
    var elemento_pai = document.getElementById("resultado");
    var info = document.createElement('span');
    elemento_pai.innerHTML = '';

    info.innerHTML = "Resultado do quarto exercicio </br>";
    elemento_pai.appendChild(info);

    for (let i = 0; i <= 100; i++) {
        var titulo = document.createElement('span');
        elemento_pai.appendChild(titulo);
        
        titulo.innerHTML = i + "</br>";
        if (i == 50) {
            break;
        }
    }
};
function loop4() {
    var elemento_pai = document.getElementById("resultado");
    var info = document.createElement('span');
    elemento_pai.innerHTML = '';

    info.innerHTML = "Resultado do Quinto exercicio </br>";
    elemento_pai.appendChild(info);

    for (let i = 0; i <= 20; i++) {
        var titulo = document.createElement('span');
        elemento_pai.appendChild(titulo);
        
        
        if (i != 13) {
            titulo.innerHTML = i + "</br>";
        }
    }
};

function array(){
    var elemento_pai = document.getElementById("resultado");
    var info = document.createElement('span');
    elemento_pai.innerHTML = '';
    info.innerHTML = "Resultado do Sexto exercicio </br>";
    elemento_pai.appendChild(info);
let nomes = ['Samuel','Sabrina','Maia','Mota','Junior'];
 for(let nome of nomes){
    var titulo = document.createElement('span');
    elemento_pai.appendChild(titulo);
    titulo.innerHTML = nome + "</br>";
 }
};