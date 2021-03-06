/* Exemplo de Aplicação com estrutura de Condição multipla switch:

    switch(Expressao){
        case valor 1:
            break   para interromper o bloco de comando.
        case valor 2:
        .         caso não exista break todos os comandos em seguida do bloco serão executado ate 
        .         encontrar um break.
        .
        case valor n:
            break
        default:  Essa é a parte que é executada caso nenhuma das anteriores sejam. 
            break
    }
*/
var diaSem=new Date()
var dia=diaSem.getDay()
switch(dia){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda') 
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta') 
        break 
    case 4:
        console.log('Quinta')
        break 
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado') 
        break 
    default:
        console.log('[Error] Dia invalido')
        break                  
}