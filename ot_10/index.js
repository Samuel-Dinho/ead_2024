/*
1. Criando um Convite: Use a concatenação de strings para criar um
convite. Inclua o nome do destinatário, o tipo de evento e a data, usando
variáveis.
*/
let nome = "Enzo";
let evento = "suruba";
let data = 10 / 05 / 2025;

console.log("Vamos participar de um encontro dia " + data + ",desejamos sua presença " + nome + " na nossa festa " + evento);


/*
2. Diário de Bordo: Escreva um pequeno diário de bordo usando template
literals, incluindo data, local e uma descrição do que aconteceu no dia.
*/
let clima = "nublado";
let periodo = "tarde";
let parada = "Phakding";
console.log(`Chegamos ao aeroporto de Lukla com segurança, após um voo turbulento. 
O clima está ${clima} e a previsão é de chuvas fortes à ${periodo}.
 Iniciamos a caminhada até o acampamento base a partir de Lukla,
  com uma parada planejada em ${parada}`)

/*
3. Redator de Notícias: Crie uma string que represente uma notícia,
utilizando o método replace() para substituir um fato errado por um
correto.
*/

let noticia = "Hoje, o governo anunciou novas medidas para combater a inflação, incluindo a redução de impostos sobre produtos essenciais e o aumento do crédito para pequenas empresas. O presidente afirmou que as ações visam melhorar a economia e a vida da população.";
let mudar = noticia.replace("Hoje", "Amanha");
console.log(mudar);

/*

4. Caixa de Comentários: Use o método trim() para limpar os
comentários dos usuários antes de publicá-los em um blog ou fórum.
*/
let blog = " Que beleza ";

console.log(blog.trim());


/*

5. Carta para um Amigo: Utilize \\n para formatar uma carta para um
amigo, com saudação, corpo da mensagem e despedida, cada um em
uma nova linha.
*/
let mensagem = "Espero que você esteja bem!\n Só queria aproveitar para te enviar um abraço e lembrar o quanto sua amizade significa para mim. \nFico por aqui, aguardando nossa próxima conversa. \n\n Até logo, meu amigo!"
/*
6. Citações Famosas: Crie uma string que inclua uma citação famosa de
uma pessoa, utilizando caracteres de escape para incluir aspas na
citação.
*/
let mensagem2 = "Lorem ipsum dolor sit amet. Rem quia quia et voluptas amet est exercitationem amet. Qui atque aperiam est laboriosam enim non voluptas provident et beatae nisi a voluptas modi est labore eveniet! \"Sit omnis aliquid id reprehenderit voluptatum qui perferendis mollitia id voluptatibus rerum\"";