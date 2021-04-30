var num = document.getElementById('txtnum')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert ('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}