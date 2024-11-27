/*
5 .Jogo Simples com Classe: Crie uma classe Jogo com um método
estático que gera um número aleatório e permite ao usuário adivinhar. O
método retorna se o usuário acertou ou não.
*/

let numeroAle;
class Jogo{

    digiteNumero(){
        return "Digite um Numero e tenta descobrir qual é o numero";
    }

    advinhaNumeroAle(numero){
        numeroAle = parseInt(Math.random() * 5);
        if(this.numeroAle == numero){
            return "parabens você consegue acerta o Numero";
        }else{
            return "infelizmente voce não acertou o Numero, tente novamente!!";
        }
    }




}