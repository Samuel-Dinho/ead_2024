//Desafio 03
// Declarar uma variável qualquer, que receba um objeto vazio.

let variavel;

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem
ser:

- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let pessoa = {
    'nome': String,
    'sobrenome': String,
    'sexo':String,
    'idade':number,
    'altura':number,
    'peso': number,
    'andando':false,
    'caminhouQuantosMetros':0

};


/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O
método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez
que
for chamado.
*/
function fazerAniversario (){
    pessoa.idade = pessoa.idade ++;
};
/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as
seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a
quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando
ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
function andar(metros){
    pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + metros;
    pessoa.andando = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o
valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
function parar(){
    pessoa.andando = false;
}
/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
function nomeCompleto(){
    return "Olá! meu nome é " + pessoa.nome + pessoa.sobrenome;
};
/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
function mostrarIdade(){
    return "Olá, eu tenho " + pessoa.idade + "anos";
}
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
function mostrarPeso(){
    return "Eu peso " + pessoa.peso + "KG";
}
/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
function mostrarAltura(){
    return "Minha altura é " + pessoa.altura;
}
/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e
comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(nomeCompleto());
/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(mostrarIdade());
/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(mostrarPeso());
/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(mostrarAltura());

/*
Faça a `pessoa` fazer 3 aniversários.
*/
console.log(fazerAniversario(3));
/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
3
/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar`
3x,
com metragens diferentes passadas por parâmetro.
*/
console.log(andar(3));
/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.andando);
sim 
/*
Se a pessoa ainda está andando, faça-a parar.
*/
console.log(parar());
/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.andando);
não

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e
comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.caminhouQuantosMetros);
/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método
deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu
peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS]
metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";

- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;

- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".

- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
function Apresentacao(){
let variaveis;
let variaveisIdade = "anos";
let variaveisMetros = "metros";
if(pessoa.sexo == "Feminino"){
    variaveis = "a";
}else{
    variaveis = "o";
}
if (pessoa.idade == 1){
    variaveisIdade = "ano";
}
if(pessoa.caminhouQuantosMetros == 1 ){
    variaveisMetros = "metro";
}
console.log("Olá, eu sou " + variaveis + pessoa.nome + pessoa.sobrenome + " , Tenho " + 
pessoa.idade + variaveisIdade  +", " + altura(), peso() + 
" e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros  + variaveisMetros + "!")
// Agora, apresente-se ;)
};