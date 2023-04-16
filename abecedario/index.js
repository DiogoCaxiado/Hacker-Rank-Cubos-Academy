letra = "m";
palavras = ["mamao","maca","melao","melancia", "laranja"];
      
let erro = 0;
    
    for (let caractere of palavras){
        if (caractere[0] === letra){
            // ignora
        } else { // contabilize 1 erro
            erro += 1;
        } 
    }
    console.log(erro);
