// function jackresposta() {


//     var respost = prompt("Como Jack começa sua defesa?")
//     var resposta = parseInt(respost)

//     while (resposta != 1 && resposta != 2) {


//         alert("Resposta inválida! \n pressione, defender-se novamente")
//         // respost = "Como Jack começa sua defesa?"
//         // prompt(`${respost}`)
        

//         break



//         //prompt("Como Jack começa sua defesa?")
//     }
    

//     if (resposta === 1) {


//         location.assign("jackR1.2.html")

//     }
//     else if (resposta === 2) {

//         location.assign("jackR1.1.html")

//     }
//     else {
//     }



//     return resposta

// }




function resposta() {
    var respost = prompt("O que você deve fazer? Escolha entre 1 ou 2.")
    
    while (respost != 1 && respost != 2){
        alert ("Escolha inválida \n Clique novamente para responder")
        respost = prompt("O que você deve fazer?")
       
    }

    if (respost == 1) {
        location.href = "jackR1.html"
       
    } else {
        location.href = "jackR2.html"
  
    } 
    return 
}

