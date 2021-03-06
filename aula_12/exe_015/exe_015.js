function verificar() {
    var data=new Date()
    var ano=data.getFullYear()
    var fano=window.document.getElementById('ano')
    var res=window.document.getElementById('res')
    if(fano.value==0 || Number(fano.value) > ano ){
        window.alert('[error] tente inserir os dados novamente')
    }else {
        var sexo=window.document.getElementsByName('sexo')
        var idade=ano-Number(fano.value)
        var genero=''
        var img=window.document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            genero='Homem'
            if(idade < 14){
                img.setAttribute('src','homem_crianca.png')
                //criança
            } else if(idade < 21){
                img.setAttribute('src','homem_jovem.png')
                //joven
            } else if(idade < 50) {
                img.setAttribute('src','homem_adulto.png')
                //adulto
            } else {
                img.setAttribute('src','homem_idoso.png')
                //idoso
            }
        }else if(sexo[1].checked){
            genero='Mulher'
            if(idade < 14){
                img.setAttribute('src','mulher_crianca.png')

            }else if(idade < 21){
                img.setAttribute('src','mulhe_joven.png')

            }else if(idade < 50){
                img.setAttribute('src','mulher_adulta.png')

            }else{
                img.setAttribute('src','mulher_idosa.png')

            }
        }
        res.style.textAlign='center'
        res.innerHTML=`${genero} com ${idade} anos de Idade.`
        res.appendChild(img)

    }
    
}