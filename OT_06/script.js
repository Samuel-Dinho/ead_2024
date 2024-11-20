/*
Criar e Acessar um Objeto: Crie um objeto chamado carro com
propriedades como marca, modelo e ano. Em seguida, acesse e
imprima a propriedade modelo do objeto.

2. Adicionar e Modificar Propriedades de um Objeto: A partir do objeto
carro criado, adicione uma propriedade cor e modifique o ano do
carro. Imprima o objeto modificado.

3. Criar um Método em um Objeto: Crie um objeto chamado calculadora
com um método soma que aceite dois números e retorne a soma deles.

4. Iterar Sobre as Propriedades de um Objeto: Dado um objeto, use um
loop for...in para iterar sobre todas as suas propriedades e imprimir
cada uma delas.
5. Entendendo Referências de Objetos: Crie um objeto livro com
propriedades como titulo e autor. Em seguida, crie outra variável
que referencie o objeto livro e modifique a propriedade titulo.
Verifique se o objeto original foi alterado.
6. Usando Métodos Avançados de Objeto: Dado um objeto, use o método
Object.keys() para listar todas as chaves do objeto. Repita o
processo com Object.values() para listar todos os valores.
*/
let car = {
    marca :'Fiat',
    modelo :'Uno',
    ano :'2025'
}
function DisplayCar() {
    var mostrar = document.getElementById('mostrar'); // Obtém o elemento HTML onde você quer exibir as informações
    mostrar.innerHTML = ""; // Limpa qualquer conteúdo pré-existente no elemento 'mostrar'

    // Itera sobre as propriedades do objeto 'car'
    for (let mostra in car) {
        // Cria um novo elemento <p> para cada propriedade e valor
        var itens = document.createElement("p");

        // Define o conteúdo do <p> com a propriedade e valor de 'car'
        itens.innerHTML = mostra + ": " + car[mostra];

        // Adiciona o novo <p> ao elemento 'mostrar'
        mostrar.appendChild(itens);
    }
}

function ModificarCarro() {
    let radio = document.querySelector('input[name=opcao]:checked'); // obtém o radio selecionado

    if (!radio) {
        return false; // Se nenhum rádio for selecionado, retorna false
    }

    let modificar = document.getElementById('modificar').value; // pega o valor a ser alterado
    let car = {}; // Supondo que a variável car seja um objeto já definido ou preenchido anteriormente.

    // Atribuição com base na escolha do usuário
    if (radio.value == "Marca") {
        car.marca = modificar;
    } else if (radio.value == "Modelo") {
        car.modelo = modificar;
    } else if (radio.value == "Ano") {
        car.ano = modificar;
    } else {
        car.outro = modificar;
        console.log(car.outro);
    }

    
}
