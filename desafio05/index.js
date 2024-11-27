/*
Crie uma variável qualquer, que receba um array com alguns valores
aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let array = ['5', '4', '3', '2', '1'];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function chamaArray(array) {
    return this.array;
};
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
function segundoIndex(array) {
    return this.array[2];
}
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores;
e o
segundo, um número. A função deve retornar o valor de um índice do array
que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o
número passado no
segundo parâmetro.
*/
function parametrosArray(array, segundoArray) {
    return this.array[1] = segundoArray
};
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let outroArray = ['2', 3, true, null, undefined];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
function retornoOutroArray(outroArray) {
    return outroArray;
}
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
    let livro1 = {
        'nome': 'Nome',
        'quantidadePaginas': 10,
        'autor': 'autor',
        'editora': 'editora',
    };
    let livro2 = {
        'nome': 'Nome2',
        'quantidadePaginas': 5,
        'autor': 'autors',
        'editora': 'editord',
    };
    
    if (nome) {
        if (nome == livro1.nome) {
            return livro1;
        }else if(nome == livro2.nome){
            return livro2;
        }
        return livros = {livro1,livro2};
    } else {

    }
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
function mostraLivros(){
    return book('Nome');
}
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro
qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
function msgLivros(){
    let quantidade = book("nome");
    return "O livro " + quantidade.nome + " tem " + quantidade.quantidadePaginas + " páginas!";
};
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer,
usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
function autorLivro(){
    let livro = book("nome");
    return "O autor do livro " + livro.nome + "é" + livro.autor;
};
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer,
usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
function autoLivro (){
    let livro = book("nome");
    return "O livro " + livro.nome + " foi publicado pela editora " + livro.editora;
}