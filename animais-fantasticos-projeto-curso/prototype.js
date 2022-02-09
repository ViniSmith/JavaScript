function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' nadou';
}

const vini = new Pessoa('Vinicius', 19);
console.log(Pessoa.prototype);

const lista = document.querySelectorAll('li');

//Transforma em uma array

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}