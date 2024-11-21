/*
Criar e Adicionar Pares Chave-Valor no Map: Crie um Map chamado
livros e adicione nele três pares de chave-valor, onde a chave é o
título do livro e o valor é o autor.
2. Acessar Valor no Map: Acesse o valor associado a uma das chaves no
Map livros que você criou e imprima o nome do autor.
3. Iterar Sobre um Map: Use um loop for...of para iterar sobre o Map
livros e imprimir todos os pares chave-valor.
4. Usando Métodos do Map: size, delete, has: No seu Map livros, use o
método size para imprimir o número de livros, delete para remover um
livro pelo título e has para verificar se um livro ainda está no Map.
5. Map com Tipos de Chaves Diferentes: Crie um Map chamado colecao
que contém diferentes tipos de chaves (como string, number, object)
e seus respectivos valores.
*/
let map = new Map();

map.set("Dom Casmurro", "Machado de Assis");
map.set("O Primo Basílio", "José de Alencar");
map.set("Memórias Póstumas de Brás Cubas", "Machado de Assis");
function AddMap(){

for (let [chave, valor] of map)
{
    console.log(`Titulo: ${chave} , Autor: ${valor}`);
}
};

function mostrarMap(){
    map.forEach((chave, valor) => {
        console.log(`Título: ${chave} , Autor: ${valor}`);
    });
}

function forLoop()
{
    for (let [chave, valor] of map)
{
    console.log(`Titulo: ${chave} , Autor: ${valor}`);
}
};
function ex4(){
    console.log("O tamanho do map é : " + map.size);
    console.log('deletando o Dom Casmurro');
    console.log('Removido :' + map.delete('Dom Casmurro'));
    console.log('Verificando se existe :' + map.has('Dom Casmurro'));
    forLoop();
};

function ex5(){
    let colecao = new Map();
    colecao.set('String','Nome');
    colecao.set('int',2);
    colecao.set('objeto',['Nome',22,'samuel']);
    for (let [chave, valor] of colecao)
    {
        console.log(`${chave} , ${valor}`);
    }
}