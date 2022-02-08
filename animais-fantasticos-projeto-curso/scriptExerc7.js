// Transforme o objeto abaixo em uma Constructor Function
function People(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + ' andou');
    }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new People('João', 20);
const pessoa2 = new People('Maria', 25);
const pessoa3 = new People('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function listDom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((item) => {
            item.classList.add(classe);
        });
    }
    this.removeClass = function(classe) {
        elementList.forEach((item) => {
            item.classList.remove(classe);
        });
    }
}

const lista = new listDom('ul');
lista.addClass('ativo');
lista.removeClass('ativo');
