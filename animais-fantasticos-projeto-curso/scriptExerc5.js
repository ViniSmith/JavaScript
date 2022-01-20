// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');
function clickClass(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    this.classList.toggle('ativo');
    console.log(this);
}

linksInternos.forEach((link) => {
    link.addEventListener('click', clickClass);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *');
function itensClick(event) {
    console.log(event.currentTarget);
}
allElements.forEach((elemento) => {
    elemento.addEventListener('click', itensClick);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove()
// remove um elemento
    function itensClick(event) {
        event.currentTarget.remove()
    }


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function clickT(event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('fonteMaior');
    }
}
window.addEventListener('keydown', clickT);