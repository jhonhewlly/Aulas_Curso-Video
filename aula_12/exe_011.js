var idade=87
console.log(`Sua idade é ${idade}`)
if(idade < 16){
    console.log('Não Vota')
}else if( idade < 18 || idade >= 67 ){
  console.log('Voto opcional')
     
}else {
    console.log('Voto obrigatorio')
}