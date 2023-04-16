precos = [100, 500, 100, 200, 50];

let soma = 0;

    let menor = 100000;
    
    for (let item of precos){
        soma += item;
        
        if (menor > item){
        menor = item;
        }
    }
    
   if (precos.length >= 5){
        soma -= menor;
         console.log(soma);
   } else {
       console.log(soma)
   }

//    let soma = 0;
//     let menor = 100000;
    
//     for (let i = 0; i < precos.length; i++){
//         soma += precos[i];
        
//         if (menor > precos[i]){
//         menor = precos[i];
//         }
//     }
    
//    if (precos.length >= 5){
//         soma -= menor;
//          console.log(soma);
//    } else {
//        console.log(soma)
//    }
