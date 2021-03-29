function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Choncc'
            if (idade >=0 && idade < 10) {
                //baby choncc
                res.innerHTML = `Detectamos um baby ${genero} com apenas ${idade} anos!`
                img.setAttribute ('src', 'img/babychoncc.png')
            } else if (idade <= 21) {
                //panda choncc
                res.innerHTML = `Você é um raro panda ${genero}, com ${idade} anos!`
                img.setAttribute ('src', 'img/pandachoncc.png')
            } else if (idade <= 50) {
                // choncc barrigudo
                res.innerHTML = `Você é um ${genero} barrigudão, com ${idade} anos!`
                img.setAttribute ('src', 'img/chonccbarrigudo.png')
            } else {
                // chonc ancião
                res.innerHTML = `Você é um papa ${genero} ancião, com ${idade} anos!`
                img.setAttribute ('src', 'img/papachoncc.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Ao shin'
            if (idade >=0 && idade < 10) {
                //baby ao shin
                res.innerHTML = `Detectamos um baby ${genero} com apenas ${idade} anos!`
                img.setAttribute ('src', 'img/babyaoshin.png')
            } else if (idade <= 21) {
                // rare ao shin
                res.innerHTML = `Você é um raro ${genero} sol, com ${idade} anos!`
                img.setAttribute ('src', 'img/rareaoshin.png')
            } else if (idade <= 50) {
                // ao shin guitarra
                res.innerHTML = `Você é um ${genero} guitarrista, com ${idade} anos!`
                img.setAttribute ('src', 'img/aoshinguitarra.png')
            } else {
                // ao shin ancião
                res.innerHTML = `Você é um papa ${genero} ancião, com ${idade} anos!`
                img.setAttribute ('src', 'img/papaaoshin.png')
            }

        } else if (fsex[2].checked) {
            genero = 'Umbra'
            if (idade >=0 && idade < 10) {
                // baby umbra
                res.innerHTML = `Detectamos um baby ${genero} com apenas ${idade} anos!`
                img.setAttribute ('src', 'img/babyumbra.png')
            } else if (idade <= 21) {
                // rare umbra
                res.innerHTML = `Você é um raro ${genero} Blood moon, com ${idade} anos!`
                img.setAttribute ('src', 'img/rareumbra.png')
            } else if (idade <= 50) {
                // umbra guitarra
                res.innerHTML = `Você é ${genero} guitarrista, com ${idade} anos!.`
                img.setAttribute ('src', 'img/umbraguitarra.png')
            } else {
                // umbra ancião
                res.innerHTML = `Você é um papa ${genero} ancião, com ${idade} anos!`
                img.setAttribute ('src', 'img/papaumbra.png')
            }
        }
        res.style.textAlign = 'center'
        res.appendChild (img)
    }
    
}