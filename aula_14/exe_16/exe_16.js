function contar(){
  var inicio=window.document.getElementsByTagName('input')[0]
  var fnal=window.document.getElementsByTagName('input')[1]
  var passo=window.document.getElementsByTagName('input')[2]
  var res=window.document.getElementById('res')
  for(var i=inicio.value; i <= fnal.value;i+passo.value){
    res.innerHTML+='sarao'
  }
  
}
