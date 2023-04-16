stringCorrompida = "*Canis %lupus )familiaris";

let purificado = "";

    for (let i = 0; i < stringCorrompida.length; i++){
        if (stringCorrompida[i] === "!" || stringCorrompida[i] === "@" || stringCorrompida[i] === "#" || stringCorrompida[i] === "$" || 
        stringCorrompida[i] === "%" || stringCorrompida[i] === "&" || stringCorrompida[i] === "*" || stringCorrompida[i] === "(" || stringCorrompida[i] === ")"){
        } else {
            purificado += stringCorrompida[i];
        }
    }
    console.log(purificado);

    // for (let caractere of stringCorrompida){
    //     if (caractere == '!' || caractere == '@' || caractere == '#' || caractere == '$' || 
    //     caractere == '%' || caractere == '&'|| caractere == '*'|| caractere == '(' || caractere == ')' ){
    //     } else {
    //         purificado += caractere;
    //     }
    // }
    // console.log(purificado);