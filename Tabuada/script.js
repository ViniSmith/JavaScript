function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('lista')
    let tab1 = document.getElementById('lista1')
    let tab2 = document.getElementById('lista2')
    var menu = document.getElementById('menu')

    

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')

    } else {
        let n = Number(txtn.value)
        let c = 1
        let d = 11
        let e = 21
        tab.innerHTML = ''
        tab1.innerHTML = ''
        tab2.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

        while (d <=20) {
            let item1 = document.createElement('option')
            item1.text = `${n} x ${d} = ${n*d}`
            item1.value = `tab1${d}`
            tab1.appendChild(item1)
            d++
        }

        while (e <=30) {
            let item2 = document.createElement('option')
            item2.text = `${n} x ${e} = ${n*e}`
            item2.value = `tab2${e}`
            tab2.appendChild(item2)
            e++
        }
    }
}