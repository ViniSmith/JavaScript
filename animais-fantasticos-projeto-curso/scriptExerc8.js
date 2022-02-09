// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
Pessoas.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}


// Liste os métodos acessados por
// dados criados em NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores nos dados abaixo;
const li = document.querySelector('li');

li;
console.log(li.constructor.name); // HTMLLIElement
li.click;
console.log(li.click.constructor.name); // Function
li.innerText;
console.log(li.innerText.constructor.name); // String
li.value;
console.log(li.value.constructor.name); // Number
li.hidden;
console.log(li.hidden.constructor.name); // Boolean
li.offsetLeft;
console.log(li.offsetLeft.constructor.name); // Number
li.click();
// console.log(li.click().constructor.name);  undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
console.log(li.hidden.constructor.name.constructor.name); // String