/*1. Criando uma Lista de Compras: Use o operador spread para combinar
dos arrays de itens de supermercado em uma lista de compras.
*/
let mistura = ['carne','frango','peixe'];
let frutas = ['melancia','laranja','melão'];
let lista = [...mistura,...frutas];
console.log(lista)

/*
2. Atualizando um Perfil de Usuário: Crie um objeto usuario com
propriedades como nome e email. Use o operador spread para criar um
novo objeto com os dados do usuário e uma propriedade adicional
status.
*/
let usuario = ['nome','email'];
let perfil = [...usuario,'senha'];
/*
3. Festa de Aniversário: Crie uma função que aceita um número variável
de nomes e os imprime como lista de convidados para uma festa de
aniversário, usando o operador spread para coletar os nomes.
*/
function lista(nome){
    let lista = ['samuel','jose','enzo',...nome];
}

/*
4. Clonando um Array de Músicas: Dado um array de músicas, crie uma
cópia do array usando o operador spread. Altere um elemento no array
copiado e verifique se o array original permanece inalterado.
*/
musicas = [
    "Shape of You - Ed Sheeran",
    "Blinding Lights - The Weeknd",
    "Bohemian Rhapsody - Queen",
    "Happier Than Ever - Billie Eilish",
    "Rolling in the Deep - Adele"
];
let musicasEscolhidas = [...musicas];
musicasEscolhidas[0] = "Uptown Funk - Mark Ronson ft. Bruno Mars";
console.log(musicas);
console.log(musicasEscolhidas)
/*
5. Mesclando Objetos com Informações Complementares: Crie dois
objetos, um com informações básicas de um filme (título e diretor) e
outro com informações complementares (ano e gênero). Use o operador
spread para mesclar esses objetos em um único objeto filme.
*/
let informacoes_basicas = [
    {"titulo": "O Poderoso Chefão", "diretor": "Francis Ford Coppola"},
    {"titulo": "Cidadão Kane", "diretor": "Orson Welles"},
    {"titulo": "Matrix", "diretor": "Lana e Lilly Wachowski"}
];
let informacoes_complementares = [
    {"ano": 1972, "genero": "Crime, Drama"},
    {"ano": 1941, "genero": "Drama, Mistério"},
    {"ano": 1999, "genero": "Ação, Ficção Científica"}
];

let informaçoesCompleta = [...informacoes_basicas,informacoes_complementares];

/*
6. Criando um Menu de Restaurante Variável: Faça uma função criarMenu
que aceita vários itens (entradas, pratos principais, sobremesas) como
arrays e usa o operador spread para criar um único array de menu.

*/
entradas = [
    "Salada Caesar",
    "Bruschetta de tomate",
    "Ceviche de peixe branco",
    "Carpaccio de carne",
    "Sopa de abóbora"
];

pratos_principais = [
    "Filé mignon ao molho madeira",
    "Frango assado com batatas",
    "Risoto de cogumelos",
    "Lasanha de carne",
    "Peixe grelhado com legumes"
];
sobremesas = [
    "Tiramisu",
    "Pavê de chocolate",
    "Cheesecake de frutas vermelhas",
    "Mousse de maracujá",
    "Bolo de cenoura com cobertura de chocolate"
];

let pedido = [...sobremesas,...pratos_principais,...entradas];