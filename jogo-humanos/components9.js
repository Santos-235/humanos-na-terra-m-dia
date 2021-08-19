function resposta() {
    var respost = prompt("O que você deve fazer? Escolha entre 1 ou 2.")
    
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que você deve fazer?")
       
    }

    if (respost == 1) {
        location.href = "osbourn3.1.html"
       
    } else {
        location.href = "osbourn3.2.html"
  
    } 
    return 
}