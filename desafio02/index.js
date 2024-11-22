
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
//?
function somaValores(numero1, numero2) {
    return total = numero1 + numero2;
}
// Declare uma variável que receba a invocação da função criada acima,
//passando dois números quaisquer por argumento, e somando `5` ao resultado
//retornado da função.
//?
let valor = somaValores(1, 2);
valor = valor + 5;

// Qual o valor atualizado dessa variável?
//?7

// Declare uma nova variável, sem valor.
let variavel;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a
string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function recebeValor(valor) {
    return variavel = valor;
}


// Invoque a função criada acima.
let resultado = recebeValor("string");

// Qual o retorno da função? (Use comentários de bloco).
"String";
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função
deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando
`2` ao resultado da multiplicação.
*/
function argumentos(numero1, numero2, numero3) {
    if (!(numero1) || !(numero2) || !(numero3)) {
        return false;
    } else {
        return total = numero1 * numero2 * numero3 + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
let newValor = argumentos(1, 2);
// Qual o resultado da invocação acima? (Use comentários para mostrar o
//valor retornado).
//retornando falso;

// Agora invoque novamente a função criada acima, mas passando todos os
//três argumentos necessários.
newValor = argumentos(1, 2, 3);
// Qual o resultado da invocação acima? (Use comentários para mostrar o
//valor retornado).
//-resultado é 8
/*

Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.

2. Se somente um argumento for passado, retorne o valor do argumento.

3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.

4. Se todos os argumentos forem passados, retorne a soma do primeiro com o
segundo, e o resultado, dividido pelo terceiro.

5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function minhaFuncao(a, b, c) {

    if (a === undefined && b === undefined && c === undefined) {
        return false;
    }


    if (b === undefined && c === undefined) {
        return a;
    }

    if (c === undefined) {
        return a + b;
    }

    if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    }
    return null;
}





// Invoque a função acima utilizando todas as possibilidades (com nenhum
//argumento, com um, com dois e com três.) Coloque um comentário de linha
//ao lado da função com o resultado de cada invocação.

console.log(minhaFuncao(5));          
// Saída: 5

console.log(minhaFuncao(5, 3));       
// Saída: 8

console.log(minhaFuncao(5, 3, 2));    
// Saída: 4

console.log(minhaFuncao());           
// Saída: false

console.log(minhaFuncao(5, 3, 0));    
// Saída: Infinity (divisão por zero)

console.log(minhaFuncao(5, 3, "a"));  
// Saída: null (erro de tipo)
