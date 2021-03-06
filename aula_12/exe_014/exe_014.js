function carregar(){  
var img=window.document.getElementById('imagem')
var res=window.document.getElementById('msg')
var data=new Date()
var hora=data.getHours()
res.innerHTML=`Agora são ${hora} horas.`
if(hora <= 12){
    img.src='manha.jpg'
    document.body.style.background='#cc757cb4'
} else if( hora <=18){
    img.src='tarde.jpg'
    document.body.style.background='#91abdbb4'
}else {
    img.src='noite.jpg'
    document.body.style.background='#09265cb4'
}  
}