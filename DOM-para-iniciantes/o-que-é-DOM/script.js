const href = window.location.href;

console.log(href);

if(href ==='http://127.0.0.1:5500/index.html') {
    console.log("É igual")
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

h1Selecionado.addEventListener('click', function() {
    console.log('Clicou em ', h1Selecionado.innerText);
})