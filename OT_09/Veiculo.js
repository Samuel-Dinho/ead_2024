
let marca;
let modelo;
let velocidadeMaxima;

class veiculo{
    constructor(marca,modelo,velocidadeMaxima){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    descricao(){
        return "Marca : " + this.marca + " Modelo: " + this.modelo + " Velocidade Maxima: " + this.velocidadeMaxima;
    }
}