function contar() {
    var fini = document.getElementById('txtini')
    var ini = Number(fini.value)
    var ffim = document.getElementById('txtfim')
    var fim = Number(ffim.value)
    var fpass = document.getElementById('txtpas')
    var pass = Number(fpass.value)
    var res = document.getElementById('res')

    if (fini.value == 0 || ffim.value == 0 || fpass.value == 0) {
        res.innerHTML = 'Impossível contar'
        window.alert('[ERRO]')

    }else {
        res.innerText = 'Contando:\u{1F633}'

            if (pass <= 0) {
                window.alert('Sequência inválida! Considerando 1 ao invés')
                pass = 1
            }

            if (ini<fim) { //CONTAGEM CRESCENTE
                for(let c = ini ; c <= fim ; c += pass) {
                    res.innerHTML += `${c} \u{1F921} `
                }
                res.innerHTML += `${c} \u{1F60E}`
            } else { // CONTAGEM DECRESCENTE
                for(let c = ini; c>=fim; c-= pass) {
                    res.innerHTML += `${c} \u{1F921}`
                }
                res.innerHTML += `\u{1F60E}`       
            }
        }
}
