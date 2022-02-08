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