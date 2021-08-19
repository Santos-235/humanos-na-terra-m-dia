//1°js do jhon
function resposta() {
    var respost = prompt("O que você deve fazer? Escolha entre 1 ou 2.")
    
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que você deve fazer?")
       
    }

    if (respost == 1) {
        location.href = "jhon1.1.html"
       
    } else {
        location.href = "jhon1.2.html"
  
    } 
    return 
}