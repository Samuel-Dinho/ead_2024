/*
6. Classe ContaBancaria com Método de Saque: Na classe
ContaBancaria, adicione um método sacar que permite sacar um
valor do saldo, garantindo que o saldo não fique negativo.
*/
let conta = 1000;
let carteira;
class ContaBancaria {


    sacar(valor){
        if(conta < valor){
            return "Voce não tem saldo suficiente para efetuar o saque";
        }else{   
        this.conta  = this.conta - valor;
        this.carteira = valor;
        return "Voce sacou " + valor;
        }
    }




}