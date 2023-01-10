function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && 10 >= idade){
                //criança
                img.setAttribute('src', 'bebemenino.jpg')
                img.style.width = '280px'
                img.style.height = '280px'
            } else if (idade < 21) {
                //jovem
                img.style.width = '210px'
                img.style.height = '260px'
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 50){
                //Adulto
                img.style.width = '280px'
                img.style.height = '280px'
                img.setAttribute('src', 'homem.jpg')
            } else {
                //velho
                img.style.width = '280px'
                img.style.height = '280px'
                img.setAttribute('src', 'velho.jpg')
            }


        } else if(fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && 10 >= idade){
                //criança
                img.style.width = '250px'
                img.style.height = '280px'
                img.setAttribute('src', 'bebemenina.jpg')
            } else if (idade < 21) {
                //jovem
                img.style.width = '250px'
                img.style.height = '280px'
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 50){
                //Adulto
                img.style.width = '280px'
                img.style.height = '280px'
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //velho
                img.style.width = '280px'
                img.style.height = '280px'
                img.setAttribute('src', 'velha.jpg')
            }
        }
        img.style.marginTop = '10px'
        img.style.borderRadius = '50%'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}